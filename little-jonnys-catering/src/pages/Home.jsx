import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Clock, Award, ChefHat, Truck, Wine, Utensils, CheckCircle, Phone, Mail } from 'lucide-react'

const Home = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Events Catered', color: 'text-blue-600' },
    { icon: Clock, number: '10+', label: 'Years Experience', color: 'text-green-600' },
    { icon: Star, number: '5.0', label: 'Average Rating', color: 'text-yellow-500' },
    { icon: Award, number: '100%', label: 'Satisfaction Rate', color: 'text-purple-600' }
  ]

  const services = [
    {
      icon: ChefHat,
      title: 'Hog Roast Catering',
      description: 'Traditional slow-cooked hog roasts perfect for weddings, parties, and corporate events.',
      features: ['Serves 50-200+ guests', 'Professional carving', 'All accompaniments included'],
      price: 'From £8.50 per person',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Truck,
      title: 'Mobile Pizza Van',
      description: 'Wood-fired pizzas made fresh on-site with our fully equipped mobile pizza van.',
      features: ['Wood-fired authentic taste', 'Fresh dough daily', 'Vegetarian & vegan options'],
      price: 'From £12 per pizza',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Wine,
      title: 'Mobile Bar Service',
      description: 'Professional licensed mobile bar with experienced bartenders for any occasion.',
      features: ['Fully licensed & insured', 'Professional bartenders', 'Full range of beverages'],
      price: 'From £300 per event',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Utensils,
      title: 'Buffet Catering',
      description: 'Comprehensive buffet packages with canapés, sandwiches, and desserts.',
      features: ['Multiple package options', 'Dietary requirements met', 'Professional presentation'],
      price: 'From £6.50 per person',
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah & James',
      event: 'Wedding Reception',
      rating: 5,
      text: 'Absolutely fantastic service! The hog roast was the highlight of our wedding. Professional, delicious, and stress-free.',
      location: 'Portsmouth'
    },
    {
      name: 'Corporate Events Ltd',
      event: 'Company BBQ',
      rating: 5,
      text: 'Little Jonny\'s catered our annual company event for 150 people. Everything was perfect from start to finish.',
      location: 'Hampshire'
    },
    {
      name: 'The Johnson Family',
      event: 'Birthday Party',
      rating: 5,
      text: 'The pizza van was a huge hit at our daughter\'s 18th birthday. Guests are still talking about it!',
      location: 'Sussex'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/assets/hog-roast-hero.jpg" 
            alt="Professional catering setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-orange-500/20 backdrop-blur-sm border border-orange-300/30 text-orange-200 px-4 py-2 rounded-full text-sm font-medium">
                Portsmouth's Premier Catering Service
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Portsmouth's <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">#1</span> for
              <br />
              <span className="text-4xl md:text-6xl">Hog Roasts, Pizza Vans,</span>
              <br />
              <span className="text-4xl md:text-6xl">Buffets & Mobile Bars</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional catering services with over 10 years of experience serving 
              <span className="text-orange-300 font-semibold"> Portsmouth, Hampshire & Sussex</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/booking"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Book Your Event</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/services"
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-3"
              >
                <span>View Services</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Phone className="h-4 w-4 text-orange-300" />
                <span className="text-gray-200">07123 456789</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mail className="h-4 w-4 text-orange-300" />
                <span className="text-gray-200">info@littlejonnys.co.uk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Catering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to large celebrations, we provide exceptional catering services 
              tailored to your needs with professional equipment and experienced staff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:-translate-y-2">
                  {/* Service Icon */}
                  <div className="p-6 pb-0">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="p-6 pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-gray-900">{service.price}</span>
                    </div>
                    
                    <Link
                      to="/services"
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-4 rounded-lg font-semibold text-center block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Little Jonny's?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional, reliable, and delicious catering services that make your event unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10+ Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Over a decade of professional catering experience serving Portsmouth and surrounding areas with excellence.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Licensed, insured, and experienced staff ensuring your event runs smoothly from start to finish.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                Fresh ingredients, professional equipment, and attention to detail in every service we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.event} • {testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Event?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch today for a free quote and let us make your event memorable with our professional catering services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Phone className="h-5 w-5" />
              <span>Call Us Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

