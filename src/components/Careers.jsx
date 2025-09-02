import React, { memo } from "react";

// Centralized constants
const CAREERS_DATA = {
  heading: "Careers at Our Company",
  subtext:
    "We’re always on the lookout for passionate people to join our journey. Currently, we don’t have any open positions — but feel free to connect with us.",
  image: {
    src: "https://cdn-icons-png.flaticon.com/512/4076/4076505.png",
    alt: "No jobs available illustration",
  },
  callToAction: {
    text: "You can share your resume with us for future opportunities:",
    button: {
      label: "Send Resume",
      href: "mailto:hr@aultum.com",
    },
  },
};

const Careers = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-16"
      aria-labelledby="careers-heading"
    >
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h1
          id="careers-heading"
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          {CAREERS_DATA.heading}
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 mb-10">{CAREERS_DATA.subtext}</p>

        {/* Placeholder Image / Illustration */}
        <div className="flex justify-center mb-10">
          <img
            src={CAREERS_DATA.image.src}
            alt={CAREERS_DATA.image.alt}
            className="w-40 h-40 opacity-80"
            loading="lazy"
          />
        </div>

        {/* Call to Action */}
        <p className="text-gray-700 mb-6">{CAREERS_DATA.callToAction.text}</p>
        <a
          href={CAREERS_DATA.callToAction.button.href}
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
        >
          {CAREERS_DATA.callToAction.button.label}
        </a>
      </div>
    </section>
  );
};

export default memo(Careers);