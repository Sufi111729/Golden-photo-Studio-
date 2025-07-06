"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          !isHomePage || scrolled
            ? "bg-white shadow-lg border-b border-gray-300"
            : "bg-white/95 backdrop-blur-md"
        }`}
        role="banner"
      >
        <nav
          className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8"
          role="navigation"
          aria-label="Main site navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Golden Photo Studio - Professional Photography Services in Kasia"
          >
            <div className="relative">
              <div className="w-12 h-12 border border-gray-300 overflow-hidden rounded-lg">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F6efebc511b8f444288d493a58e0a6eb7%2F9270b234fb324a098964be4203cc18e8?format=webp&width=48"
                  alt="Golden Photo Studio logo - Professional photography services in Kasia"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                  quality={85}
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-gray-600 transition-colors duration-300 font-medium uppercase text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 rounded"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919140477247"
              className="flex items-center space-x-2 px-4 py-2 text-gray-800 hover:text-gray-600 transition-colors duration-300 border border-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 rounded"
              aria-label="Call Golden Photo Studio at +91 91404 77247"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm">Call Now</span>
            </a>
            <a
              href="#booking"
              className="px-6 py-2.5 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded"
              aria-label="Book a photography session with Golden Photo Studio"
            >
              Book Session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className={`lg:hidden border-t border-gray-300 ${
                !isHomePage || scrolled
                  ? "bg-white"
                  : "bg-white/95 backdrop-blur-md"
              }`}
              role="menu"
              aria-labelledby="mobile-menu-button"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 text-lg font-medium py-2 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                  </a>
                ))}

                <div className="pt-4 border-t border-gray-300 space-y-3">
                  <a
                    href="tel:+919140477247"
                    className="block w-full text-center px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Call Golden Photo Studio at +91 91404 77247"
                  >
                    Call Now
                  </a>
                  <a
                    href="#booking"
                    className="block w-full text-center px-6 py-3 bg-gray-900 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Book a photography session with Golden Photo Studio"
                  >
                    Book Session
                  </a>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" aria-hidden="true"></div>
    </>
  );
};

export default Header;
