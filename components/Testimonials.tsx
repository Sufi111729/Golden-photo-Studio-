"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      id: 1,
      name: "Muhammad Sufiyan (SUFI)",
      role: "Local Guide",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
      content:
        "Good photography. Great experience working with Golden Photo Studio.",
      rating: 5,
      location: "Google Review • 2 years ago",
    },
    {
      id: 2,
      name: "GAMING ZONE",
      role: "Verified Customer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
      content:
        "This studio is very good, you can trust on bhaiya who work here. He is very kind and good. Just come for any work related to photo, print out, videos editing. 👍☺️",
      rating: 5,
      location: "Google Review • 1 month ago",
    },
    {
      id: 3,
      name: "MOHD SAQIB",
      role: "Event Client",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
      content:
        "The experience was amazing. The people are very helpful. Their work was quick and perfect. Must visit/hire them for any kind of events. They gave me a good quality picture.",
      rating: 5,
      location: "Google Review • 8 months ago",
    },
    {
      id: 4,
      name: "Prashant Kumar",
      role: "Local Guide",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070",
      content:
        "Great photography in kasia kushinagar and well trained photographer. Best experience you will get here. One stop for all your work.",
      rating: 5,
      location: "Google Review • 11 months ago",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
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
            <span className="text-amber-600 font-semibold">Client Stories</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read the experiences of our satisfied clients who trusted us to
            capture their special moments.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Image Section */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-20"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Quote className="h-8 w-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <div className="md:col-span-2 space-y-6">
                  {/* Stars */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center space-x-1"
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        >
                          <Star className="h-6 w-6 text-amber-400 fill-current" />
                        </motion.div>
                      ),
                    )}
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed italic"
                  >
                    "{testimonials[currentTestimonial].content}"
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-amber-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-600 hover:text-amber-500 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-600 hover:text-amber-500 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12 space-x-3"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "100%", label: "Five Star Reviews" },
            { number: "50+", label: "Happy Clients" },
            { number: "4+", label: "Google Reviews" },
            { number: "8+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
