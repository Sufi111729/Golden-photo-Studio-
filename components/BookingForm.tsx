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
  Send,
  CheckCircle,
  Star,
} from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    date: "",
    time: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const shootTypes = [
    "Wedding Photography",
    "Portrait Session",
    "Event Photography",
    "Corporate Session",
    "Product Photography",
    "Creative Shoot",
    "Other",
  ];

  const budgetRanges = [
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        shootType: "",
        date: "",
        time: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section
        ref={ref}
        id="booking"
        className="py-20 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Booking Request Sent!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for choosing Golden Photo Studio! We'll get back to you
              within 24 hours to discuss your photography needs.
            </p>
            <div className="flex items-center justify-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="booking"
      className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6"
          >
            <span className="text-amber-600 font-semibold">
              Book Your Session
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Create
            <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to capture your special moments? Fill out the form below and
            we'll create a custom photography experience just for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <User className="inline h-4 w-4 mr-2 text-amber-500" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Mail className="inline h-4 w-4 mr-2 text-amber-500" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="mt-6"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Phone className="inline h-4 w-4 mr-2 text-amber-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </motion.div>
                </div>

                {/* Session Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Session Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Type of Shoot *
                      </label>
                      <select
                        name="shootType"
                        value={formData.shootType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select a service</option>
                        {shootTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.0 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Calendar className="inline h-4 w-4 mr-2 text-amber-500" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.1 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Clock className="inline h-4 w-4 mr-2 text-amber-500" />
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <MessageSquare className="inline h-4 w-4 mr-2 text-amber-500" />
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Share your vision, location preferences, special requirements, or any questions you have..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Booking Request</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Process Card */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <div className="space-y-4">
                {[
                  "Initial consultation call",
                  "Custom package design",
                  "Professional photo session",
                  "Expert editing & retouching",
                  "Gallery delivery & prints",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 text-amber-500" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5 text-amber-500" />
                  <span>hello@goldenphotostudio.com</span>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Prefer to talk? Give us a call for immediate assistance.
                  </p>
                  <motion.a
                    href="tel:+15551234567"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors duration-300"
                  >
                    Call Now
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Guarantee Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  100% Satisfaction Guarantee
                </h3>
                <p className="text-gray-300 text-sm">
                  We're committed to delivering exceptional results. If you're
                  not completely satisfied, we'll make it right.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
