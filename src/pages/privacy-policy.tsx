// app/privacy-policy/page.tsx
import Layout from "../app/layout";

export default function PrivacyPolicyPage() {
    return (
        <Layout>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">Privacy Policy</h1>
  
        <p className="text-gray-700 mb-6">
          At <strong>Haya Haven</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make a purchase.
        </p>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Personal details like your name, email address, shipping address, and phone number.</li>
            <li>Payment information processed securely via trusted third-party gateways.</li>
            <li>Browsing behavior, preferences, and interactions on our website.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">We use your information to:</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Process orders and provide customer service.</li>
            <li>Send updates about your orders and promotions (if subscribed).</li>
            <li>Improve our website, services, and shopping experience.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cookies & Tracking</h2>
          <p className="text-gray-700">
            We use cookies to enhance your experience, remember preferences, and understand how our website is used. You can choose to disable cookies in your browser settings.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Sharing Your Information</h2>
          <p className="text-gray-700">
            We never sell or rent your personal information. Your data may be shared with service providers (like payment gateways and shipping companies) solely for fulfilling your orders.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, or delete your personal information. Contact us at <a href="mailto:info@hayahaven.com" className="text-pink-600 underline">info@hayahaven.com</a> for any requests or questions.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Policy Updates</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy occasionally. Please review this page periodically for any changes. Continued use of our website constitutes your agreement to these terms.
          </p>
        </section>
  
        <p className="text-gray-600 text-sm mt-12">Last updated: April 29, 2025</p>
      </div>
          </Layout>

    );
  }
  