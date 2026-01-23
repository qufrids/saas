import Link from 'next/link'

export const metadata = {
  title: 'Compliance & Certifications | The Running Horse LLC',
  description: 'The Running Horse LLC operates as a fully licensed UAE general trading company in compliance with all regulatory requirements and international trade standards.',
}

export default function CompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="heading-lg mb-6">Compliance & Certifications</h1>
            <p className="text-xl text-primary-100">
              Operating with full regulatory compliance and adherence to international trade standards.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Commitment to Regulatory Compliance</h2>
            <p className="text-lg text-gray-600">
              The Running Horse LLC operates as a fully licensed general trading company in the United Arab Emirates,
              maintaining strict adherence to all applicable laws, regulations, and industry standards. Our commitment
              to compliance ensures that all trading activities are conducted legally, ethically, and transparently.
            </p>
          </div>
        </div>
      </section>

      {/* UAE Trading License */}
      <section className="section-padding bg-gray-50">
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

      {/* Regulatory Compliance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Regulatory Compliance Framework</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain comprehensive compliance with UAE and international trade regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                UAE Customs Regulations
              </h3>
              <p className="text-gray-600 text-sm">
                Full compliance with UAE Federal Customs Authority requirements for import/export documentation,
                tariff classifications, and customs procedures.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Trade License Compliance
              </h3>
              <p className="text-gray-600 text-sm">
                Valid general trading license with authorized business activities, renewed annually and
                maintained in compliance with UAE Department of Economic Development requirements.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Import/Export Regulations
              </h3>
              <p className="text-gray-600 text-sm">
                Adherence to UAE import/export laws, restricted goods protocols, and licensing requirements
                for specific product categories.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Anti-Money Laundering (AML)
              </h3>
              <p className="text-gray-600 text-sm">
                Compliance with UAE AML regulations and financial transaction monitoring to prevent money
                laundering and terrorist financing.
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
                VAT registration and compliance with UAE Federal Tax Authority requirements, proper tax
                invoicing, and timely filing of tax returns.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Consumer Protection Laws
              </h3>
              <p className="text-gray-600 text-sm">
                Compliance with UAE consumer protection regulations, product safety standards, and fair
                trading practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Compliance */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Product-Specific Compliance</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-amber-900">Leather Goods Compliance</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Certificate of Origin for imported leather products</li>
                  <li>• Material authenticity verification and testing</li>
                  <li>• Compliance with leather goods import standards</li>
                  <li>• Proper labeling of leather type and country of manufacture</li>
                  <li>• Environmental compliance for leather processing</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Clothing & Textile Compliance</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• UAE textile import regulations and standards</li>
                  <li>• Fabric composition labeling requirements</li>
                  <li>• Care instruction labeling compliance</li>
                  <li>• Size marking and measurement standards</li>
                  <li>• Textile safety testing (flammability, harmful substances)</li>
                  <li>• Country of origin marking</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-pink-900">Cosmetics & Beauty Products Compliance</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• UAE cosmetic import permits and registrations</li>
                  <li>• GCC Cosmetic Product Regulation compliance</li>
                  <li>• Ingredient disclosure and safety data sheets</li>
                  <li>• Product testing and quality certificates</li>
                  <li>• Labeling in Arabic and English languages</li>
                  <li>• Expiry date and batch number marking</li>
                  <li>• Good Manufacturing Practice (GMP) certificates from suppliers</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-purple-900">Fashion Accessories Compliance</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Product safety testing for jewelry and accessories</li>
                  <li>• Compliance with metal content regulations</li>
                  <li>• Watch import regulations and trademark clearance</li>
                  <li>• Proper labeling and packaging requirements</li>
                  <li>• Battery safety compliance for electronic accessories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Quality Standards & Certifications</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              We ensure that our suppliers maintain internationally recognized quality standards and certifications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">ISO Certifications</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We prioritize suppliers with relevant ISO certifications demonstrating quality management
                  and manufacturing excellence.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ISO 9001 - Quality Management Systems</li>
                  <li>• ISO 14001 - Environmental Management</li>
                  <li>• ISO 45001 - Occupational Health & Safety</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Industry-Specific Standards</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Suppliers maintain certifications relevant to their specific product categories and markets.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• GMP (Good Manufacturing Practice) for cosmetics</li>
                  <li>• OEKO-TEX for textiles and garments</li>
                  <li>• REACH compliance for chemicals</li>
                  <li>• CE marking where applicable</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Ethical Certifications</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We encourage suppliers to maintain ethical production standards and social compliance certifications.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• BSCI (Business Social Compliance Initiative)</li>
                  <li>• WRAP (Worldwide Responsible Accredited Production)</li>
                  <li>• SA8000 Social Accountability</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Product Testing</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Independent third-party testing for product safety, quality, and compliance verification.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• SGS testing and inspection</li>
                  <li>• Intertek quality assurance</li>
                  <li>• Bureau Veritas certification</li>
                  <li>• TÜV certification services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Trade */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Ethical Trade Practices</h2>
            <p className="text-lg text-primary-100 text-center mb-12">
              Our commitment to ethical business extends throughout our supply chain, ensuring fair practices
              and social responsibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Fair Labor Standards</h3>
                <p className="text-sm text-primary-200">
                  We partner with suppliers who maintain fair working conditions, provide safe work environments,
                  pay fair wages, and prohibit child labor and forced labor.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Environmental Responsibility</h3>
                <p className="text-sm text-primary-200">
                  Preference for suppliers implementing sustainable manufacturing practices, waste reduction
                  programs, and environmental protection measures.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Supply Chain Transparency</h3>
                <p className="text-sm text-primary-200">
                  Maintenance of clear supply chain documentation, traceability of products, and transparent
                  communication about sourcing and manufacturing processes.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Anti-Corruption</h3>
                <p className="text-sm text-primary-200">
                  Zero tolerance for bribery, corruption, or unethical business practices. All transactions
                  conducted with integrity and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Trade Documentation Standards</h2>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-gray-600 mb-6">
                All trading transactions are supported by comprehensive, legally compliant documentation.
                We maintain meticulous records for audit purposes and regulatory compliance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3">Standard Documentation:</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Commercial Invoice</li>
                    <li>• Packing List</li>
                    <li>• Bill of Lading / Airway Bill</li>
                    <li>• Certificate of Origin</li>
                    <li>• Import/Export Declarations</li>
                    <li>• Customs Documentation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Product-Specific Documentation:</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Quality Certificates</li>
                    <li>• Test Reports and Lab Analysis</li>
                    <li>• Material Safety Data Sheets (MSDS)</li>
                    <li>• Conformity Certificates</li>
                    <li>• Product Specifications</li>
                    <li>• Regulatory Approvals</li>
                  </ul>
                </div>
              </div>
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
              For specific questions about our compliance procedures, certifications, or regulatory documentation,
              please contact our compliance team.
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
