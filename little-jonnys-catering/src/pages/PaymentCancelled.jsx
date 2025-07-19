import { useSearchParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { XCircle, ArrowLeft, Phone, Mail } from 'lucide-react'

const PaymentCancelled = () => {
  const [searchParams] = useSearchParams()
  const bookingId = searchParams.get('booking_id')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cancelled Header */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <XCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
          <p className="text-xl">
            Your payment was cancelled. No charges have been made.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What Happened?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                You cancelled the payment process before it was completed. Your booking request 
                {bookingId && ` (#${bookingId})`} is still saved, but no deposit has been paid.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Important Note</h3>
                <p className="text-yellow-700">
                  Your booking is not confirmed until the deposit is paid. We'll hold your 
                  booking details for 48 hours to give you time to complete the payment.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Options */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What Would You Like to Do?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 h-auto p-4">
                  <Link to="/booking" className="flex flex-col items-center text-center">
                    <ArrowLeft className="h-6 w-6 mb-2" />
                    <span className="font-semibold">Try Payment Again</span>
                    <span className="text-sm opacity-90">Complete your booking</span>
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="h-auto p-4">
                  <Link to="/contact" className="flex flex-col items-center text-center">
                    <Phone className="h-6 w-6 mb-2" />
                    <span className="font-semibold">Call Us Instead</span>
                    <span className="text-sm">Book over the phone</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Booking Methods */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-blue-800 mb-4">Alternative Booking Methods</h3>
              <p className="text-blue-700 mb-4">
                If you're having trouble with online payment, you can also book by:
              </p>
              
              <div className="space-y-3 text-blue-700">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <p><strong>Phone:</strong> 07123 456789</p>
                    <p className="text-sm">Available Mon-Sun, 8AM-10PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <div>
                    <p><strong>Email:</strong> info@littlejonnys.co.uk</p>
                    <p className="text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              {bookingId && (
                <div className="mt-4 p-3 bg-blue-100 rounded">
                  <p className="text-blue-800 text-sm">
                    <strong>Reference your booking:</strong> #{bookingId}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link to="/booking">Complete Booking</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
            
            <p className="text-sm text-gray-600">
              Need help? Call us at <strong>07123 456789</strong> or email <strong>info@littlejonnys.co.uk</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentCancelled

