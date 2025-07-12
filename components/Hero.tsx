"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

const Hero = memo(function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://i.ibb.co/qLQgB5sw/Untitled-design.png"
          alt="Golden Photo Studio Background"
          fill
          className="object-cover"
          priority
          quality={50}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknywtgFRZzGBBCZgtIGCGHOHQqjvXhgPU/Rf8ANpwWCmKr4SL34AQXhJOBkDbyOV0UXeH2xY4/NyPp4nIXWkhcMnvvwGbE0VWFGlG4VmxmIiWqGLAXMWdfQvIJ5PjE2CQH5+H0HKe2BdpgVUCg8wGpNpYQnUP9BSAYfUvUt6sKhNOC7v8AW7wgVVMk0Ey7A="
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-block border-2 border-white px-6 py-2 mb-8"
            role="banner"
            aria-label="Established 1980"
          >
            <span className="text-white font-medium uppercase tracking-widest text-sm">
              Est. 1980 • Professional Photography
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
            id="main-heading"
            aria-describedby="main-subtitle"
          >
            <span className="block">Emotions through</span>
            <span className="block italic">photographs</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed font-light"
            id="main-subtitle"
            role="text"
          >
            Professional Photography Services for Every Occasion
          </motion.p>

          {/* Hero Section Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            role="text"
            aria-label="Golden Photo Studio description"
          >
            At Golden Photo Studio we turn moments into timeless memories with
            stunning photography. Whether stunning photography. Whether
            it&apos;s a wedding, birthday, product shoot, or corporate event —
            we&apos;ve got you covered.
          </motion.p>

          {/* CTA Buttons */}
          <nav
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            aria-label="Main navigation actions"
            role="navigation"
          >
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-medium text-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Book a photography session"
              role="button"
            >
              Book a Session
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="View our photography portfolio"
              role="button"
            >
              View Portfolio
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Contact Golden Photo Studio"
              role="button"
            >
              Contact Us
            </motion.a>
          </nav>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "45+", label: "Years Experience" },
              { number: "Since 1980", label: "Serving with Trust" },
              { number: "100%", label: "Customer Satisfaction" },
              { number: "All Events", label: "Coverage" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center p-6 border border-white/30"
              >
                <div className="text-3xl md:text-4xl font-serif text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
});

export default Hero;
