import React, { useState, useCallback, memo } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    country: "",
    message: "",
    terms: false,
    updates: false,
  });

  // useCallback prevents re-creation of handlers on each render
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      // integrate API call here 
    },
    [formData]
  );

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Every day, we harness the power of{" "}
          <span className="text-blue-600">AI, cloud</span>, and{" "}
          <span className="text-blue-600">digital engineering</span> to help
          businesses reimagine growth, resilience, and sustainability.
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Ready to transform your vision into reality? Let’s get started.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 text-left"
        >
          {/* Grid Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "First Name",
                name: "firstName",
                type: "text",
                required: true,
              },
              {
                label: "Last Name",
                name: "lastName",
                type: "text",
                required: true,
              },
              {
                label: "Work Email",
                name: "email",
                type: "email",
                required: true,
              },
              { label: "Job Title", name: "jobTitle", type: "text" },
              { label: "Company", name: "company", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-gray-700 font-medium mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            ))}

            {/* Country */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select a country</option>
                {["India"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Checkboxes */}
          <div className="mt-6 space-y-3">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <span className="text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Conditions
                </a>
              </span>
            </label>

            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="updates"
                checked={formData.updates}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-gray-600">
                I consent to receive updates and communications.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full md:w-auto bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default memo(ContactSection);