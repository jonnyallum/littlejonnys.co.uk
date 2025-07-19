const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> July 19, 2024
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              When you use our booking form or contact us, we may collect the following information:
            </p>
            <ul>
              <li>Personal details (name, email address, phone number)</li>
              <li>Event information (date, location, number of guests)</li>
              <li>Service preferences and dietary requirements</li>
              <li>Communication records and correspondence</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Process your booking requests and provide catering services</li>
              <li>Communicate with you about your event and our services</li>
              <li>Send you quotes, confirmations, and service updates</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations and business requirements</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With trusted service providers who assist in delivering our services</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With your explicit consent</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul>
              <li>Secure data transmission and storage</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments and updates</li>
              <li>Staff training on data protection</li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill 
              the purposes outlined in this policy, typically:
            </p>
            <ul>
              <li>Active customer records: Duration of business relationship plus 7 years</li>
              <li>Marketing communications: Until you unsubscribe</li>
              <li>Legal compliance: As required by applicable laws</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>Under data protection laws, you have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>

            <h2>7. Cookies and Website Analytics</h2>
            <p>
              Our website may use cookies and similar technologies to improve user experience 
              and analyze website performance. You can control cookie settings through your 
              browser preferences.
            </p>

            <h2>8. Third-Party Services</h2>
            <p>
              Our website may integrate with third-party services such as:
            </p>
            <ul>
              <li>Payment processors (Stripe) for secure transactions</li>
              <li>Database services (Supabase) for data management</li>
              <li>Communication tools for customer service</li>
            </ul>
            <p>
              These services have their own privacy policies, and we encourage you to review them.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 16. We do not knowingly collect 
              personal information from children under 16 without parental consent.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any 
              material changes by posting the updated policy on our website and updating the 
              "Last updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your 
              personal information, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg not-prose">
              <p><strong>Little Jonny's Catering</strong></p>
              <p>Email: info@littlejonnys.co.uk</p>
              <p>Phone: 07123 456789</p>
              <p>Service Area: Portsmouth, Hampshire & Sussex</p>
            </div>

            <h2>12. Legal Basis for Processing</h2>
            <p>
              We process your personal information based on the following legal grounds:
            </p>
            <ul>
              <li><strong>Contract:</strong> To fulfill our catering service agreements</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and communicate with customers</li>
              <li><strong>Consent:</strong> For marketing communications (where applicable)</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mt-8 not-prose">
              <p className="text-orange-800">
                <strong>Questions or Concerns?</strong><br />
                We're committed to protecting your privacy and handling your data responsibly. 
                If you have any questions or concerns about our privacy practices, please don't 
                hesitate to contact us using the information provided above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

