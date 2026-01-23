import Link from 'next/link'

export const metadata = {
  title: 'About Us | The Running Horse LLC',
  description: 'Learn about The Running Horse LLC - a UAE-based general trading company specializing in fashion and lifestyle products with a commitment to quality and ethical sourcing.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="heading-lg mb-6">About The Running Horse LLC</h1>
            <p className="text-xl text-gray-300">
              A trusted general trading company committed to facilitating international trade
              in fashion and lifestyle products with integrity, professionalism, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Our Company</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The Running Horse LLC is a licensed general trading company registered in the United Arab Emirates,
                  specializing in the import, export, wholesale, and distribution of premium fashion and lifestyle products.
                </p>
                <p>
                  Our business focuses on four core product categories: leather goods, clothing and garments,
                  cosmetics and beauty products, and fashion accessories. We serve as a vital link between
                  international manufacturers and regional markets, facilitating smooth and compliant trade operations.
                </p>
                <p>
                  With our strategic location in the UAE, we leverage the region's world-class trade infrastructure
                  and connectivity to serve clients across the Middle East, Africa, and Asia. Our team brings together
                  extensive experience in international trade, logistics, quality control, and supplier management.
                </p>
                <p>
                  We operate with full regulatory compliance, maintaining all necessary licenses and certifications
                  required for general trading activities in the UAE. Our commitment to transparency and ethical
                  business practices has established us as a reliable partner for suppliers, distributors, and retailers.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-2">Company Name</h3>
                <p className="text-gray-700">The Running Horse LLC</p>
              </div>
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-2">Business Activity</h3>
                <p className="text-gray-700">General Trading</p>
              </div>
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-2">Location</h3>
                <p className="text-gray-700">United Arab Emirates</p>
              </div>
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-2">Specialization</h3>
                <p className="text-gray-700">Fashion & Lifestyle Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To facilitate seamless international trade by connecting global suppliers with regional markets,
                providing reliable sourcing, quality assurance, and efficient distribution of fashion and lifestyle
                products. We are committed to building long-term partnerships based on trust, transparency, and
                mutual growth.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the preferred general trading partner for fashion and lifestyle products in the UAE and
                broader Middle East region. We envision a future where businesses can confidently source and distribute
                quality products through streamlined processes, ethical practices, and exceptional service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our business operations and relationships with partners and clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Integrity
              </h3>
              <p className="text-gray-600">
                We conduct all business with honesty, transparency, and ethical practices, maintaining full
                compliance with UAE trade regulations.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
                Quality
              </h3>
              <p className="text-gray-600">
                We are committed to sourcing and delivering products that meet the highest quality standards
                and exceed customer expectations.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                Partnership
              </h3>
              <p className="text-gray-600">
                We build long-term relationships with suppliers and clients, working collaboratively toward
                shared success and mutual growth.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Reliability
              </h3>
              <p className="text-gray-600">
                We deliver on our commitments with consistent, dependable service, ensuring timely
                fulfillment and responsive communication.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Global Perspective
              </h3>
              <p className="text-gray-600">
                We maintain a worldwide network while respecting local cultures, regulations, and business
                practices in every market we serve.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously improve our processes and embrace new technologies to deliver better
                service and efficiency to our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Commitment to Quality and Compliance</h2>
            <div className="space-y-6 text-gray-200">
              <p className="text-lg">
                Quality assurance is at the heart of our operations. We implement rigorous inspection and
                verification procedures at every stage of the supply chain, from initial supplier selection
                to final product delivery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Supplier Verification</h3>
                  <p className="text-sm text-gray-300">
                    All suppliers undergo comprehensive vetting, including business license verification,
                    production capability assessment, and compliance with international trade standards.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Product Inspection</h3>
                  <p className="text-sm text-gray-300">
                    We conduct thorough quality inspections before shipment, ensuring products meet
                    specifications, safety standards, and regulatory requirements.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Regulatory Compliance</h3>
                  <p className="text-sm text-gray-300">
                    Full adherence to UAE customs regulations, import/export laws, and international trade
                    compliance requirements for all products and transactions.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Documentation</h3>
                  <p className="text-sm text-gray-300">
                    Comprehensive documentation management including certificates of origin, quality
                    certificates, and all required customs clearance paperwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Sourcing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Ethical Sourcing Practices</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              We are committed to responsible sourcing and ethical business conduct throughout our supply chain.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Fair Labor Practices</h3>
                  <p className="text-gray-600">
                    We partner exclusively with suppliers who maintain fair working conditions, provide safe
                    work environments, and comply with international labor standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Environmental Responsibility</h3>
                  <p className="text-gray-600">
                    We prioritize suppliers who implement environmentally conscious manufacturing processes
                    and sustainable sourcing of raw materials.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Authenticity and Transparency</h3>
                  <p className="text-gray-600">
                    We ensure product authenticity, maintain transparent supply chain documentation, and
                    provide full traceability for all traded goods.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Continuous Monitoring</h3>
                  <p className="text-gray-600">
                    Regular audits and assessments of our supplier network to ensure ongoing compliance with
                    our ethical sourcing standards and quality requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">UAE Presence and Global Trade Network</h2>
            <p className="text-lg text-gray-600 mb-8">
              Operating from the United Arab Emirates provides us with strategic advantages for international
              trade. The UAE's world-class infrastructure, efficient customs procedures, and strategic location
              make it an ideal hub for connecting suppliers and markets across Asia, Europe, Africa, and the
              Middle East.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">Asia</div>
                <p className="text-sm text-gray-600">Manufacturing Partners</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">Europe</div>
                <p className="text-sm text-gray-600">Quality Suppliers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">Middle East</div>
                <p className="text-sm text-gray-600">Regional Distribution</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">Africa</div>
                <p className="text-sm text-gray-600">Emerging Markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-primary-100">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the difference of working with a professional, compliant, and customer-focused trading company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us Today
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
