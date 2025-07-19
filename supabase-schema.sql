-- Little Jonny's Catering Database Schema

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Client Information
    client_name VARCHAR(255) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50) NOT NULL,
    event_location TEXT NOT NULL,
    
    -- Event Details
    event_date DATE NOT NULL,
    arrival_time TIME,
    power_water VARCHAR(50),
    dietary_notes TEXT,
    special_requests TEXT,
    
    -- Services
    hog_roast_selected BOOLEAN DEFAULT FALSE,
    hog_roast_guests INTEGER,
    
    pizza_selected BOOLEAN DEFAULT FALSE,
    pizza_guests INTEGER,
    
    bar_selected BOOLEAN DEFAULT FALSE,
    bar_guests INTEGER,
    
    buffet_selected BOOLEAN DEFAULT FALSE,
    buffet_guests INTEGER,
    buffet_package VARCHAR(50),
    canapes BOOLEAN DEFAULT FALSE,
    sandwiches BOOLEAN DEFAULT FALSE,
    cakes BOOLEAN DEFAULT FALSE,
    
    -- Booking Status
    status VARCHAR(50) DEFAULT 'pending',
    total_quote DECIMAL(10,2),
    deposit_amount DECIMAL(10,2),
    deposit_paid BOOLEAN DEFAULT FALSE,
    
    -- Admin Notes
    admin_notes TEXT
);

-- Create prices table
CREATE TABLE IF NOT EXISTS prices (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    service_type VARCHAR(100) NOT NULL,
    service_name VARCHAR(255) NOT NULL,
    price_per_unit DECIMAL(10,2) NOT NULL,
    unit_type VARCHAR(50) NOT NULL, -- 'person', 'pizza', 'event'
    minimum_quantity INTEGER,
    description TEXT,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create allergens table
CREATE TABLE IF NOT EXISTS allergens (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    service_type VARCHAR(100) NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    contains_gluten BOOLEAN DEFAULT FALSE,
    contains_dairy BOOLEAN DEFAULT FALSE,
    contains_eggs BOOLEAN DEFAULT FALSE,
    contains_nuts BOOLEAN DEFAULT FALSE,
    contains_peanuts BOOLEAN DEFAULT FALSE,
    contains_soy BOOLEAN DEFAULT FALSE,
    contains_fish BOOLEAN DEFAULT FALSE,
    contains_shellfish BOOLEAN DEFAULT FALSE,
    contains_sesame BOOLEAN DEFAULT FALSE,
    vegetarian BOOLEAN DEFAULT FALSE,
    vegan BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample pricing data
INSERT INTO prices (service_type, service_name, price_per_unit, unit_type, minimum_quantity, description) VALUES
('hog_roast', 'Hog Roast Catering', 8.50, 'person', 50, 'Traditional slow-cooked hog roast with all accompaniments'),
('pizza', 'Mobile Pizza Van', 12.00, 'pizza', NULL, 'Wood-fired pizzas made fresh on-site'),
('bar', 'Mobile Bar Service', 300.00, 'event', NULL, 'Professional licensed mobile bar with bartender'),
('buffet', 'Buffet Package 1', 6.50, 'person', 20, 'Basic buffet package'),
('buffet', 'Buffet Package 2', 8.50, 'person', 20, 'Standard buffet package'),
('buffet', 'Buffet Package 3', 12.50, 'person', 20, 'Premium buffet package');

-- Insert sample allergen data
INSERT INTO allergens (service_type, item_name, contains_gluten, contains_dairy, vegetarian, vegan) VALUES
('hog_roast', 'Roasted Pork', FALSE, FALSE, FALSE, FALSE),
('hog_roast', 'Bread Rolls', TRUE, FALSE, TRUE, FALSE),
('hog_roast', 'Apple Sauce', FALSE, FALSE, TRUE, TRUE),
('hog_roast', 'Stuffing', TRUE, FALSE, TRUE, FALSE),
('pizza', 'Pizza Base', TRUE, FALSE, TRUE, FALSE),
('pizza', 'Mozzarella Cheese', FALSE, TRUE, TRUE, FALSE),
('pizza', 'Tomato Sauce', FALSE, FALSE, TRUE, TRUE),
('buffet', 'Sandwiches', TRUE, TRUE, TRUE, FALSE),
('buffet', 'Canapés (Mixed)', TRUE, TRUE, TRUE, FALSE),
('buffet', 'Cakes', TRUE, TRUE, TRUE, FALSE);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(event_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(client_email);
CREATE INDEX IF NOT EXISTS idx_prices_service ON prices(service_type);
CREATE INDEX IF NOT EXISTS idx_allergens_service ON allergens(service_type);

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE allergens ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed for production)
CREATE POLICY "Allow public read access to prices" ON prices FOR SELECT USING (active = true);
CREATE POLICY "Allow public read access to allergens" ON allergens FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to bookings" ON bookings FOR INSERT WITH CHECK (true);

-- Create policies for authenticated admin access
CREATE POLICY "Allow admin full access to bookings" ON bookings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin full access to prices" ON prices FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin full access to allergens" ON allergens FOR ALL USING (auth.role() = 'authenticated');

