import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              Licensed UAE General Trading Company
            </div>
            <h1 className="heading-xl mb-6">
              The Running Horse LLC
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-4 font-light">
              UAE-based General Trading Company specializing in leather goods, clothing, cosmetics, and fashion products
            </p>
            <p className="text-lg text-primary-200 mb-8 max-w-3xl">
              A trusted partner in international trade, connecting global suppliers with regional markets through professional import, export, wholesale, and distribution services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
                Request a Quote
              </Link>
              <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-md mb-6">Your Trusted Trading Partner in the UAE</h2>
            <p className="text-lg text-gray-600">
              The Running Horse LLC is a fully licensed general trading company based in the United Arab Emirates.
              We facilitate international trade by sourcing, importing, and distributing high-quality fashion and lifestyle products
              to retailers, wholesalers, and corporate buyers across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-gray-600">
                Established relationships with international suppliers and manufacturers across Asia, Europe, and the Middle East.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality inspection and verification processes to ensure products meet international standards and specifications.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Efficient Operations</h3>
              <p className="text-gray-600">
                Streamlined import/export procedures, customs clearance, and logistics coordination for timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Comprehensive Trading Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end trading solutions designed for businesses seeking reliable sourcing, distribution, and logistics support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <span className="w-2 h-2 bg-primary-700 rounded-full mr-3"></span>
                Import & Export
              </h3>
              <p className="text-gray-600 text-sm">
                Full-service international trade facilitation including customs documentation, compliance, and shipping.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <span className="w-2 h-2 bg-primary-700 rounded-full mr-3"></span>
                Wholesale Trading
              </h3>
              <p className="text-gray-600 text-sm">
                Bulk procurement and distribution to retailers, e-commerce businesses, and corporate clients.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <span className="w-2 h-2 bg-primary-700 rounded-full mr-3"></span>
                Product Sourcing
              </h3>
              <p className="text-gray-600 text-sm">
                Strategic sourcing from verified manufacturers and suppliers worldwide based on your requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <span className="w-2 h-2 bg-primary-700 rounded-full mr-3"></span>
                Private Labeling
              </h3>
              <p className="text-gray-600 text-sm">
                Customized branding and packaging solutions to help you launch your own product lines.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <span className="w-2 h-2 bg-primary-700 rounded-full mr-3"></span>
                Distribution & Logistics
              </h3>
              <p className="text-gray-600 text-sm">
                Warehousing, inventory management, and delivery coordination throughout the region.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <span className="w-2 h-2 bg-primary-700 rounded-full mr-3"></span>
                Supplier Management
              </h3>
              <p className="text-gray-600 text-sm">
                Ongoing supplier evaluation, negotiation, and relationship management for optimal results.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in sourcing and trading premium fashion and lifestyle products across multiple categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/products#leather-goods" className="group">
              <div className="card hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-20 h-20 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-700 transition-colors">Leather Goods</h3>
                <p className="text-gray-600 text-sm">
                  Premium leather bags, wallets, belts, and accessories from certified manufacturers.
                </p>
              </div>
            </Link>

            <Link href="/products#clothing" className="group">
              <div className="card hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-20 h-20 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-700 transition-colors">Clothing & Garments</h3>
                <p className="text-gray-600 text-sm">
                  Men's, women's, and children's apparel from trusted textile manufacturers worldwide.
                </p>
              </div>
            </Link>

            <Link href="/products#cosmetics" className="group">
              <div className="card hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-20 h-20 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-700 transition-colors">Cosmetics & Beauty</h3>
                <p className="text-gray-600 text-sm">
                  Skincare, makeup, fragrances, and beauty products compliant with international standards.
                </p>
              </div>
            </Link>

            <Link href="/products#accessories" className="group">
              <div className="card hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-20 h-20 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-700 transition-colors">Fashion Accessories</h3>
                <p className="text-gray-600 text-sm">
                  Jewelry, watches, eyewear, scarves, and other fashion accessories for all demographics.
                </p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link href="/products" className="btn-outline">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Why Choose The Running Horse LLC</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We combine local market expertise with global trade capabilities to deliver exceptional value to our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">10+</div>
              <div className="text-gray-400">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
              <div className="text-gray-400">Global Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">100%</div>
              <div className="text-gray-400">UAE Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-gray-400">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary-100">
            <h2 className="heading-md mb-4">Ready to Start Trading?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with The Running Horse LLC for reliable sourcing, competitive pricing, and professional service.
              Contact us today to discuss your trading requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
