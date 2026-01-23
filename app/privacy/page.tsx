export const metadata = {
  title: 'Privacy Policy | The Running Horse LLC',
  description: 'Privacy policy for The Running Horse LLC website and services.',
}

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: January 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600">
                The Running Horse LLC ("we," "our," or "us") respects your privacy and is committed to protecting
                your personal data. This privacy policy explains how we collect, use, and safeguard information
                when you visit our website or engage our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Contact information (name, email address, phone number, company name)</li>
                <li>Business information provided in inquiries or quotation requests</li>
                <li>Website usage data (IP address, browser type, pages visited)</li>
                <li>Communication records (emails, messages, phone conversations)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Responding to inquiries and providing requested information</li>
                <li>Processing quotation requests and facilitating trading transactions</li>
                <li>Maintaining business relationships with clients and partners</li>
                <li>Improving our website and services</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal data
                against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share
                information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Service providers who assist in business operations (under confidentiality agreements)</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p className="text-gray-600">
                Our website may use cookies to enhance user experience. Cookies are small text files stored
                on your device. You can configure your browser to refuse cookies, though this may limit
                website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal data we hold</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Object to processing of your personal data</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                For questions about this privacy policy or to exercise your rights, please contact us at:
                <br />
                <span className="font-semibold">Email:</span> info@therunninghorse.ae
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-sm text-gray-600">
                This privacy policy may be updated periodically. Changes will be posted on this page with
                an updated revision date. We encourage you to review this policy regularly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
