"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const shootTypes = [
    "Wedding Photography",
    "Event Photography",
    "Portrait Session",
    "Product Photography",
    "Studio Shoot",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:8080/api/v1/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Booking submission failed");

      setIsSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          shootType: "",
          date: "",
          time: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <>
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm w-full text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Thank you for booking with Golden Photo Studio. We’ll reach out
              shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      <section
        ref={ref}
        id="booking"
        className="py-24 min-h-[120vh] bg-white flex items-start justify-center"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              Book Your Session
            </h2>
            <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Schedule your photography session with Golden Photo Studio.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    <User className="inline w-4 h-4 text-amber-600 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    <Mail className="inline w-4 h-4 text-amber-600 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  <Phone className="inline w-4 h-4 text-amber-600 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 9876543210"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Shoot Type *
                  </label>
                  <select
                    name="shootType"
                    value={formData.shootType}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                  >
                    <option value="">Choose shoot type</option>
                    {shootTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    <Calendar className="inline w-4 h-4 text-amber-600 mr-2" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  <Clock className="inline w-4 h-4 text-amber-600 mr-2" />
                  Preferred Time *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                />
              </div>

              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  <MessageSquare className="inline w-4 h-4 text-amber-600 mr-2" />
                  Special Requests
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                  placeholder="Tell us anything specific..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="mt-6 w-full py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingForm;
