from flask import Blueprint, request, jsonify
from src.config.supabase import supabase

prices_bp = Blueprint('prices', __name__)

@prices_bp.route('/prices', methods=['GET'])
def get_prices():
    """
    Get all active prices
    """
    try:
        if supabase:
            result = supabase.table('prices').select('*').eq('active', True).order('service_type').execute()
            return jsonify({'prices': result.data}), 200
        else:
            # Fallback data for development
            fallback_prices = [
                {
                    'id': '1',
                    'service_type': 'hog_roast',
                    'service_name': 'Hog Roast Catering',
                    'price_per_unit': 8.50,
                    'unit_type': 'person',
                    'minimum_quantity': 50,
                    'description': 'Traditional slow-cooked hog roast with all accompaniments'
                },
                {
                    'id': '2',
                    'service_type': 'pizza',
                    'service_name': 'Mobile Pizza Van',
                    'price_per_unit': 12.00,
                    'unit_type': 'pizza',
                    'minimum_quantity': None,
                    'description': 'Wood-fired pizzas made fresh on-site'
                },
                {
                    'id': '3',
                    'service_type': 'bar',
                    'service_name': 'Mobile Bar Service',
                    'price_per_unit': 300.00,
                    'unit_type': 'event',
                    'minimum_quantity': None,
                    'description': 'Professional licensed mobile bar with bartender'
                },
                {
                    'id': '4',
                    'service_type': 'buffet',
                    'service_name': 'Buffet Package 1',
                    'price_per_unit': 6.50,
                    'unit_type': 'person',
                    'minimum_quantity': 20,
                    'description': 'Basic buffet package'
                },
                {
                    'id': '5',
                    'service_type': 'buffet',
                    'service_name': 'Buffet Package 2',
                    'price_per_unit': 8.50,
                    'unit_type': 'person',
                    'minimum_quantity': 20,
                    'description': 'Standard buffet package'
                },
                {
                    'id': '6',
                    'service_type': 'buffet',
                    'service_name': 'Buffet Package 3',
                    'price_per_unit': 12.50,
                    'unit_type': 'person',
                    'minimum_quantity': 20,
                    'description': 'Premium buffet package'
                }
            ]
            return jsonify({'prices': fallback_prices}), 200
            
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@prices_bp.route('/prices/<service_type>', methods=['GET'])
def get_prices_by_service(service_type):
    """
    Get prices for a specific service type
    """
    try:
        if supabase:
            result = supabase.table('prices').select('*').eq('service_type', service_type).eq('active', True).execute()
            return jsonify({'prices': result.data}), 200
        else:
            # Filter fallback data by service type
            all_prices = [
                {'id': '1', 'service_type': 'hog_roast', 'service_name': 'Hog Roast Catering', 'price_per_unit': 8.50, 'unit_type': 'person', 'minimum_quantity': 50},
                {'id': '2', 'service_type': 'pizza', 'service_name': 'Mobile Pizza Van', 'price_per_unit': 12.00, 'unit_type': 'pizza', 'minimum_quantity': None},
                {'id': '3', 'service_type': 'bar', 'service_name': 'Mobile Bar Service', 'price_per_unit': 300.00, 'unit_type': 'event', 'minimum_quantity': None},
                {'id': '4', 'service_type': 'buffet', 'service_name': 'Buffet Package 1', 'price_per_unit': 6.50, 'unit_type': 'person', 'minimum_quantity': 20},
                {'id': '5', 'service_type': 'buffet', 'service_name': 'Buffet Package 2', 'price_per_unit': 8.50, 'unit_type': 'person', 'minimum_quantity': 20},
                {'id': '6', 'service_type': 'buffet', 'service_name': 'Buffet Package 3', 'price_per_unit': 12.50, 'unit_type': 'person', 'minimum_quantity': 20}
            ]
            filtered_prices = [p for p in all_prices if p['service_type'] == service_type]
            return jsonify({'prices': filtered_prices}), 200
            
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@prices_bp.route('/quote', methods=['POST'])
def calculate_quote():
    """
    Calculate a quote based on selected services and guest numbers
    """
    try:
        data = request.get_json()
        services = data.get('services', {})
        
        total_quote = 0
        quote_breakdown = []
        
        # Hog Roast
        if services.get('hogRoast') and data.get('hogRoastGuests'):
            guests = int(data['hogRoastGuests'])
            price_per_person = 8.50
            service_total = guests * price_per_person
            total_quote += service_total
            quote_breakdown.append({
                'service': 'Hog Roast Catering',
                'quantity': guests,
                'unit': 'person',
                'price_per_unit': price_per_person,
                'total': service_total
            })
        
        # Pizza Van
        if services.get('pizza') and data.get('pizzaGuests'):
            guests = int(data['pizzaGuests'])
            # Estimate 1.5 pizzas per person
            pizzas = max(1, int(guests * 1.5))
            price_per_pizza = 12.00
            service_total = pizzas * price_per_pizza
            total_quote += service_total
            quote_breakdown.append({
                'service': 'Mobile Pizza Van',
                'quantity': pizzas,
                'unit': 'pizza',
                'price_per_unit': price_per_pizza,
                'total': service_total,
                'note': f'Estimated {pizzas} pizzas for {guests} guests'
            })
        
        # Mobile Bar
        if services.get('bar'):
            service_total = 300.00
            total_quote += service_total
            quote_breakdown.append({
                'service': 'Mobile Bar Service',
                'quantity': 1,
                'unit': 'event',
                'price_per_unit': service_total,
                'total': service_total
            })
        
        # Buffet
        if services.get('buffet') and data.get('buffetGuests'):
            guests = int(data['buffetGuests'])
            package = data.get('buffetPackage', 'package1')
            
            price_per_person = {
                'package1': 6.50,
                'package2': 8.50,
                'package3': 12.50
            }.get(package, 6.50)
            
            service_total = guests * price_per_person
            total_quote += service_total
            quote_breakdown.append({
                'service': f'Buffet Catering ({package.replace("package", "Package ")})',
                'quantity': guests,
                'unit': 'person',
                'price_per_unit': price_per_person,
                'total': service_total
            })
        
        # Calculate deposit (20% or minimum £500)
        deposit_amount = max(500, total_quote * 0.2)
        
        return jsonify({
            'total_quote': round(total_quote, 2),
            'deposit_amount': round(deposit_amount, 2),
            'breakdown': quote_breakdown,
            'currency': 'GBP'
        }), 200
        
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

