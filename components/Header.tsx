"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-lg border-b border-gray-300"
            : "bg-white/20 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <div className="w-12 h-12 border border-gray-300 overflow-hidden rounded-lg">
                  <Image
                    src="https://i.ibb.co/gZ8bx8R2/logo1.png"
                    alt="Golden Photo Studio Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                    quality={85}
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            aria-label="Main navigation"
            role="navigation"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-gray-600 transition-colors duration-300 font-medium uppercase text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+919336981925"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 text-gray-800 hover:text-gray-600 transition-colors duration-300 border border-gray-300 font-medium"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Call Now</span>
            </motion.a>
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Book Session
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-50 p-2 border border-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </motion.div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden border-t border-gray-300 ${
                scrolled ? "bg-white" : "bg-white/20 backdrop-blur-md"
              }`}
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 text-lg font-medium py-2 uppercase tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="pt-4 border-t border-gray-300 space-y-3"
                >
                  <a
                    href="tel:+919336981925"
                    className="block w-full text-center px-6 py-3 border border-gray-300 text-gray-800 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Call Now
                  </a>
                  <a
                    href="#booking"
                    className="block w-full text-center px-6 py-3 bg-black text-white font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Session
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
