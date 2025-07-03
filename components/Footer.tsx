"use client";

import { motion } from "framer-motion";
import { Camera, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                  <Camera className="h-5 w-5 text-white" />
                </div>
                <div className="text-xl font-serif tracking-tight">
                  Golden Photo Studio
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Capturing life's precious moments since 1980 in Kasia,
                Kushinagar.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-500 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>Golden Photo Studio, Kasia, Kushinagar</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span>+91 9336981925</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-500 mb-4 md:mb-0">
              © {currentYear} Golden Photo Studio
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <div className="text-gray-500 mt-4 md:mt-0">
              Crafted by{" "}
              <a
                href="https://sufiweb.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                Muhammad Sufiyan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
