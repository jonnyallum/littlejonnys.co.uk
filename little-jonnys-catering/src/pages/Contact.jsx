import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Integrate with email service
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '07123 456789',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@littlejonnys.co.uk',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Portsmouth, Hampshire & Sussex',
      description: 'We cover a wide area'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sun: 8AM-10PM',
      description: 'Available 7 days a week'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-6">
            Get in touch for a free quote or to discuss your catering needs
          </p>
          <p className="text-orange-100">
            We typically respond within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{info.title}</h3>
                  <p className="text-orange-600 font-semibold mb-1">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-orange-600" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="e.g., Wedding catering inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your event, number of guests, preferred date, and any specific requirements..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              
              {/* Quick Response */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">Quick Response Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    We understand that planning an event can be time-sensitive. That's why we 
                    guarantee a response to all inquiries within 24 hours, often much sooner.
                  </p>
                  <p className="text-gray-700">
                    For urgent requests, please call us directly at <strong>07123 456789</strong>.
                  </p>
                </CardContent>
              </Card>

              {/* What to Include */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">Help Us Help You</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    To provide you with the most accurate quote, please include:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      Event date and location
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      Number of guests
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      Type of event (wedding, corporate, party, etc.)
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      Services you're interested in
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      Any dietary requirements or special requests
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-green-800 mb-2">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-green-700 mb-4">
                    Send us a message on WhatsApp for quick responses
                  </p>
                  <Button 
                    asChild 
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <a 
                      href="https://wa.me/447123456789" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Message on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  How far in advance should I book?
                </h3>
                <p className="text-gray-700 mb-6">
                  We recommend booking at least 2-4 weeks in advance, especially for weekends 
                  and peak season (May-September). However, we can often accommodate shorter notice.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Do you provide equipment and staff?
                </h3>
                <p className="text-gray-700 mb-6">
                  Yes! All our services include professional equipment, setup, service, and cleanup. 
                  Our experienced staff handle everything so you can enjoy your event.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Can you accommodate dietary requirements?
                </h3>
                <p className="text-gray-700 mb-6">
                  Absolutely. We have comprehensive allergen management procedures and can 
                  accommodate vegetarian, vegan, gluten-free, and other dietary needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  What's your cancellation policy?
                </h3>
                <p className="text-gray-700 mb-6">
                  We understand plans can change. Please contact us to discuss our flexible 
                  cancellation and rescheduling policies based on your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

