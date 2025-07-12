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
      name: "Shweta Yadav",
      role: "Wedding Client",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXZTbeKv2HYjxxzEnjaQzTj1CZKOWnXRtzAg4UMrrDfYDtmhwE=w90-h90-p-rp-mo-ba3-br100",
      content: "It's amazing. The team is very professional and friendly. They made our wedding memories unforgettable. The photos are amazing and the event programs are very helpful.",
      rating: 5,
      location: "Wedding Photography Client",
    },
    {
      id: 2,
      name: "Ayush _0057",
      role: "Wedding Couple",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjW5R2UrlIRB_QmR0LG-JycLpe3_jjcsePB4nN1LvAyWdGWD1mWEqw=w90-h90-p-rp-mo-br100",
      content: "Event programs are very helpful and the photos are amazing. The team is very professional and friendly. They made our wedding memories unforgettable.",
      rating: 5,
      location: "Wedding Photography Clients",
    },
    {
      id: 3,
      name: "Mohd Saqib",
      role: "Event Client",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjW8wUjcXYbUdBsATRCTTf87JQyMy_W_pyjIyf9etzBMnBpuCB6B=w90-h90-p-rp-mo-br100",
      content: "The experience was amazing. The people are very helpful. Their work was quick and perfect. Must visit/hire them for any kind of events.",
      rating: 5,
      location: "Google Review • Event Photography",
    },
    {
      id: 4,
      name: "Prashant Kumar",
      role: "Local Guide",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjU8Xy8Ug0M-FwMKUfoqXsnNpz3nUypS26jtWqqz83AB30A2keg7=w90-h90-p-rp-mo-ba2-br100",
      content: "Great photography in Kasia Kushinagar and well trained photographer. Best experience you will get here. One stop for all your work.",
      rating: 5,
      location: "Google Review • Portrait Session",
    },
    {
      id: 5,
      name: "Prince Vlogs",
      role: "Local Guide",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUHJWuw4-0UUXA6Gv0ex1DsJ9MeQvjmg4cKb3Lm_20_dvCY9Oo=w45-h45-p-rp-mo-br100",
      content: "These photos are made very good, this is Kasia's no.1 photo editor and photographer. I have been taking photos from here for the last 5 years, and I am very happy with their work.",
      rating: 5,
      location: "Google Review • Portrait Session",
    },
    {
      id: 5,
      name: "Ranjit Singh",
      role: "Local Guide",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWPcf-wY6B6YBIF_-PedVc0Z4YCw6u0t7r_wSIwS3yAIEcmoCtU=w90-h90-p-rp-mo-br100",
      content: "Hi I am Atul.  Golden studio is the best studio in Kasia Kushinagar. I have been taking photos from here for the last 5 years, and I am very happy with their work.",
      rating: 5,
      location: "Google Review • Portrait Session",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      id="testimonials"
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
            Client Testimonials
          </h2>
          <div className="w-20 md:w-24 h-0.5 bg-amber-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our valued clients about their experiences with Golden Photo Studio.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image Section */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-amber-100 rounded-full"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Quote className="absolute -top-2 -right-2 h-8 w-8 text-amber-600 bg-white rounded-full p-1" />
                </motion.div>

                {/* Content Section */}
                <div className="space-y-4 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-1">
                    <h4 className="text-lg font-medium text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-amber-600 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-500 hover:text-amber-600 transition-colors duration-200 border border-gray-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-500 hover:text-amber-600 transition-colors duration-200 border border-gray-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-amber-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { number: "45+", label: "Years Experience" },
            { number: "100%", label: "Satisfaction" },
            { number: "5000+", label: "Happy Clients" },
            { number: "Since 1980", label: "Trusted Service" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-white rounded-lg border border-gray-100"
            >
              <div className="text-2xl md:text-3xl font-serif text-amber-600 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;