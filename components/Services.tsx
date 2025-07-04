"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo, useMemo } from "react";
import {
  Heart,
  Users,
  Camera,
  Package,
  Palette,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = useMemo(
    () => [
      {
        icon: Heart,
        title: "Wedding Photography",
        description:
          "Capture your love story with elegant pre-wedding, candid, and traditional photography.",
        price: "Starting at ₹15,000",
        features: [
          "Pre-wedding shoots",
          "Candid photography",
          "Traditional poses",
          "Album design",
        ],
        popular: true,
      },
      {
        icon: Camera,
        title: "Event Photography",
        description:
          "Professional coverage for birthdays, corporate events, and special occasions.",
        price: "Starting at ₹8,000",
        features: [
          "Birthday parties",
          "Corporate events",
          "Baby showers",
          "Special occasions",
        ],
        popular: false,
      },
      {
        icon: Users,
        title: "Portrait Sessions",
        description:
          "Timeless individual, family, and maternity portraits in our studio.",
        price: "Starting at ₹5,000",
        features: [
          "Individual portraits",
          "Family photography",
          "Kids photography",
          "Maternity shoots",
        ],
        popular: false,
      },
      {
        icon: Package,
        title: "Product Photography",
        description:
          "High-quality product images for e-commerce and marketing materials.",
        price: "Starting at ₹3,000",
        features: [
          "E-commerce photos",
          "Catalog photography",
          "Social media content",
          "Product showcasing",
        ],
        popular: false,
      },
      {
        icon: Palette,
        title: "Studio Shoots",
        description:
          "Artistic studio photography with professional lighting and backdrops.",
        price: "Starting at ₹10,000",
        features: [
          "Creative concepts",
          "Professional headshots",
          "Model portfolios",
          "Artistic direction",
        ],
        popular: false,
      },
    ],
    [],
  );

  return (
    <section ref={ref} id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2
            className="text-3xl md:text-4xl font-serif text-gray-800 mb-3 md:mb-4 tracking-wide"
            id="services-heading"
          >
            Our Photography Services
          </h2>
          <div
            className="w-20 md:w-24 h-0.5 bg-amber-600 mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          ></div>
          <p
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            aria-describedby="services-heading"
          >
            Professional photography services tailored to your unique needs,
            delivered with timeless elegance and technical excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-6 md:p-8 rounded-lg transition-all duration-300 ${
                service.popular
                  ? "bg-amber-50 border-2 border-amber-400 shadow-lg"
                  : "bg-white border border-gray-200 hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="absolute -top-3 -right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  service.popular ? "bg-amber-600" : "bg-gray-800"
                }`}
              >
                <service.icon className="h-5 w-5 text-white" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3
                  className={`text-xl font-serif font-medium mb-2 ${
                    service.popular ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    service.popular ? "text-gray-700" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
                <div
                  className={`text-lg font-medium mb-4 ${
                    service.popular ? "text-amber-700" : "text-gray-700"
                  }`}
                >
                  {service.price}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.1 + featureIndex * 0.05,
                    }}
                    className="flex items-start space-x-2"
                  >
                    <CheckCircle
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        service.popular ? "text-amber-600" : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`text-xs ${
                        service.popular ? "text-gray-700" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button - Now a direct call link */}
              <motion.a
                href="tel:+919140477247"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded text-sm font-medium transition-all duration-300 ${
                  service.popular
                    ? "bg-amber-600 text-white hover:bg-amber-700"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                <span>Call Now: +91 9140477247</span>
                <ArrowRight className="h-3 w-3" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA - Also converted to call link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gray-900 rounded-xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3 md:mb-4">
            Need a Custom Package?
          </h3>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Every story is unique. Call us directly to discuss your custom
            photography needs.
          </p>
          <motion.a
            href="tel:+919140477247"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition-colors duration-300 inline-block"
          >
            Call: +91 9140477247
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

export default Services;
