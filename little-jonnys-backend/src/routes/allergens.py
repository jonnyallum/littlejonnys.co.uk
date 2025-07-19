from flask import Blueprint, request, jsonify
from src.config.supabase import supabase

allergens_bp = Blueprint('allergens', __name__)

@allergens_bp.route('/allergens', methods=['GET'])
def get_allergens():
    """
    Get all allergen information
    """
    try:
        if supabase:
            result = supabase.table('allergens').select('*').order('service_type').execute()
            return jsonify({'allergens': result.data}), 200
        else:
            # Fallback data for development
            fallback_allergens = [
                {
                    'id': '1',
                    'service_type': 'hog_roast',
                    'item_name': 'Roasted Pork',
                    'contains_gluten': False,
                    'contains_dairy': False,
                    'contains_eggs': False,
                    'contains_nuts': False,
                    'contains_peanuts': False,
                    'contains_soy': False,
                    'contains_fish': False,
                    'contains_shellfish': False,
                    'contains_sesame': False,
                    'vegetarian': False,
                    'vegan': False
                },
                {
                    'id': '2',
                    'service_type': 'hog_roast',
                    'item_name': 'Bread Rolls',
                    'contains_gluten': True,
                    'contains_dairy': False,
                    'contains_eggs': False,
                    'contains_nuts': False,
                    'contains_peanuts': False,
                    'contains_soy': False,
                    'contains_fish': False,
                    'contains_shellfish': False,
                    'contains_sesame': False,
                    'vegetarian': True,
                    'vegan': False
                },
                {
                    'id': '3',
                    'service_type': 'hog_roast',
                    'item_name': 'Apple Sauce',
                    'contains_gluten': False,
                    'contains_dairy': False,
                    'contains_eggs': False,
                    'contains_nuts': False,
                    'contains_peanuts': False,
                    'contains_soy': False,
                    'contains_fish': False,
                    'contains_shellfish': False,
                    'contains_sesame': False,
                    'vegetarian': True,
                    'vegan': True
                },
                {
                    'id': '4',
                    'service_type': 'pizza',
                    'item_name': 'Pizza Base',
                    'contains_gluten': True,
                    'contains_dairy': False,
                    'contains_eggs': False,
                    'contains_nuts': False,
                    'contains_peanuts': False,
                    'contains_soy': False,
                    'contains_fish': False,
                    'contains_shellfish': False,
                    'contains_sesame': False,
                    'vegetarian': True,
                    'vegan': False
                },
                {
                    'id': '5',
                    'service_type': 'pizza',
                    'item_name': 'Mozzarella Cheese',
                    'contains_gluten': False,
                    'contains_dairy': True,
                    'contains_eggs': False,
                    'contains_nuts': False,
                    'contains_peanuts': False,
                    'contains_soy': False,
                    'contains_fish': False,
                    'contains_shellfish': False,
                    'contains_sesame': False,
                    'vegetarian': True,
                    'vegan': False
                },
                {
                    'id': '6',
                    'service_type': 'buffet',
                    'item_name': 'Mixed Sandwiches',
                    'contains_gluten': True,
                    'contains_dairy': True,
                    'contains_eggs': False,
                    'contains_nuts': False,
                    'contains_peanuts': False,
                    'contains_soy': False,
                    'contains_fish': False,
                    'contains_shellfish': False,
                    'contains_sesame': False,
                    'vegetarian': True,
                    'vegan': False
                }
            ]
            return jsonify({'allergens': fallback_allergens}), 200
            
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@allergens_bp.route('/allergens/<service_type>', methods=['GET'])
def get_allergens_by_service(service_type):
    """
    Get allergen information for a specific service type
    """
    try:
        if supabase:
            result = supabase.table('allergens').select('*').eq('service_type', service_type).execute()
            return jsonify({'allergens': result.data}), 200
        else:
            # Filter fallback data by service type
            all_allergens = [
                {'id': '1', 'service_type': 'hog_roast', 'item_name': 'Roasted Pork', 'contains_gluten': False, 'contains_dairy': False, 'vegetarian': False, 'vegan': False},
                {'id': '2', 'service_type': 'hog_roast', 'item_name': 'Bread Rolls', 'contains_gluten': True, 'contains_dairy': False, 'vegetarian': True, 'vegan': False},
                {'id': '3', 'service_type': 'hog_roast', 'item_name': 'Apple Sauce', 'contains_gluten': False, 'contains_dairy': False, 'vegetarian': True, 'vegan': True},
                {'id': '4', 'service_type': 'pizza', 'item_name': 'Pizza Base', 'contains_gluten': True, 'contains_dairy': False, 'vegetarian': True, 'vegan': False},
                {'id': '5', 'service_type': 'pizza', 'item_name': 'Mozzarella Cheese', 'contains_gluten': False, 'contains_dairy': True, 'vegetarian': True, 'vegan': False},
                {'id': '6', 'service_type': 'buffet', 'item_name': 'Mixed Sandwiches', 'contains_gluten': True, 'contains_dairy': True, 'vegetarian': True, 'vegan': False}
            ]
            filtered_allergens = [a for a in all_allergens if a['service_type'] == service_type]
            return jsonify({'allergens': filtered_allergens}), 200
            
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@allergens_bp.route('/allergens/matrix', methods=['GET'])
def get_allergen_matrix():
    """
    Get a comprehensive allergen matrix for all services
    """
    try:
        if supabase:
            result = supabase.table('allergens').select('*').execute()
            allergens = result.data
        else:
            # Use fallback data
            allergens = [
                {'service_type': 'hog_roast', 'item_name': 'Roasted Pork', 'contains_gluten': False, 'contains_dairy': False, 'vegetarian': False, 'vegan': False},
                {'service_type': 'hog_roast', 'item_name': 'Bread Rolls', 'contains_gluten': True, 'contains_dairy': False, 'vegetarian': True, 'vegan': False},
                {'service_type': 'pizza', 'item_name': 'Pizza Base', 'contains_gluten': True, 'contains_dairy': False, 'vegetarian': True, 'vegan': False},
                {'service_type': 'pizza', 'item_name': 'Mozzarella Cheese', 'contains_gluten': False, 'contains_dairy': True, 'vegetarian': True, 'vegan': False},
                {'service_type': 'buffet', 'item_name': 'Mixed Sandwiches', 'contains_gluten': True, 'contains_dairy': True, 'vegetarian': True, 'vegan': False}
            ]
        
        # Group by service type
        matrix = {}
        for allergen in allergens:
            service = allergen['service_type']
            if service not in matrix:
                matrix[service] = []
            matrix[service].append(allergen)
        
        return jsonify({'allergen_matrix': matrix}), 200
        
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

