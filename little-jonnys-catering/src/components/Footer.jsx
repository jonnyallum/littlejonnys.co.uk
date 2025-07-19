import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              Little Jonny's Catering
            </h3>
            <p className="text-gray-300 mb-4">
              Portsmouth's premier catering service with over 10 years of experience 
              in hog roasts, pizza vans, mobile bars, and buffet catering.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Portsmouth, Hampshire</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Hog Roast Catering</li>
              <li>Mobile Pizza Van</li>
              <li>Mobile Bar Service</li>
              <li>Buffet Catering</li>
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>07123 456789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@littlejonnys.co.uk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Sun: 8AM-10PM</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Service Areas</h5>
              <p className="text-gray-300 text-sm">
                Portsmouth • Hampshire • Sussex • Surrounding Areas
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Little Jonny's Catering. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Licensed & Insured • Professional Catering Services
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

