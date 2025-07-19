import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Calendar, Mail, Phone } from 'lucide-react'

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams()
  const [paymentData, setPaymentData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const sessionId = searchParams.get('session_id')
  const bookingId = searchParams.get('booking_id')

  useEffect(() => {
    if (sessionId && bookingId) {
      // In a real implementation, you would verify the payment with your backend
      // For now, we'll simulate successful payment data
      setTimeout(() => {
        setPaymentData({
          bookingId,
          sessionId,
          amountPaid: 500.00,
          status: 'paid'
        })
        setLoading(false)
      }, 1000)
    } else {
      setLoading(false)
    }
  }, [sessionId, bookingId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Confirming your payment...</p>
        </div>
      </div>
    )
  }

  if (!paymentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Error</h1>
            <p className="text-gray-600 mb-6">
              We couldn't verify your payment. Please contact us if you believe this is an error.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-xl">
            Thank you for your deposit. Your booking is now confirmed.
          </p>
        </div>
      </section>

      {/* Payment Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-600">Payment Confirmation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Booking ID</p>
                  <p className="font-semibold">{paymentData.bookingId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Amount Paid</p>
                  <p className="font-semibold">£{paymentData.amountPaid.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payment Status</p>
                  <p className="font-semibold text-green-600 capitalize">{paymentData.status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaction ID</p>
                  <p className="font-semibold text-sm">{paymentData.sessionId.substring(0, 20)}...</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Confirmation Email</h3>
                  <p className="text-gray-600">
                    You'll receive a confirmation email with your booking details and receipt within the next few minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Personal Contact</h3>
                  <p className="text-gray-600">
                    Our team will contact you within 24 hours to finalize the details of your event and discuss any special requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Event Planning</h3>
                  <p className="text-gray-600">
                    We'll work with you to ensure every detail is perfect for your event. The remaining balance will be due on the day of service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-orange-800 mb-4">Need to Make Changes?</h3>
              <p className="text-orange-700 mb-4">
                If you need to modify your booking or have any questions, please contact us:
              </p>
              <div className="space-y-2 text-orange-700">
                <p><strong>Phone:</strong> 07123 456789</p>
                <p><strong>Email:</strong> info@littlejonnys.co.uk</p>
                <p><strong>Reference:</strong> Booking #{paymentData.bookingId}</p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center mt-8 space-y-4">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link to="/">Return to Home</Link>
            </Button>
            <div>
              <Button asChild variant="outline">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentSuccess

