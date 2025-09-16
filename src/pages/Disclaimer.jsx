// src/pages/Disclaimer.jsx
import React from "react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-6">
          Disclaimer
        </h1>
        <p className="text-center text-sm text-gray-500 mb-12">
          Last Updated: September 16, 2025
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. General Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Aultum is a <strong>parent company</strong> that operates multiple
            brands across various industries, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>
              <strong>GrayMaterials</strong> – Trading and supply of M-sand and
              other construction materials.
            </li>
            <li>
              <strong>Batteryfy</strong> – Vehicle conversions to electric /
              hybrid, SOS emergency support, nearby EV charging station
              discovery, EV product marketplace, and energy trading solutions
              via “Power Bank.”
            </li>
            <li>
              <strong>Dry Chillies</strong> – Sourcing and selling red chillies
              from farmers across Karnataka, India.
            </li>
            <li>
              <strong>Dry Grains</strong> – Distribution of grains from farmers
              across Karnataka to markets across the country.
            </li>
            <li>
              <strong>Co Brothers</strong> – Real estate platform helping
              customers find and purchase sites with the assistance of agents.
            </li>
            <li>
              <strong>Checkdam</strong> – Selling agricultural products focused
              on irrigation and mini-irrigation solutions for farmers.
            </li>
            <li>
              <strong>Co Sister</strong> – Providing a wide range of beauty
              products for women.
            </li>
            <li>
              <strong>Pregadays</strong> – Offering pregnancy-related products
              for women during their pregnancy journey.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Accuracy of Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We strive to keep all content accurate and up to date. However,
            Aultum makes no warranties regarding the completeness, reliability,
            or accuracy of the information provided. Use of our content is at
            your own risk.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. External Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites, products, or
            services. These are not under Aultum’s control, and we are not
            responsible for their content, practices, or policies. Inclusion of
            such links does not imply endorsement.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Business Services Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each brand under Aultum operates with its own business-specific
            responsibilities:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Batteryfy</strong> – Vehicle conversions depend on
              regulations, technology, and customer requirements. EV services
              may vary by region.
            </li>
            <li>
              <strong>GrayMaterials</strong> – Supply depends on market
              fluctuations, logistics, and supplier availability.
            </li>
            <li>
              <strong>Dry Chillies & Dry Grains</strong> – Quality and pricing
              of agricultural products vary seasonally.
            </li>
            <li>
              <strong>Co Brothers</strong> – Real estate services are subject to
              regional property laws and third-party verifications.
            </li>
            <li>
              <strong>Checkdam</strong> – Agricultural products are offered as
              available and may vary by region.
            </li>
            <li>
              <strong>Co Sister</strong> – Beauty products are subject to
              availability, brand partnerships, and product standards.
            </li>
            <li>
              <strong>Pregadays</strong> – Pregnancy products are general in
              nature and not intended as medical substitutes. Users should seek
              professional medical advice before use.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Aultum and its brands shall not be held liable for any direct or
            indirect damages arising from use of our services, reliance on
            information, or third-party actions. Use our website and services at
            your own discretion.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. No Professional Relationship
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Using our website does not create any client, advisory, or
            professional relationship. For specialized advice (legal, financial,
            medical, or technical), please consult a qualified professional.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Updates to Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Aultum reserves the right to update or modify this Disclaimer at any
            time without notice. Please review this page periodically.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions about this Disclaimer, please contact us at:
          </p>
          <div className="mt-4 text-gray-700">
            <p>
              <strong>Aultum Headquarters</strong>
            </p>
            <p>📧 Email: support@aultum.com</p>
            <p>🌐 Website: www.aultum.com</p>
          </div>
        </section>

        {/* Footer Note */}
        <p className="mt-12 text-center text-sm text-gray-500">
          ⚠️ By using this website, you agree to the terms of this Disclaimer.
          If you do not agree, please discontinue use immediately.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;