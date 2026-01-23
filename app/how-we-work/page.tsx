import Link from 'next/link'

export const metadata = {
  title: 'How We Work | The Running Horse LLC',
  description: 'Learn about our streamlined trading process from supplier selection to product delivery, ensuring quality, compliance, and customer satisfaction.',
}

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="heading-lg mb-6">How We Work</h1>
            <p className="text-xl text-primary-100">
              A transparent, efficient, and professional trading process designed to deliver
              exceptional results for our partners and clients.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">Our Trading Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial inquiry to final delivery, we manage every step with meticulous attention
              to detail, ensuring smooth operations and satisfied customers.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">Inquiry & Requirements Gathering</h3>
                <p className="text-gray-600 mb-4">
                  The process begins when you contact us with your trading requirements. We conduct a detailed
                  consultation to understand your needs, including product specifications, quantity requirements,
                  quality standards, budget parameters, and delivery timelines.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">What We Collect:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Product type, specifications, and quality requirements</li>
                    <li>• Order quantities and frequency needs</li>
                    <li>• Target pricing and budget constraints</li>
                    <li>• Delivery destinations and timeline expectations</li>
                    <li>• Packaging, labeling, and customization needs</li>
                    <li>• Compliance and certification requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-300 ml-8 h-12"></div>

            {/* Step 2 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">Supplier Network & Sourcing</h3>
                <p className="text-gray-600 mb-4">
                  Leveraging our extensive global supplier network, we identify and evaluate manufacturers and
                  suppliers capable of meeting your requirements. We conduct thorough due diligence on all potential
                  suppliers to ensure reliability, quality, and compliance.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Our Sourcing Activities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Supplier identification from our verified network</li>
                    <li>• Business license and certification verification</li>
                    <li>• Production capacity and capability assessment</li>
                    <li>• Factory audits and facility inspections</li>
                    <li>• Reference checks and performance history review</li>
                    <li>• Request for quotations (RFQ) and competitive bidding</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-300 ml-8 h-12"></div>

            {/* Step 3 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">Quotation & Negotiation</h3>
                <p className="text-gray-600 mb-4">
                  We prepare comprehensive quotations including all costs associated with your order. Our procurement
                  team negotiates favorable terms on your behalf, ensuring competitive pricing while maintaining
                  quality standards. We present transparent pricing with no hidden fees.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Quotation Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Product unit pricing and volume discounts</li>
                    <li>• Manufacturing or sourcing costs</li>
                    <li>• Quality inspection fees</li>
                    <li>• International shipping and freight charges</li>
                    <li>• Customs duties and import taxes (estimated)</li>
                    <li>• Our service fees and commission structure</li>
                    <li>• Payment terms and conditions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-300 ml-8 h-12"></div>

            {/* Step 4 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">Order Confirmation & Contracts</h3>
                <p className="text-gray-600 mb-4">
                  Upon agreement of terms, we formalize the arrangement through proper documentation. This includes
                  purchase orders, commercial invoices, and trade contracts that clearly define responsibilities,
                  timelines, quality specifications, and payment terms for all parties.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Documentation:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Purchase order with detailed specifications</li>
                    <li>• Commercial invoice and proforma invoice</li>
                    <li>• Trading contract or supply agreement</li>
                    <li>• Product specification sheets</li>
                    <li>• Quality assurance agreement</li>
                    <li>• Delivery and shipping terms (Incoterms)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-300 ml-8 h-12"></div>

            {/* Step 5 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">Production & Quality Inspection</h3>
                <p className="text-gray-600 mb-4">
                  During the production phase, we maintain regular communication with suppliers and conduct quality
                  inspections at various stages. Our quality control procedures ensure products meet agreed specifications
                  before shipment authorization.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Quality Control Activities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pre-production sample approval</li>
                    <li>• During production monitoring and inspection</li>
                    <li>• Pre-shipment inspection (PSI) of finished goods</li>
                    <li>• Product testing for compliance and safety</li>
                    <li>• Packaging and labeling verification</li>
                    <li>• Detailed inspection reports with photographic evidence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-300 ml-8 h-12"></div>

            {/* Step 6 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  6
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">Shipping & Customs Clearance</h3>
                <p className="text-gray-600 mb-4">
                  Once quality approval is granted, we coordinate international shipping and handle all customs
                  documentation. Our logistics team ensures efficient clearance through UAE customs and coordinates
                  delivery to your specified location.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Logistics Management:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Freight booking and shipping arrangements</li>
                    <li>• Bill of lading and shipping documentation</li>
                    <li>• Certificate of origin and export documents</li>
                    <li>• UAE customs declaration and clearance</li>
                    <li>• Import permits and required certifications</li>
                    <li>• Customs duty payment and processing</li>
                    <li>• Shipment tracking and status updates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-300 ml-8 h-12"></div>

            {/* Step 7 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  7
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">Delivery & After-Sales Support</h3>
                <p className="text-gray-600 mb-4">
                  Final delivery is coordinated to your warehouse or specified location. Our relationship continues
                  beyond delivery with ongoing support for any issues, reorders, or additional requirements. We
                  maintain comprehensive records for all transactions.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Post-Delivery Services:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Delivery confirmation and documentation</li>
                    <li>• Issue resolution and problem-solving</li>
                    <li>• Returns and claims handling if needed</li>
                    <li>• Reorder facilitation and repeat business support</li>
                    <li>• Customer feedback collection</li>
                    <li>• Ongoing account management and support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Communication</h3>
              <p className="text-gray-600">
                Regular updates throughout the process, honest assessment of challenges, and clear documentation
                at every stage.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Efficient Timelines</h3>
              <p className="text-gray-600">
                Realistic scheduling, proactive problem-solving, and expedited processing to meet your
                business deadlines.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Independent inspections, compliance verification, and thorough documentation to protect
                your interests.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Strong supplier relationships and negotiation expertise deliver cost savings without
                compromising quality.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Full Compliance</h3>
              <p className="text-gray-600">
                Expertise in UAE customs regulations, import requirements, and international trade compliance
                standards.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Assigned account manager who understands your business and provides personalized attention
                and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warehousing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Warehousing & Inventory Management</h2>
              <p className="text-lg text-gray-600 mb-6">
                For clients requiring storage solutions, we offer warehousing services in the UAE with inventory
                management capabilities. This allows for flexible order fulfillment and just-in-time delivery
                to your customers or retail locations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Secure warehouse facilities with climate control</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Inventory tracking and stock level monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Order picking, packing, and fulfillment services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Distribution coordination to multiple destinations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-12 flex items-center justify-center">
              <svg className="w-80 h-80 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Dedicated Customer Support</h2>
            <p className="text-lg text-primary-100 mb-8">
              Our customer support team is available to assist with inquiries, provide updates, and resolve
              any issues throughout your trading journey. We maintain responsive communication channels
              and prioritize client satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl mb-2">📧</div>
                <h3 className="font-bold mb-2">Email Support</h3>
                <p className="text-sm text-primary-200">
                  Response within 24 hours for all inquiries
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl mb-2">📞</div>
                <h3 className="font-bold mb-2">Phone Support</h3>
                <p className="text-sm text-primary-200">
                  Direct line during business hours
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl mb-2">💬</div>
                <h3 className="font-bold mb-2">Account Manager</h3>
                <p className="text-sm text-primary-200">
                  Dedicated contact for ongoing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-primary-100">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience our professional trading process firsthand. Contact us today to discuss your requirements
              and receive a customized quotation.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Trading Journey
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
