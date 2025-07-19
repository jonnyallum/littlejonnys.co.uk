# Little Jonny's Catering Website - Deployment Guide

## 🚀 Project Overview

This is a complete full-stack website for Little Jonny's Catering featuring:
- **Frontend**: React with modern UI/UX design
- **Backend**: Flask API with CORS support
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe integration
- **Deployment**: Ready for production

## 📁 Project Structure

```
little-jonnys-catering/          # React Frontend
├── src/
│   ├── components/              # Reusable components
│   ├── pages/                   # Page components
│   ├── assets/                  # Images and static files
│   └── App.jsx                  # Main app component
├── dist/                        # Built frontend files
└── package.json

little-jonnys-backend/           # Flask Backend
├── src/
│   ├── routes/                  # API endpoints
│   │   ├── bookings.py         # Booking management
│   │   ├── prices.py           # Pricing and quotes
│   │   ├── allergens.py        # Allergen information
│   │   └── payments.py         # Stripe integration
│   ├── config/                  # Configuration files
│   ├── static/                  # Frontend build files
│   └── main.py                  # Flask app entry point
├── venv/                        # Python virtual environment
├── requirements.txt             # Python dependencies
└── .env                         # Environment variables
```

## 🔧 Environment Setup

### Required Environment Variables

Create a `.env` file in the backend directory:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key

# Flask Configuration
FLASK_ENV=production
SECRET_KEY=your_secure_secret_key

# Stripe Configuration
STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

### Supabase Database Setup

1. **Create Supabase Project**:
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Note your project URL and anon key

2. **Run Database Schema**:
   ```sql
   -- Execute the SQL from supabase-schema.sql
   -- This creates tables for bookings, prices, and allergens
   ```

3. **Configure Row Level Security**:
   - Enable RLS on all tables
   - Set up policies for public read access to prices/allergens
   - Set up policies for authenticated admin access to bookings

### Stripe Setup

1. **Create Stripe Account**:
   - Go to [stripe.com](https://stripe.com)
   - Create account and get API keys

2. **Configure Webhooks**:
   - Add webhook endpoint: `https://yourdomain.com/api/webhook`
   - Listen for: `checkout.session.completed`, `payment_intent.payment_failed`

## 🚀 Deployment Options

### Option 1: Deploy with Manus (Recommended)

The backend is already configured for Manus deployment:

```bash
# Deploy the full-stack application
cd little-jonnys-backend
# Ensure frontend is built and copied to src/static/
# Deploy using Manus service deployment
```

### Option 2: Manual Deployment

#### Frontend (React)
```bash
cd little-jonnys-catering
npm install
npm run build
# Deploy dist/ folder to your hosting service
```

#### Backend (Flask)
```bash
cd little-jonnys-backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
# Set environment variables
python src/main.py
```

### Option 3: Docker Deployment

Create `Dockerfile` in backend directory:
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "src/main.py"]
```

## 🔗 API Endpoints

### Booking Management
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings (admin)
- `GET /api/bookings/{id}` - Get specific booking
- `PUT /api/bookings/{id}` - Update booking (admin)

### Pricing & Quotes
- `GET /api/prices` - Get all active prices
- `GET /api/prices/{service_type}` - Get prices by service
- `POST /api/quote` - Calculate quote for services

### Allergen Information
- `GET /api/allergens` - Get all allergen data
- `GET /api/allergens/{service_type}` - Get allergens by service
- `GET /api/allergens/matrix` - Get comprehensive allergen matrix

### Payment Processing
- `POST /api/create-checkout-session` - Create Stripe checkout
- `GET /api/payment-success` - Handle successful payments
- `GET /api/payment-cancelled` - Handle cancelled payments
- `POST /api/webhook` - Stripe webhook handler
- `POST /api/refund` - Process refunds (admin)

### Health Check
- `GET /health` - API health status

## 🎨 UI Features

### Modern Design Elements
- **Typography**: Playfair Display + Inter fonts
- **Color Scheme**: Orange gradients with professional neutrals
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach

### Key Components
- **Navigation**: Sticky header with backdrop blur
- **Hero Section**: Full-screen with animated elements
- **Service Cards**: Gradient icons and feature lists
- **Booking Form**: Comprehensive multi-step form
- **Payment Flow**: Integrated Stripe checkout

## 📱 Pages Overview

1. **Home** (`/`) - Hero, services overview, testimonials
2. **Services** (`/services`) - Detailed service information
3. **Booking** (`/booking`) - Comprehensive booking form
4. **About** (`/about`) - Company story and values
5. **Contact** (`/contact`) - Contact form and information
6. **Privacy** (`/privacy`) - Privacy policy and legal info
7. **Payment Success** (`/payment-success`) - Payment confirmation
8. **Payment Cancelled** (`/payment-cancelled`) - Payment cancellation

## 🔒 Security Features

- **CORS**: Enabled for frontend-backend communication
- **Environment Variables**: Sensitive data protection
- **Input Validation**: Form data validation
- **Stripe Security**: PCI-compliant payment processing
- **Row Level Security**: Database access control

## 📊 Analytics & Monitoring

### Recommended Integrations
- **Google Analytics**: Track website usage
- **Google Search Console**: Monitor SEO performance
- **Stripe Dashboard**: Monitor payments and revenue
- **Supabase Dashboard**: Monitor database usage

## 🛠 Maintenance

### Regular Tasks
- **Database Backups**: Regular Supabase backups
- **SSL Certificate**: Ensure HTTPS is active
- **Dependencies**: Keep packages updated
- **Monitoring**: Check error logs and performance

### Content Updates
- **Prices**: Update via Supabase dashboard
- **Services**: Modify through database or code
- **Images**: Replace in assets folder and rebuild

## 📞 Support Information

### Business Details
- **Phone**: 07123 456789
- **Email**: info@littlejonnys.co.uk
- **Service Areas**: Portsmouth, Hampshire & Sussex

### Technical Support
- **Frontend**: React 18 with Vite
- **Backend**: Flask with Python 3.11
- **Database**: PostgreSQL via Supabase
- **Payments**: Stripe Checkout

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Ensure Flask-CORS is installed and configured
   - Check frontend API calls use relative URLs

2. **Payment Issues**:
   - Verify Stripe keys are correct
   - Check webhook endpoint is accessible
   - Ensure HTTPS for production

3. **Database Connection**:
   - Verify Supabase URL and key
   - Check RLS policies are configured
   - Ensure network access to Supabase

4. **Build Issues**:
   - Clear node_modules and reinstall
   - Check for missing dependencies
   - Verify environment variables

### Error Logs
- **Frontend**: Browser console
- **Backend**: Flask application logs
- **Database**: Supabase dashboard logs
- **Payments**: Stripe dashboard events

---

**🎉 Your Little Jonny's Catering website is ready for launch!**

For additional support or customizations, refer to the documentation or contact the development team.

