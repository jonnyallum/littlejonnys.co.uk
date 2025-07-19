from flask import Blueprint, request, jsonify, url_for
import stripe
import os
from src.config.supabase import supabase

payments_bp = Blueprint('payments', __name__)

# Configure Stripe
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

@payments_bp.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    """
    Create a Stripe Checkout session for deposit payment
    """
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['booking_id', 'amount', 'customer_email', 'customer_name']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        booking_id = data['booking_id']
        amount = float(data['amount'])
        customer_email = data['customer_email']
        customer_name = data['customer_name']
        
        # Convert amount to pence (Stripe uses smallest currency unit)
        amount_pence = int(amount * 100)
        
        # Create Stripe Checkout session
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'gbp',
                    'product_data': {
                        'name': 'Little Jonny\'s Catering - Booking Deposit',
                        'description': f'Deposit for booking #{booking_id}',
                    },
                    'unit_amount': amount_pence,
                },
                'quantity': 1,
            }],
            mode='payment',
            customer_email=customer_email,
            metadata={
                'booking_id': booking_id,
                'customer_name': customer_name,
                'payment_type': 'deposit'
            },
            success_url=request.host_url + f'payment-success?session_id={{CHECKOUT_SESSION_ID}}&booking_id={booking_id}',
            cancel_url=request.host_url + f'payment-cancelled?booking_id={booking_id}',
        )
        
        return jsonify({
            'checkout_url': session.url,
            'session_id': session.id
        }), 200
        
    except stripe.error.StripeError as e:
        return jsonify({'error': f'Stripe error: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@payments_bp.route('/payment-success')
def payment_success():
    """
    Handle successful payment redirect
    """
    session_id = request.args.get('session_id')
    booking_id = request.args.get('booking_id')
    
    if not session_id or not booking_id:
        return jsonify({'error': 'Missing session_id or booking_id'}), 400
    
    try:
        # Retrieve the session from Stripe
        session = stripe.checkout.Session.retrieve(session_id)
        
        if session.payment_status == 'paid':
            # Update booking in Supabase
            if supabase:
                update_data = {
                    'deposit_paid': True,
                    'status': 'deposit_paid',
                    'deposit_amount': session.amount_total / 100,  # Convert back from pence
                    'stripe_session_id': session_id
                }
                
                result = supabase.table('bookings').update(update_data).eq('id', booking_id).execute()
                
                if result.data:
                    return jsonify({
                        'success': True,
                        'message': 'Payment successful! Your booking deposit has been received.',
                        'booking_id': booking_id,
                        'amount_paid': session.amount_total / 100
                    }), 200
                else:
                    return jsonify({'error': 'Failed to update booking status'}), 500
            else:
                return jsonify({
                    'success': True,
                    'message': 'Payment successful! (Development mode)',
                    'booking_id': booking_id
                }), 200
        else:
            return jsonify({'error': 'Payment not completed'}), 400
            
    except stripe.error.StripeError as e:
        return jsonify({'error': f'Stripe error: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@payments_bp.route('/payment-cancelled')
def payment_cancelled():
    """
    Handle cancelled payment redirect
    """
    booking_id = request.args.get('booking_id')
    
    return jsonify({
        'success': False,
        'message': 'Payment was cancelled. You can try again later.',
        'booking_id': booking_id
    }), 200

@payments_bp.route('/webhook', methods=['POST'])
def stripe_webhook():
    """
    Handle Stripe webhooks for payment events
    """
    payload = request.get_data(as_text=True)
    sig_header = request.headers.get('Stripe-Signature')
    endpoint_secret = os.getenv('STRIPE_WEBHOOK_SECRET')
    
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        return jsonify({'error': 'Invalid payload'}), 400
    except stripe.error.SignatureVerificationError as e:
        return jsonify({'error': 'Invalid signature'}), 400
    
    # Handle the event
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        booking_id = session['metadata'].get('booking_id')
        
        if booking_id and supabase:
            # Update booking status
            update_data = {
                'deposit_paid': True,
                'status': 'deposit_paid',
                'deposit_amount': session['amount_total'] / 100,
                'stripe_session_id': session['id']
            }
            
            supabase.table('bookings').update(update_data).eq('id', booking_id).execute()
    
    elif event['type'] == 'payment_intent.payment_failed':
        # Handle failed payment
        payment_intent = event['data']['object']
        # Log the failure or notify admin
        pass
    
    return jsonify({'status': 'success'}), 200

@payments_bp.route('/refund', methods=['POST'])
def create_refund():
    """
    Create a refund for a payment (admin only)
    """
    try:
        data = request.get_json()
        
        session_id = data.get('session_id')
        amount = data.get('amount')  # Optional partial refund amount
        reason = data.get('reason', 'requested_by_customer')
        
        if not session_id:
            return jsonify({'error': 'Missing session_id'}), 400
        
        # Retrieve the session to get the payment intent
        session = stripe.checkout.Session.retrieve(session_id)
        payment_intent_id = session.payment_intent
        
        # Create refund
        refund_data = {
            'payment_intent': payment_intent_id,
            'reason': reason
        }
        
        if amount:
            refund_data['amount'] = int(float(amount) * 100)  # Convert to pence
        
        refund = stripe.Refund.create(**refund_data)
        
        return jsonify({
            'success': True,
            'refund_id': refund.id,
            'amount': refund.amount / 100,
            'status': refund.status
        }), 200
        
    except stripe.error.StripeError as e:
        return jsonify({'error': f'Stripe error: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

