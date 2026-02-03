import Link from 'next/link'

export const metadata = {
  title: 'Compliance | The Running Horse LLC',
  description: 'The Running Horse LLC is a fully licensed UAE general trading company operating in compliance with all regulatory requirements.',
}

export default function CompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="heading-lg mb-6">Compliance</h1>
            <p className="text-xl text-primary-100">
              Operating as a fully licensed UAE general trading company with full regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* UAE Trading License */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-primary-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">UAE Licensed General Trading Company</h2>
                  <p className="text-gray-600 mb-4">
                    The Running Horse LLC is a legally registered and licensed company in the United Arab Emirates,
                    authorized to engage in general trading activities including the import, export, wholesale, and
                    distribution of fashion and lifestyle products.
                  </p>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">License Details:</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Company Name:</strong> The Running Horse LLC</li>
                      <li>• <strong>Business Activity:</strong> General Trading</li>
                      <li>• <strong>Jurisdiction:</strong> United Arab Emirates</li>
                      <li>• <strong>Status:</strong> Active and in Good Standing</li>
                      <li>• <strong>Product Categories:</strong> Leather Goods, Clothing, Cosmetics, Fashion Accessories</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Compliance */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Our Compliance Commitment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain full compliance with UAE regulations and international trade standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Trade License
              </h3>
              <p className="text-gray-600 text-sm">
                Valid UAE general trading license maintained in compliance with Department of Economic Development requirements.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Customs & Import/Export
              </h3>
              <p className="text-gray-600 text-sm">
                Full compliance with UAE customs regulations, import/export documentation, and tariff requirements.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Tax Compliance
              </h3>
              <p className="text-gray-600 text-sm">
                VAT registered and compliant with UAE Federal Tax Authority requirements for proper invoicing and reporting.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Ethical Business Practices
              </h3>
              <p className="text-gray-600 text-sm">
                Commitment to fair trading, transparent transactions, and ethical sourcing throughout our supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-primary-200">
            <h2 className="text-3xl font-bold mb-4">Compliance Inquiries</h2>
            <p className="text-lg text-gray-600 mb-8">
              For questions about our compliance procedures or documentation, please contact us.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
