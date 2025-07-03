"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Calendar,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Studio Address",
      details: [
        "Pandey Katra in front of",
        "Govt Junior High School",
        "Main Road, Gola Bazar Kasia",
        "District Kushinagar",
        "Pincode 274402, Uttar Pradesh India",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 9336981925", "+91 9140477247"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["goldenkasia@gmail.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sun: 10AM – 8PM", "Wednesday: By Appointment Only"],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
  ];

  return (
    <section ref={ref} id="contact" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
            📞 Contact Us
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Contact us to discuss your
            photography needs.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-xl"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                  {info.title === "Studio Address" ? (
                    <a
                      href="https://maps.app.goo.gl/1dZMUeJcEoPTT31k9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-amber-600 transition-colors block"
                    >
                      {info.details.map((detail, i) => (
                        <span key={i} className="block">
                          {detail}
                        </span>
                      ))}
                    </a>
                  ) : (
                    info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid sm:grid-cols-2 gap-4 mb-8"
          >
            <motion.a
              href="tel:+919336981925"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full p-4 bg-green-600 text-white rounded-lg text-center font-medium hover:bg-green-700 transition"
            >
              📞 Call Now
            </motion.a>
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full p-4 bg-amber-500 text-white rounded-lg text-center font-medium hover:bg-amber-600 transition"
            >
              <Calendar className="inline h-5 w-5 mr-2" />
              Schedule Consultation
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 border border-gray-200 rounded-xl p-8 bg-gray-50"
        >
          <div className="text-center">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-10 w-10 text-amber-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">
              Visit Our Studio
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our studio is located at PWV8+QQ Kasia Bazaar, Uttar Pradesh,
              easily accessible from the main road in Kasia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.app.goo.gl/1dZMUeJcEoPTT31k9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
              >
                📍 Get Directions
              </a>
              <a
                href="https://maps.app.goo.gl/1dZMUeJcEoPTT31k9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
              >
                📍 View on Map
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
