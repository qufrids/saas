import Link from 'next/link'

export const metadata = {
  title: 'Services | The Running Horse LLC',
  description: 'Comprehensive general trading services including import/export, wholesale trading, product sourcing, private labeling, distribution, and supplier management.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="heading-lg mb-6">Our Trading Services</h1>
            <p className="text-xl text-primary-100">
              End-to-end trading solutions designed to simplify international commerce
              and deliver value to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Comprehensive Trading Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From sourcing to delivery, we manage every aspect of the trading process with professionalism and expertise.
            </p>
          </div>

          <div className="space-y-12">
            {/* Import & Export */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-900 rounded-full text-sm font-semibold mb-4">
                  Core Service
                </div>
                <h3 className="text-3xl font-bold mb-4">Import & Export Services</h3>
                <p className="text-gray-600 mb-6">
                  Full-service international trade facilitation with expertise in customs regulations, documentation,
                  and compliance. We handle all aspects of cross-border trade to ensure smooth, efficient operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Complete customs documentation and clearance management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">UAE trade license and regulatory compliance assurance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Certificates of origin and product certification coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">International shipping and freight forwarding arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Trade finance and letter of credit facilitation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 h-full flex items-center justify-center">
                <svg className="w-64 h-64 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Wholesale Trading */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full flex items-center justify-center">
                <svg className="w-64 h-64 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4">
                  B2B Trading
                </div>
                <h3 className="text-3xl font-bold mb-4">Wholesale Trading</h3>
                <p className="text-gray-600 mb-6">
                  Bulk procurement and distribution services for retailers, e-commerce businesses, and corporate buyers.
                  We offer competitive pricing and flexible order quantities to meet your business needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Bulk orders with volume-based pricing discounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Regular supply agreements and contract management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Flexible payment terms for established partners</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Drop-shipping capabilities for online retailers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Inventory management and stock level monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Product Sourcing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-green-100 text-green-900 rounded-full text-sm font-semibold mb-4">
                  Procurement
                </div>
                <h3 className="text-3xl font-bold mb-4">Product Sourcing & Procurement</h3>
                <p className="text-gray-600 mb-6">
                  Leverage our extensive network of verified suppliers to source products that meet your specific
                  requirements. We handle the entire procurement process from supplier identification to quality verification.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Global supplier identification and evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Custom product specification and requirements matching</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Price negotiation and competitive bidding management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Product sampling and prototype development coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Factory audits and production capacity assessments</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-full flex items-center justify-center">
                <svg className="w-64 h-64 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Private Labeling */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 h-full flex items-center justify-center">
                <svg className="w-64 h-64 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-900 rounded-full text-sm font-semibold mb-4">
                  Branding
                </div>
                <h3 className="text-3xl font-bold mb-4">Private Labeling</h3>
                <p className="text-gray-600 mb-6">
                  Launch your own branded product lines with our private labeling services. We coordinate with
                  manufacturers to create custom-branded products that meet your specifications and brand standards.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Custom packaging design and production coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Brand labeling and logo application services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Product formulation and specification customization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Minimum order quantity negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Compliance labeling for target markets</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Distribution & Logistics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-orange-100 text-orange-900 rounded-full text-sm font-semibold mb-4">
                  Logistics
                </div>
                <h3 className="text-3xl font-bold mb-4">Distribution & Logistics Coordination</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive logistics management from warehousing to final delivery. We ensure your products
                  reach their destination safely, efficiently, and on schedule.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Warehousing and inventory storage facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Order fulfillment and picking/packing services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Last-mile delivery coordination across the region</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Real-time shipment tracking and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Returns processing and reverse logistics handling</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 h-full flex items-center justify-center">
                <svg className="w-64 h-64 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Supplier Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 h-full flex items-center justify-center">
                <svg className="w-64 h-64 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-teal-100 text-teal-900 rounded-full text-sm font-semibold mb-4">
                  Partnership
                </div>
                <h3 className="text-3xl font-bold mb-4">Supplier Management</h3>
                <p className="text-gray-600 mb-6">
                  Ongoing supplier relationship management to ensure consistent quality, competitive pricing,
                  and reliable delivery. We act as your procurement partner, managing supplier communications and performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Supplier performance monitoring and evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Contract negotiation and renewal management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Quality assurance program implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Regular communication and relationship maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Issue resolution and problem-solving coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through experienced management, robust processes, and client-focused service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
              <p className="text-gray-300">
                Efficient processes and established relationships enable quick order processing and delivery timelines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Guaranteed Quality</h3>
              <p className="text-gray-300">
                Rigorous inspection protocols and quality control measures ensure products meet specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-gray-300">
                Direct supplier relationships and volume purchasing power deliver cost savings to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-primary-100">
            <h2 className="text-3xl font-bold mb-4">Let's Discuss Your Requirements</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to learn more about how our services can support your business growth and trading objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Consultation
              </Link>
              <Link href="/products" className="btn-secondary">
                View Product Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
