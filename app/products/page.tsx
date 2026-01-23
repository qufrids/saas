import Link from 'next/link'

export const metadata = {
  title: 'Products | The Running Horse LLC',
  description: 'Premium fashion and lifestyle products including leather goods, clothing, cosmetics, and accessories sourced from verified manufacturers worldwide.',
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="heading-lg mb-6">Product Categories</h1>
            <p className="text-xl text-gray-300">
              Premium fashion and lifestyle products sourced from verified manufacturers and suppliers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-6">Quality Products for Wholesale and Distribution</h2>
            <p className="text-lg text-gray-600">
              The Running Horse LLC specializes in sourcing and trading high-quality fashion and lifestyle products
              across four primary categories. Our extensive supplier network enables us to offer diverse product ranges
              suitable for retailers, wholesalers, and corporate buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Leather Goods */}
      <section id="leather-goods" className="section-padding bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-200 text-amber-900 rounded-full text-sm font-semibold mb-4">
                Category 1
              </div>
              <h2 className="heading-md mb-6">Leather Goods</h2>
              <p className="text-lg text-gray-700 mb-6">
                Premium leather products manufactured from high-quality genuine and synthetic leather materials.
                We work with certified tanneries and manufacturers that adhere to international quality standards.
              </p>

              <h3 className="text-xl font-bold mb-4">Product Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Bags & Luggage</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Handbags and purses</li>
                    <li>• Backpacks and travel bags</li>
                    <li>• Business briefcases</li>
                    <li>• Laptop bags and sleeves</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Wallets & Small Goods</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Men's and women's wallets</li>
                    <li>• Card holders and pouches</li>
                    <li>• Keychains and accessories</li>
                    <li>• Passport holders</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Belts & Accessories</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Men's and women's belts</li>
                    <li>• Leather bracelets</li>
                    <li>• Watch straps</li>
                    <li>• Phone cases</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Footwear</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Leather shoes and boots</li>
                    <li>• Sandals and slippers</li>
                    <li>• Sports and casual footwear</li>
                    <li>• Custom shoe manufacturing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-amber-600">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-900">Quality Standards:</strong> All leather products are sourced from
                  manufacturers with ISO certifications and undergo quality inspection for stitching, material authenticity,
                  durability, and finishing before shipment.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-12 h-full flex items-center justify-center">
              <svg className="w-80 h-80 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Clothing & Garments */}
      <section id="clothing" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 h-full flex items-center justify-center">
              <svg className="w-80 h-80 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-blue-200 text-blue-900 rounded-full text-sm font-semibold mb-4">
                Category 2
              </div>
              <h2 className="heading-md mb-6">Clothing & Garments</h2>
              <p className="text-lg text-gray-700 mb-6">
                Wide-ranging apparel collections for men, women, and children sourced from reputable textile manufacturers.
                We offer both ready-made garments and custom manufacturing services.
              </p>

              <h3 className="text-xl font-bold mb-4">Product Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Men's Apparel</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Shirts and t-shirts</li>
                    <li>• Trousers and jeans</li>
                    <li>• Suits and formal wear</li>
                    <li>• Activewear and sportswear</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Women's Apparel</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Dresses and gowns</li>
                    <li>• Tops, blouses, and tunics</li>
                    <li>• Pants, skirts, and jeans</li>
                    <li>• Modest and traditional wear</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Children's Clothing</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Baby and toddler wear</li>
                    <li>• Kids casual clothing</li>
                    <li>• School uniforms</li>
                    <li>• Children's sleepwear</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Specialized Clothing</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Workwear and uniforms</li>
                    <li>• Outerwear and jackets</li>
                    <li>• Underwear and innerwear</li>
                    <li>• Seasonal collections</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                <p className="text-sm text-gray-700">
                  <strong className="text-blue-900">Quality Standards:</strong> All garments undergo inspection for
                  fabric quality, stitching integrity, color fastness, sizing accuracy, and compliance with textile
                  safety regulations before distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmetics & Beauty Products */}
      <section id="cosmetics" className="section-padding bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-pink-200 text-pink-900 rounded-full text-sm font-semibold mb-4">
                Category 3
              </div>
              <h2 className="heading-md mb-6">Cosmetics & Beauty Products</h2>
              <p className="text-lg text-gray-700 mb-6">
                Comprehensive range of beauty and personal care products manufactured in compliance with international
                cosmetic regulations and safety standards. All products come with proper certification and documentation.
              </p>

              <h3 className="text-xl font-bold mb-4">Product Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Skincare</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Facial cleansers and toners</li>
                    <li>• Moisturizers and serums</li>
                    <li>• Anti-aging treatments</li>
                    <li>• Sunscreens and protection</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Makeup & Color Cosmetics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Foundation and concealers</li>
                    <li>• Lipsticks and lip care</li>
                    <li>• Eye makeup products</li>
                    <li>• Makeup tools and brushes</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Hair Care</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Shampoos and conditioners</li>
                    <li>• Hair treatments and masks</li>
                    <li>• Styling products</li>
                    <li>• Hair color and dyes</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Fragrances & Body Care</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Perfumes and eau de toilette</li>
                    <li>• Body lotions and creams</li>
                    <li>• Bath and shower products</li>
                    <li>• Deodorants and body sprays</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-pink-600">
                <p className="text-sm text-gray-700">
                  <strong className="text-pink-900">Quality & Compliance:</strong> All cosmetic products are sourced from
                  GMP-certified manufacturers and include proper ingredient labeling, safety data sheets, and compliance
                  with UAE cosmetic import regulations.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-12 h-full flex items-center justify-center">
              <svg className="w-80 h-80 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Fashion Accessories */}
      <section id="accessories" className="section-padding bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-12 h-full flex items-center justify-center">
              <svg className="w-80 h-80 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-purple-200 text-purple-900 rounded-full text-sm font-semibold mb-4">
                Category 4
              </div>
              <h2 className="heading-md mb-6">Fashion Accessories</h2>
              <p className="text-lg text-gray-700 mb-6">
                Diverse collection of fashion accessories and lifestyle products to complement apparel and personal style.
                We source trending designs and timeless classics to suit various market preferences.
              </p>

              <h3 className="text-xl font-bold mb-4">Product Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Jewelry</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fashion jewelry and costume pieces</li>
                    <li>• Earrings, necklaces, bracelets</li>
                    <li>• Rings and anklets</li>
                    <li>• Body jewelry and accessories</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Watches & Timepieces</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Men's and women's watches</li>
                    <li>• Smart watches and fitness trackers</li>
                    <li>• Sports and casual watches</li>
                    <li>• Watch accessories</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Eyewear</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sunglasses and fashion eyewear</li>
                    <li>• Reading glasses</li>
                    <li>• Eyewear cases and accessories</li>
                    <li>• Blue light blocking glasses</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold mb-2">Additional Accessories</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Scarves, shawls, and wraps</li>
                    <li>• Hats, caps, and headwear</li>
                    <li>• Hair accessories</li>
                    <li>• Lifestyle and gift items</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
                <p className="text-sm text-gray-700">
                  <strong className="text-purple-900">Quality Standards:</strong> All accessories undergo quality checks
                  for materials, durability, finishing, and safety compliance. Jewelry and watches include authenticity
                  verification where applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Flexible Sourcing Options</h2>
            <p className="text-lg text-gray-300 mb-12">
              Beyond our core product categories, we can source virtually any fashion or lifestyle product
              based on your specific requirements. Our global supplier network and procurement expertise
              enable us to fulfill custom orders efficiently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Custom Sourcing</h3>
                <p className="text-gray-300 text-sm">
                  Request specific products, styles, or specifications and we'll locate suitable manufacturers
                  and coordinate production.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Private Label Ready</h3>
                <p className="text-gray-300 text-sm">
                  All product categories available for private labeling with your brand, custom packaging,
                  and specifications.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">MOQ Flexibility</h3>
                <p className="text-gray-300 text-sm">
                  We work to accommodate various order sizes and can negotiate favorable minimum order
                  quantities with suppliers.
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
            <h2 className="text-3xl font-bold mb-4">Interested in Our Products?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to discuss product availability, pricing, minimum order quantities, and customization options
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Product Catalog
              </Link>
              <Link href="/services" className="btn-secondary">
                View Trading Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
