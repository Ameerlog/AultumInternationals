// src/pages/Privacy.jsx
import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-sm text-gray-500 mb-12">
          Last Updated: September 16, 2025
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Aultum (“we,” “our,” or “us”) values your trust. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you interact with our parent company and its associated brands:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>GrayMaterials – Construction material trading</li>
            <li>Batteryfy – EV conversions, services & energy trading</li>
            <li>Dry Chillies – Red chilli sourcing & selling</li>
            <li>Dry Grains – Grain supply across regions</li>
            <li>Co Brothers – Real estate services</li>
            <li>Checkdam – Agricultural & irrigation solutions</li>
            <li>Co Sister – Women’s beauty products</li>
            <li>Pregadays – Pregnancy-related products</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect the following types of personal and non-personal
            information when you use our websites, apps, or services:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Full name, email address, phone number, and contact details</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information (processed securely via third parties)</li>
            <li>Location data for services like nearby EV charging stations</li>
            <li>Device, browser, and usage data for analytics</li>
            <li>Any information voluntarily provided (e.g., contact forms)</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your information is used to provide and improve our services,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Processing orders, transactions, and deliveries</li>
            <li>Providing EV services, SOS support, and charging assistance</li>
            <li>Connecting customers with real estate agents</li>
            <li>Improving product recommendations and customer experience</li>
            <li>Sending important updates, promotions, or service alerts</li>
            <li>Complying with legal and regulatory requirements</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Sharing of Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your personal information. However, we may share it
            with:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>
              Trusted service providers (payment gateways, logistics, etc.)
            </li>
            <li>Business partners or affiliates for relevant services</li>
            <li>Regulatory authorities if required by law</li>
            <li>
              Third-party analytics tools to improve performance and user
              experience
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your
            information. However, no online transmission or storage method is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depending on your location, you may have rights under applicable
            data protection laws, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Accessing and requesting a copy of your personal data</li>
            <li>Requesting corrections to inaccurate information</li>
            <li>Requesting deletion of your data (“right to be forgotten”)</li>
            <li>Opting out of marketing communications</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Cookies & Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our websites may use cookies and tracking technologies to enhance
            functionality, analyze traffic, and personalize user experience. You
            can manage cookie preferences in your browser settings.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Some of our services integrate with third-party providers (e.g.,
            payment gateways, map services for EV stations). These providers
            operate under their own privacy policies, which we encourage you to
            review.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            9. Children’s Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are not directed at children under 13 (or applicable
            age under local law). We do not knowingly collect information from
            children. If you believe we have, please contact us to remove it.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            10. Updates to Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, or legal requirements. Please
            review this page periodically for updates.
          </p>
        </section>

        {/* Section 11 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            11. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For questions or concerns about this Privacy Policy, contact us:
          </p>
          <div className="mt-4 text-gray-700">
            <p>
              <strong>Aultum Headquarters</strong>
            </p>
            <p>📧 Email: privacy@aultum.com</p>
            <p>🌐 Website: www.aultum.com</p>
          </div>
        </section>

        {/* Footer Note */}
        <p className="mt-12 text-center text-sm text-gray-500">
          🔒 By using this website and our services, you consent to the
          collection and use of information as described in this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
