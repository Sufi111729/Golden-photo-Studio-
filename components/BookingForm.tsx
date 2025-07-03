"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

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

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

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
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section
        ref={ref}
        id="booking"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-24 h-24 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-serif text-gray-900 mb-4">
              Booking Request Received
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for choosing Golden Photo Studio. We'll contact you within 24 hours to confirm your booking details.
            </p>
            <div className="text-sm text-gray-500">
              For immediate assistance, please call +91 9336981925
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
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-3 md:mb-4 tracking-wide">
            Book Your Session
          </h2>
          <div className="w-20 md:w-24 h-0.5 bg-amber-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete the form below to schedule your photography session with Golden Photo Studio.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-serif text-gray-800 mb-6 pb-2 border-b border-gray-200">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-2 text-amber-600" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-2 text-amber-600" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-2 text-amber-600" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors duration-300"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                {/* Session Details */}
                <div>
                  <h3 className="text-xl font-serif text-gray-800 mb-6 pb-2 border-b border-gray-200">
                    Session Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Shoot *
                      </label>
                      <select
                        name="shootType"
                        value={formData.shootType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors duration-300"
                      >
                        <option value="">Select a service</option>
                        {shootTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-2 text-amber-600" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-2 text-amber-600" />
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-2 text-amber-600" />
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors duration-300"
                    placeholder="Any special requirements or notes for your session..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Submit Booking Request"
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            {/* Contact Card */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">+91 9336981925</div>
                    <div className="text-sm font-medium text-gray-700">+91 9140477247</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm font-medium text-gray-700">goldenkasia@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-serif text-gray-800 mb-4">
                Studio Hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Monday - Saturday", hours: "9:00 AM - 8:00 PM" },
                  { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-sm text-gray-700">{item.day}</span>
                    <span className="text-sm font-medium text-gray-700">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Card */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <h3 className="text-xl font-serif mb-4">Our Process</h3>
              <div className="space-y-4">
                {[
                  "1. Initial consultation",
                  "2. Session planning",
                  "3. Photo session",
                  "4. Image selection",
                  "5. Final delivery",
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-amber-400 text-sm">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;