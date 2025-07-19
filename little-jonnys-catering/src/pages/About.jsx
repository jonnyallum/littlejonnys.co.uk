import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Award, Users, Clock, Shield, Heart, Star, CheckCircle, MapPin } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Food',
      description: 'We love what we do and it shows in every dish we prepare and serve.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond for every client.'
    },
    {
      icon: Shield,
      title: 'Professional Standards',
      description: 'Licensed, insured, and following all health & safety regulations.'
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: 'Fresh ingredients, professional equipment, and attention to detail.'
    }
  ]

  const achievements = [
    '10+ Years in Business',
    '500+ Successful Events',
    'Fully Licensed & Insured',
    'Health & Safety Certified',
    'Risk Assessment Compliant',
    'Allergen Management Trained'
  ]

  const serviceAreas = [
    'Portsmouth',
    'Southampton',
    'Winchester',
    'Chichester',
    'Fareham',
    'Gosport',
    'Havant',
    'Waterlooville',
    'Petersfield',
    'Alton'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Little Jonny's Catering</h1>
            <p className="text-xl md:text-2xl mb-8">
              Over 10 years of professional catering experience serving Portsmouth, Hampshire, and Sussex
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white text-orange-600 px-4 py-2 text-lg">
                Est. 2014
              </Badge>
              <Badge variant="secondary" className="bg-white text-orange-600 px-4 py-2 text-lg">
                500+ Events
              </Badge>
              <Badge variant="secondary" className="bg-white text-orange-600 px-4 py-2 text-lg">
                Licensed & Insured
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Little Jonny's Catering began as a passion project over 10 years ago, born from a love of 
                bringing people together through exceptional food and service. What started as a small 
                hog roast operation has grown into Portsmouth's premier catering company, serving the 
                entire Hampshire and Sussex region.
              </p>
              
              <p className="mb-6">
                Our founder, Jonathan "Jonny" Smith, started the business after years of working in 
                hospitality and recognizing a gap in the market for professional, reliable catering 
                services that didn't compromise on quality or customer service. From our first event 
                - a small wedding in Portsmouth - we've built our reputation one satisfied customer at a time.
              </p>
              
              <p className="mb-6">
                Today, we're proud to offer four distinct catering services: traditional hog roasts, 
                mobile wood-fired pizza, professional bar service, and comprehensive buffet catering. 
                Each service maintains the same commitment to quality, professionalism, and customer 
                satisfaction that has made us Portsmouth's #1 choice for catering.
              </p>
              
              <p className="mb-8">
                We've had the privilege of catering for weddings, corporate events, festivals, private 
                parties, and everything in between. From intimate gatherings of 20 to large celebrations 
                of 500+, we bring the same level of professionalism and attention to detail to every event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Standards</h2>
              <p className="text-xl text-gray-600">
                We maintain the highest standards of professionalism, safety, and quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Achievements & Experience</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">What Sets Us Apart</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Comprehensive Risk Assessments:</strong> Every event includes detailed 
                    risk assessment and safety planning.
                  </p>
                  <p>
                    <strong>Allergen Management:</strong> Full allergen matrix and dietary 
                    requirement accommodation.
                  </p>
                  <p>
                    <strong>Professional Equipment:</strong> Commercial-grade equipment maintained 
                    to the highest standards.
                  </p>
                  <p>
                    <strong>Experienced Team:</strong> Trained, professional staff for every service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Service Areas</h2>
            <p className="text-xl text-orange-100">
              We proudly serve Portsmouth and the surrounding areas
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4">
                  <MapPin className="h-5 w-5 mx-auto mb-2" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-orange-100">
                Don't see your area listed? Contact us - we may still be able to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let us bring our experience and passion to your next event. 
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link to="/booking">Book Your Event</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

