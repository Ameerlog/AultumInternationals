// src/pages/Policy.jsx
import React from "react";

const Policy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-6">
          Company Policies
        </h1>
        <p className="text-center text-sm text-gray-500 mb-12">
          Last Updated: September 16, 2025
        </p>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed">
            At <strong>Aultum</strong>, we are committed to ensuring fair,
            transparent, and reliable practices across all our brands:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>GrayMaterials – Construction material trading</li>
            <li>Batteryfy – EV conversions, services & energy trading</li>
            <li>Dry Chillies – Red chilli sourcing & supply chain</li>
            <li>Dry Grains – Storage & distribution of grains</li>
            <li>Co Brothers – Real estate services</li>
            <li>Checkdam – Agricultural & irrigation solutions</li>
            <li>Co Sister – Women’s beauty products</li>
            <li>Pregadays – Pregnancy-related products</li>
          </ul>
        </section>

        {/* Shipping Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Shipping & Delivery
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Delivery timelines vary depending on the brand and product. We aim
            to dispatch all standard orders within 2–7 business days. For
            large-scale items (e.g., construction materials, EV batteries),
            delivery schedules will be confirmed individually. Shipping charges,
            if applicable, will be displayed at checkout.
          </p>
        </section>

        {/* Refund & Returns */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Refunds & Returns
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We strive to deliver only the best quality products and services.
            Refunds and returns are applicable under the following conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Products (like beauty or pregnancy items) must be unused,
              unopened, and returned within 7 days.
            </li>
            <li>
              For agricultural/EV equipment, returns are only accepted for
              defective items or damages reported within 3 days of delivery.
            </li>
            <li>
              Service-based offerings (EV conversions, real estate services)
              follow brand-specific agreements, and refunds are handled
              case-by-case.
            </li>
          </ul>
        </section>

        {/* Data & Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Data & Security Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Protecting your personal information is a top priority. We collect
            only necessary details required to process transactions, enhance
            user experience, and provide services. Please refer to our{" "}
            <a
              href="/privacy"
              className="text-green-700 font-medium hover:underline"
            >
              Privacy Policy
            </a>{" "}
            for detailed information.
          </p>
        </section>

        {/* Cancellation */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Order Cancellations
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Orders can be canceled before dispatch. Once shipped, cancellations
            are not possible. For service-based brands (like Batteryfy or Co
            Brothers), cancellations must follow the terms agreed at the time of
            booking.
          </p>
        </section>

        {/* Customer Responsibility */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Customer Responsibility
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Customers are responsible for providing accurate delivery addresses,
            correct personal details, and safe access for logistics and service
            teams. We are not liable for failed deliveries due to incorrect
            information.
          </p>
        </section>

        {/* Updates */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Policy Updates
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Aultum may update its policies from time to time to reflect changes
            in operations, technology, or compliance requirements. Updated
            policies will be posted on this page, and we encourage you to review
            them regularly.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For policy-related inquiries, contact us at:
          </p>
          <div className="mt-4 text-gray-700">
            <p>
              <strong>Aultum Headquarters</strong>
            </p>
            <p>📧 Email: policies@aultum.com</p>
            <p>🌐 Website: www.aultum.com</p>
          </div>
        </section>

        {/* Footer Note */}
        <p className="mt-12 text-center text-sm text-gray-500">
          📌 By using Aultum and its associated brands, you agree to the
          policies outlined above.
        </p>
      </div>
    </div>
  );
};

export default Policy;
