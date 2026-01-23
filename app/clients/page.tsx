import Link from 'next/link'

export const metadata = {
  title: 'Clients & Partners | The Running Horse LLC',
  description: 'We serve B2B clients including retailers, wholesalers, e-commerce businesses, and corporate buyers across the Middle East and beyond.',
}

export default function ClientsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="heading-lg mb-6">Clients & Partners</h1>
            <p className="text-xl text-gray-300">
              Building lasting relationships with businesses across the fashion and lifestyle industry.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Who We Serve</h2>
            <p className="text-lg text-gray-600">
              The Running Horse LLC partners with diverse businesses engaged in the fashion and lifestyle sector.
              Our B2B trading services support companies of all sizes, from established retailers to emerging
              e-commerce ventures, providing them with reliable sourcing and distribution solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Our Client Base</h2>
            <p className="text-lg text-gray-600">
              We work with various business types across the fashion and lifestyle value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Retail Stores</h3>
              <p className="text-gray-600 text-center">
                Fashion boutiques, department stores, specialty shops, and multi-brand retailers seeking
                quality products for their physical store locations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">E-Commerce Businesses</h3>
              <p className="text-gray-600 text-center">
                Online retailers, marketplace sellers, and digital-first brands requiring reliable product
                sourcing and fulfillment support.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Wholesalers & Distributors</h3>
              <p className="text-gray-600 text-center">
                Regional distributors and wholesale companies looking for consistent supply of fashion
                products for their distribution networks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Corporate Buyers</h3>
              <p className="text-gray-600 text-center">
                Companies purchasing fashion products for corporate gifting, employee programs, promotional
                campaigns, or hospitality services.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Private Label Brands</h3>
              <p className="text-gray-600 text-center">
                Entrepreneurs and businesses launching their own branded product lines requiring manufacturing
                coordination and private labeling services.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Trading Partners</h3>
              <p className="text-gray-600 text-center">
                Other trading companies, import/export businesses, and commercial agents seeking collaboration
                on specific markets or product categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Geographic Reach</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              While headquartered in the United Arab Emirates, our services extend across multiple regions,
              connecting international suppliers with regional markets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white mr-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Primary Markets
                </h3>
                <ul className="space-y-2 text-gray-700 ml-13">
                  <li>• United Arab Emirates</li>
                  <li>• Saudi Arabia</li>
                  <li>• Qatar</li>
                  <li>• Kuwait</li>
                  <li>• Bahrain</li>
                  <li>• Oman</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white mr-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Extended Reach
                </h3>
                <ul className="space-y-2 text-gray-700 ml-13">
                  <li>• Other GCC Countries</li>
                  <li>• Jordan & Lebanon</li>
                  <li>• Egypt</li>
                  <li>• North Africa</li>
                  <li>• East Africa</li>
                  <li>• South Asia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Partners */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Our Supplier Network</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              We maintain strong relationships with verified manufacturers and suppliers across key manufacturing
              regions, ensuring access to quality products at competitive prices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
                <div className="text-3xl font-bold text-primary-700 mb-2">Asia</div>
                <p className="text-gray-600 text-sm">
                  China, India, Bangladesh, Vietnam, Pakistan, Thailand - Manufacturing powerhouses for
                  textiles, leather goods, and accessories.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
                <div className="text-3xl font-bold text-primary-700 mb-2">Europe</div>
                <p className="text-gray-600 text-sm">
                  Italy, Turkey, Spain, Portugal - Premium quality suppliers for leather products,
                  cosmetics, and fashion items.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
                <div className="text-3xl font-bold text-primary-700 mb-2">Middle East</div>
                <p className="text-gray-600 text-sm">
                  UAE, Egypt - Regional manufacturers and distributors for specific product categories
                  and quick-turnaround orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Partnership Benefits</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reliable Supply Chain</h3>
                  <p className="text-gray-600">
                    Consistent product availability, quality assurance, and dependable delivery timelines
                    to support your business operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">
                    Access to wholesale pricing, volume discounts, and cost-effective sourcing through
                    our established supplier relationships.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Simplified Operations</h3>
                  <p className="text-gray-600">
                    One point of contact for sourcing, quality control, logistics, and customs clearance,
                    reducing operational complexity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Risk Mitigation</h3>
                  <p className="text-gray-600">
                    Quality inspections, compliance verification, and proper documentation to protect
                    your business from supply chain risks.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexible Solutions</h3>
                  <p className="text-gray-600">
                    Customized service packages, scalable order volumes, and adaptable payment terms
                    to match your business requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Client Satisfaction</h2>
            <p className="text-lg text-primary-100 mb-8">
              Our success is measured by the success of our clients. We take pride in building long-term
              partnerships based on trust, reliability, and mutual growth. Client confidentiality and
              professional discretion are fundamental to our business practices.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <p className="text-xl italic mb-4">
                "We are committed to exceeding client expectations through consistent quality, transparent
                communication, and responsive service."
              </p>
              <p className="text-primary-300 font-semibold">The Running Horse LLC Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-primary-100">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our growing network of satisfied clients. Whether you're a retailer, wholesaler, or
              e-commerce business, we're here to support your trading needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
