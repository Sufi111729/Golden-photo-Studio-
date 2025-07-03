"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Users,
  Camera,
  Package,
  Building,
  Palette,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description:
        "Capture your love story with cinematic elegance and timeless romance.",
      price: "Starting at $2,500",
      features: [
        "Full day coverage",
        "500+ edited photos",
        "Online gallery",
        "Print release",
      ],
      popular: true,
    },
    {
      icon: Users,
      title: "Portrait Sessions",
      description:
        "Professional headshots and family portraits that showcase your personality.",
      price: "Starting at $300",
      features: [
        "1-2 hour session",
        "25+ edited photos",
        "Multiple outfits",
        "Retouching included",
      ],
      popular: false,
    },
    {
      icon: Camera,
      title: "Event Photography",
      description:
        "Document your special occasions with style and professionalism.",
      price: "Starting at $500",
      features: [
        "Event coverage",
        "100+ photos",
        "Same day preview",
        "Group shots",
      ],
      popular: false,
    },
    {
      icon: Package,
      title: "Product Photography",
      description:
        "Showcase your products with stunning commercial photography.",
      price: "Starting at $200",
      features: [
        "Studio lighting",
        "Multiple angles",
        "Background options",
        "Quick turnaround",
      ],
      popular: false,
    },
    {
      icon: Building,
      title: "Corporate Sessions",
      description:
        "Professional business photography for your company and team.",
      price: "Starting at $400",
      features: [
        "Team headshots",
        "Office photography",
        "Brand consistency",
        "Bulk pricing",
      ],
      popular: false,
    },
    {
      icon: Palette,
      title: "Creative Shoots",
      description:
        "Artistic and conceptual photography for unique creative projects.",
      price: "Starting at $350",
      features: [
        "Concept development",
        "Styling guidance",
        "Creative editing",
        "Artistic vision",
      ],
      popular: false,
    },
  ];

  return (
    <section
      ref={ref}
      id="services"
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
            <span className="text-amber-600 font-semibold">Our Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Photography
            <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional photography services tailored to capture your most
            important moments with artistic excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative p-8 rounded-2xl transition-all duration-300 ${
                service.popular
                  ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-2xl"
                  : "bg-white hover:bg-gray-50 text-gray-900 shadow-lg hover:shadow-2xl border border-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  service.popular
                    ? "bg-white/20 backdrop-blur-sm"
                    : "bg-gradient-to-br from-amber-400 to-orange-500"
                }`}
              >
                <service.icon
                  className={`h-8 w-8 ${service.popular ? "text-white" : "text-white"}`}
                />
              </motion.div>

              {/* Content */}
              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-3 ${service.popular ? "text-white" : "text-gray-900"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed mb-4 ${service.popular ? "text-white/90" : "text-gray-600"}`}
                >
                  {service.description}
                </p>
                <div
                  className={`text-xl font-bold mb-6 ${service.popular ? "text-white" : "text-amber-600"}`}
                >
                  {service.price}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + index * 0.1 + featureIndex * 0.1,
                    }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle
                      className={`h-5 w-5 ${service.popular ? "text-white" : "text-green-500"}`}
                    />
                    <span
                      className={`text-sm ${service.popular ? "text-white/90" : "text-gray-600"}`}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  service.popular
                    ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    : "bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:shadow-lg"
                }`}
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every story is unique. Let's create a custom photography package
            that perfectly fits your vision and budget.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
