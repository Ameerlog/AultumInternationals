import React, { useState, useCallback, useMemo } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes (memoized for performance)
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Reset form fields
  const resetForm = useCallback(() => {
    setFormData({ name: "", email: "", message: "" });
  }, []);

  // Submit form data
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await fetch(
          "https://formcarry.com/s/YOUR_FORMCARRY_ID",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          alert("✅ Message sent successfully!");
          resetForm();
        } else {
          alert("⚠️ Something went wrong. Try again!");
        }
      } catch (error) {
        alert("❌ Error sending message. Please try later.");
      } finally {
        setLoading(false);
      }
    },
    [formData, resetForm]
  );

  // Memoized map iframe
  const mapEmbed = useMemo(
    () => (
      <iframe
        title="company-location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.2207563727347!2d75.12367257326366!3d15.361485957999486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d736cf492201%3A0x9523e2cb14e7e318!2sMarvel%20Artiza!5e1!3m2!1sen!2sin!4v1756442059945!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="rounded-xl shadow-lg"
      ></iframe>
    ),
    []
  );

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Company Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            We’d love to hear from you. Reach out to us anytime!
          </p>
          <div className="text-gray-700 space-y-3">
            <p>
              <strong>📍 Address:</strong> 3rd floor, Marvel Artiza, Jayanagar,
              Vidya Nagar, Dharwad, Hubballi, Karnataka 580021.
            </p>
            <p>
              <strong>✉️ Email:</strong>{" "}
              <a
                href="mailto:contact@aultum.com"
                className="text-green-600 hover:underline"
              >
                contact@aultum.com
              </a>
            </p>
            <p>
              <strong>📞 Phone:</strong>{" "}
              <a
                href="tel:+918085758575"
                className="text-green-600 hover:underline"
              >
                080 8575 8575
              </a>
            </p>
          </div>

          {/* Map */}
          <div className="mt-8">{mapEmbed}</div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="sr-only">Your Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </label>

            <label className="block">
              <span className="sr-only">Your Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </label>

            <label className="block">
              <span className="sr-only">Your Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              } text-white font-medium py-3 rounded-lg shadow transition`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;