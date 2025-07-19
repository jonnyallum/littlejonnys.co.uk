import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Users, MapPin, Clock, Phone, Mail, User } from 'lucide-react'

const Booking = () => {
  const [formData, setFormData] = useState({
    // Client Info
    name: '',
    email: '',
    phone: '',
    location: '',
    
    // Services
    services: {
      hogRoast: false,
      pizza: false,
      bar: false,
      buffet: false
    },
    
    // Guest numbers
    hogRoastGuests: '',
    pizzaGuests: '',
    barGuests: '',
    buffetGuests: '',
    
    // Buffet options
    buffetPackage: '',
    canapes: false,
    sandwiches: false,
    cakes: false,
    
    // Event details
    eventDate: '',
    arrivalTime: '',
    powerWater: '',
    dietaryNotes: '',
    specialRequests: ''
  })

  const handleServiceChange = (service, checked) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: checked
      }
    }))
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Integrate with Supabase
    console.log('Form submitted:', formData)
    alert('Thank you for your booking request! We will contact you within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Event</h1>
          <p className="text-xl md:text-2xl mb-6">
            Fill out the form below and we'll get back to you with a personalized quote
          </p>
          <div className="flex justify-center items-center space-x-6 text-orange-100">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>07123 456789</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>info@littlejonnys.co.uk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Client Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-6 w-6 mr-2 text-orange-600" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Event Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="City, Postcode"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-orange-600" />
                  Select Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Hog Roast */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox
                      id="hogRoast"
                      checked={formData.services.hogRoast}
                      onCheckedChange={(checked) => handleServiceChange('hogRoast', checked)}
                    />
                    <Label htmlFor="hogRoast" className="text-lg font-semibold">
                      Hog Roast Catering (From £8.50 per person)
                    </Label>
                  </div>
                  {formData.services.hogRoast && (
                    <div className="ml-6">
                      <Label htmlFor="hogRoastGuests">Number of Guests</Label>
                      <Input
                        id="hogRoastGuests"
                        type="number"
                        min="50"
                        value={formData.hogRoastGuests}
                        onChange={(e) => handleInputChange('hogRoastGuests', e.target.value)}
                        placeholder="Minimum 50 guests"
                        className="w-48"
                      />
                    </div>
                  )}
                </div>

                {/* Pizza Van */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox
                      id="pizza"
                      checked={formData.services.pizza}
                      onCheckedChange={(checked) => handleServiceChange('pizza', checked)}
                    />
                    <Label htmlFor="pizza" className="text-lg font-semibold">
                      Mobile Pizza Van (From £12 per pizza)
                    </Label>
                  </div>
                  {formData.services.pizza && (
                    <div className="ml-6">
                      <Label htmlFor="pizzaGuests">Number of Guests</Label>
                      <Input
                        id="pizzaGuests"
                        type="number"
                        min="1"
                        value={formData.pizzaGuests}
                        onChange={(e) => handleInputChange('pizzaGuests', e.target.value)}
                        placeholder="No minimum"
                        className="w-48"
                      />
                    </div>
                  )}
                </div>

                {/* Mobile Bar */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox
                      id="bar"
                      checked={formData.services.bar}
                      onCheckedChange={(checked) => handleServiceChange('bar', checked)}
                    />
                    <Label htmlFor="bar" className="text-lg font-semibold">
                      Mobile Bar Service (From £300 per event)
                    </Label>
                  </div>
                  {formData.services.bar && (
                    <div className="ml-6">
                      <Label htmlFor="barGuests">Number of Guests</Label>
                      <Input
                        id="barGuests"
                        type="number"
                        min="1"
                        value={formData.barGuests}
                        onChange={(e) => handleInputChange('barGuests', e.target.value)}
                        placeholder="All event sizes"
                        className="w-48"
                      />
                    </div>
                  )}
                </div>

                {/* Buffet */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox
                      id="buffet"
                      checked={formData.services.buffet}
                      onCheckedChange={(checked) => handleServiceChange('buffet', checked)}
                    />
                    <Label htmlFor="buffet" className="text-lg font-semibold">
                      Buffet Catering (From £6.50 per person)
                    </Label>
                  </div>
                  {formData.services.buffet && (
                    <div className="ml-6 space-y-4">
                      <div>
                        <Label htmlFor="buffetGuests">Number of Guests</Label>
                        <Input
                          id="buffetGuests"
                          type="number"
                          min="20"
                          value={formData.buffetGuests}
                          onChange={(e) => handleInputChange('buffetGuests', e.target.value)}
                          placeholder="Minimum 20 guests"
                          className="w-48"
                        />
                      </div>
                      <div>
                        <Label htmlFor="buffetPackage">Buffet Package</Label>
                        <Select value={formData.buffetPackage} onValueChange={(value) => handleInputChange('buffetPackage', value)}>
                          <SelectTrigger className="w-64">
                            <SelectValue placeholder="Select package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="package1">Package 1 - £6.50 per person</SelectItem>
                            <SelectItem value="package2">Package 2 - £8.50 per person</SelectItem>
                            <SelectItem value="package3">Package 3 - £12.50 per person</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Additional Options</Label>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="canapes"
                              checked={formData.canapes}
                              onCheckedChange={(checked) => handleInputChange('canapes', checked)}
                            />
                            <Label htmlFor="canapes">Canapés</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="sandwiches"
                              checked={formData.sandwiches}
                              onCheckedChange={(checked) => handleInputChange('sandwiches', checked)}
                            />
                            <Label htmlFor="sandwiches">Sandwiches</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="cakes"
                              checked={formData.cakes}
                              onCheckedChange={(checked) => handleInputChange('cakes', checked)}
                            />
                            <Label htmlFor="cakes">Cakes</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-orange-600" />
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="arrivalTime">Preferred Arrival Time</Label>
                    <Input
                      id="arrivalTime"
                      type="time"
                      value={formData.arrivalTime}
                      onChange={(e) => handleInputChange('arrivalTime', e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="powerWater">Power & Water Available?</Label>
                  <Select value={formData.powerWater} onValueChange={(value) => handleInputChange('powerWater', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="both">Both Power & Water Available</SelectItem>
                      <SelectItem value="power">Power Only</SelectItem>
                      <SelectItem value="water">Water Only</SelectItem>
                      <SelectItem value="neither">Neither Available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dietaryNotes">Dietary Requirements / Allergies</Label>
                  <Textarea
                    id="dietaryNotes"
                    value={formData.dietaryNotes}
                    onChange={(e) => handleInputChange('dietaryNotes', e.target.value)}
                    placeholder="Please specify any dietary requirements, allergies, or special requests..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="specialRequests">Special Requests / Additional Notes</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any additional information about your event..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-orange-600 hover:bg-orange-700 px-12 py-3">
                Submit Booking Request
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                We'll contact you within 24 hours with a personalized quote and availability confirmation.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Booking

