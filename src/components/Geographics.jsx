import React, { memo } from "react";

const Geographics = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Headquarters
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 mb-10">
          We are proud to call{" "}
          <span className="font-semibold text-gray-800">Hubli, India</span> our
          home. Visit our office or reach out to us anytime.
        </p>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
          <iframe
            title="company-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.2207563727347!2d75.12367257326366!3d15.361485957999486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d736cf492201%3A0x9523e2cb14e7e318!2sMarvel%20Artiza!5e1!3m2!1sen!2sin!4v1756442059945!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="text-gray-700 mb-8">
          <h3 className="text-xl font-semibold mb-3">Main Office</h3>
          <p className="mb-1">📍 Hubli, Karnataka, India</p>
          <p className="mb-1">
            📧{" "}
            <a
              href="mailto:contact@aultum.com"
              className="text-green-600 underline"
            >
              contact@aultum.com
            </a>
          </p>
          <p>
            📞{" "}
            <a href="tel:08085758575" className="text-green-600 underline">
              080 8575 8575
            </a>
          </p>
        </div>

        {/* Call To Action */}
        <div>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Geographics);
