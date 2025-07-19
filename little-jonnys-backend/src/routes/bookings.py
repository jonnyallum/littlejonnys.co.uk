from flask import Blueprint, request, jsonify
from datetime import datetime
import uuid
from src.config.supabase import supabase

bookings_bp = Blueprint('bookings', __name__)

@bookings_bp.route('/bookings', methods=['POST'])
def create_booking():
    """
    Create a new booking request
    """
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'location', 'eventDate']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Prepare booking data
        booking_data = {
            'client_name': data['name'],
            'client_email': data['email'],
            'client_phone': data['phone'],
            'event_location': data['location'],
            'event_date': data['eventDate'],
            'arrival_time': data.get('arrivalTime'),
            'power_water': data.get('powerWater'),
            'dietary_notes': data.get('dietaryNotes'),
            'special_requests': data.get('specialRequests'),
            
            # Service selections
            'hog_roast_selected': data.get('services', {}).get('hogRoast', False),
            'hog_roast_guests': int(data.get('hogRoastGuests', 0)) if data.get('hogRoastGuests') else None,
            
            'pizza_selected': data.get('services', {}).get('pizza', False),
            'pizza_guests': int(data.get('pizzaGuests', 0)) if data.get('pizzaGuests') else None,
            
            'bar_selected': data.get('services', {}).get('bar', False),
            'bar_guests': int(data.get('barGuests', 0)) if data.get('barGuests') else None,
            
            'buffet_selected': data.get('services', {}).get('buffet', False),
            'buffet_guests': int(data.get('buffetGuests', 0)) if data.get('buffetGuests') else None,
            'buffet_package': data.get('buffetPackage'),
            'canapes': data.get('canapes', False),
            'sandwiches': data.get('sandwiches', False),
            'cakes': data.get('cakes', False),
            
            'status': 'pending'
        }
        
        # Insert into Supabase
        if supabase:
            result = supabase.table('bookings').insert(booking_data).execute()
            
            if result.data:
                return jsonify({
                    'success': True,
                    'message': 'Booking request submitted successfully',
                    'booking_id': result.data[0]['id']
                }), 201
            else:
                return jsonify({'error': 'Failed to create booking'}), 500
        else:
            # Fallback for development without Supabase
            return jsonify({
                'success': True,
                'message': 'Booking request received (development mode)',
                'booking_id': str(uuid.uuid4())
            }), 201
            
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@bookings_bp.route('/bookings', methods=['GET'])
def get_bookings():
    """
    Get all bookings (admin only)
    """
    try:
        if supabase:
            result = supabase.table('bookings').select('*').order('created_at', desc=True).execute()
            return jsonify({'bookings': result.data}), 200
        else:
            return jsonify({'bookings': []}), 200
            
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@bookings_bp.route('/bookings/<booking_id>', methods=['GET'])
def get_booking(booking_id):
    """
    Get a specific booking by ID
    """
    try:
        if supabase:
            result = supabase.table('bookings').select('*').eq('id', booking_id).execute()
            
            if result.data:
                return jsonify({'booking': result.data[0]}), 200
            else:
                return jsonify({'error': 'Booking not found'}), 404
        else:
            return jsonify({'error': 'Database not available'}), 503
            
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@bookings_bp.route('/bookings/<booking_id>', methods=['PUT'])
def update_booking(booking_id):
    """
    Update a booking (admin only)
    """
    try:
        data = request.get_json()
        
        if supabase:
            result = supabase.table('bookings').update(data).eq('id', booking_id).execute()
            
            if result.data:
                return jsonify({
                    'success': True,
                    'message': 'Booking updated successfully',
                    'booking': result.data[0]
                }), 200
            else:
                return jsonify({'error': 'Booking not found'}), 404
        else:
            return jsonify({'error': 'Database not available'}), 503
            
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

