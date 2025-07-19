import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChefHat, Truck, Wine, UtensilsCrossed, Users, Clock, MapPin, CheckCircle } from 'lucide-react'
import hogRoastHero from '../assets/hog-roast-hero.jpg'
import pizzaVan from '../assets/pizza-van.jpg'
import mobileBar from '../assets/mobile-bar.jpg'
import buffetSetup from '../assets/buffet-setup.jpg'

const Services = () => {
  const services = [
    {
      id: 'hog-roast',
      title: 'Hog Roast Catering',
      icon: ChefHat,
      image: hogRoastHero,
      description: 'Traditional slow-cooked hog roasts that are perfect for any outdoor event. Our professional team brings everything needed for a memorable dining experience.',
      features: [
        'Whole hog slow-cooked for 6-8 hours',
        'Professional carving and serving',
        'Includes stuffing, apple sauce, and crackling',
        'Bread rolls and salads available',
        'Serves 50-200+ guests',
        'All equipment and staff provided'
      ],
      pricing: 'From £8.50 per person',
      minGuests: '50 guests minimum',
      setupTime: '2-3 hours setup required'
    },
    {
      id: 'pizza-van',
      title: 'Mobile Pizza Van',
      icon: Truck,
      image: pizzaVan,
      description: 'Wood-fired pizzas made fresh on-site with our fully equipped mobile pizza van. Choose from private hire or regular service models.',
      features: [
        'Wood-fired oven for authentic taste',
        'Fresh dough made daily',
        'Wide variety of toppings available',
        'Vegetarian and vegan options',
        'Private hire or regular service',
        'Covers Portsmouth, Hampshire & Sussex'
      ],
      pricing: 'From £12 per pizza',
      minGuests: 'No minimum for private hire',
      setupTime: '1 hour setup required'
    },
    {
      id: 'mobile-bar',
      title: 'Mobile Bar Service',
      icon: Wine,
      image: mobileBar,
      description: 'Professional licensed mobile bar service with experienced bartenders. Full range of beverages with proper licensing and insurance.',
      features: [
        'Fully licensed and insured',
        'Professional bartenders included',
        'Full range of spirits, beers, and wines',
        'Cocktail service available',
        'Portable bar setup',
        'Refund policy available'
      ],
      pricing: 'From £300 per event',
      minGuests: 'Suitable for all event sizes',
      setupTime: '1-2 hours setup required'
    },
    {
      id: 'buffet',
      title: 'Buffet Catering',
      icon: UtensilsCrossed,
      image: buffetSetup,
      description: 'Comprehensive buffet packages with multiple options including canapés, sandwiches, and desserts. Perfect for corporate events and celebrations.',
      features: [
        'Multiple package options available',
        'Canapés, sandwiches, and cakes',
        'Hot and cold food options',
        'Dietary requirements accommodated',
        'Professional presentation',
        'Serving equipment included'
      ],
      pricing: 'Package 1: £6.50 | Package 2: £8.50 | Package 3: £12.50 per person',
      minGuests: '20 guests minimum',
      setupTime: '1 hour setup required'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Catering Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional catering services for weddings, corporate events, parties, and celebrations 
            across Portsmouth, Hampshire, and Sussex
          </p>
          <Button asChild size="lg" variant="outline" className="text-orange-600 bg-white hover:bg-gray-100">
            <Link to="/booking">Book Your Service</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <Card className="overflow-hidden shadow-xl">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <service.icon className="h-20 w-20 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center mb-4">
                        <service.icon className="h-8 w-8 text-orange-600 mr-3" />
                        <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">What's Included:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-orange-600 mr-2" />
                          <div>
                            <div className="font-semibold text-gray-900">Capacity</div>
                            <div className="text-sm text-gray-600">{service.minGuests}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-orange-600 mr-2" />
                          <div>
                            <div className="font-semibold text-gray-900">Setup</div>
                            <div className="text-sm text-gray-600">{service.setupTime}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                          <div>
                            <div className="font-semibold text-gray-900">Coverage</div>
                            <div className="text-sm text-gray-600">Portsmouth & surrounding</div>
                          </div>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <Badge variant="secondary" className="text-lg px-4 py-2 bg-orange-100 text-orange-800">
                          {service.pricing}
                        </Badge>
                      </div>

                      {/* CTA */}
                      <Button asChild className="bg-orange-600 hover:bg-orange-700">
                        <Link to="/booking">Book This Service</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Services Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Wedding Catering</h3>
              <p className="text-gray-600">Complete wedding catering packages combining multiple services for your special day.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Corporate Events</h3>
              <p className="text-gray-600">Professional catering for business meetings, conferences, and corporate celebrations.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Private Parties</h3>
              <p className="text-gray-600">Birthday parties, anniversaries, and family celebrations with personalized service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Catering?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free quote and let us help make your event unforgettable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="text-orange-600 bg-white hover:bg-gray-100">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

