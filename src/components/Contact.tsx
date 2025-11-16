import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    emailjs
      .send(
        "service_uxa96dk", // <-- EmailJS Service ID
        "template_a2ws9vb", // <-- EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "diycU0j8sAwpeU237" // <-- EmailJS Public Key
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch(() => {
        setError("There was an error submitting your message. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6 md:px-20">
      <section id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-blue-400">Get in</span> Touch
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Have questions or a project in mind? Reach out to us using the form below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white h-32"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 transition font-semibold py-3 rounded-lg disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <p className="text-green-400 text-center mt-4 animate-pulse">
              Message sent successfully!
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;
