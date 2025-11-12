"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdSend } from "react-icons/md";
import { FaWhatsapp, FaUser, FaEnvelope } from "react-icons/fa";
import Aurora from "./aurora/Aurora";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "809d9d53-7373-43f2-9521-850384e5fe67");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setForm({ name: "", email: "", message: "" });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-black flex items-center justify-center px-4 py-12"
      id="contact"
    >
      <div className="absolute inset-0 ">
        <Aurora
          colorStops={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-4xl grid md:grid-cols-2 rounded-2xl overflow-hidden"
      >
        {/* Contact Information Side */}
        <div className="bg-black/50 backdrop-blur-lg border-r border-white/20 p-10 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 text-blue-100">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you. Fill out the form and I&apos;ll get back to you as
            soon as possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <MdEmail className="mr-4 text-2xl" />
              <a
                href="mailto:nnicholasevan@gmail.com"
                className="hover:text-blue-200 transition-colors"
              >
                nnicholasevan@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="mr-4 text-2xl" />
              <a
                href="https://api.whatsapp.com/send/?phone=6281236155717&text&app_absent=0&lang=en"
                className="hover:text-blue-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                +62 81236155717
              </a>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white/60 backdrop-blur-lg p-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-700" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="What's your name?"
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  autoComplete="name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-700" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What would you like to discuss?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                autoComplete="off"
              />
            </div>

            {submitStatus === "success" && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                Oops! Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center px-4 py-3 bg-black text-white font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? (
                <>Sending...</>
              ) : (
                <>
                  <MdSend className="mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
