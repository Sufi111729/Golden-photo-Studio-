"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo, useMemo } from "react";
import Image from "next/image";
import { Camera, Award, Users, Heart } from "lucide-react";

const About = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const achievements = [
    { icon: Award, title: "Est. 1980", desc: "45+ Years of Excellence" },
    { icon: Users, title: "Trusted", desc: "Serving Generations" },
    { icon: Heart, title: "Passionate", desc: "Artistic Vision" },
    { icon: Camera, title: "Professional", desc: "Studio Quality" },
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl font-serif text-gray-800 mb-4 tracking-wide"
            id="about-heading"
          >
            The Golden Photo Studio Legacy
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Preserving memories with timeless elegance since 1980 in Kasia,
            Kushinagar.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg border-8 border-white">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F6a0eea5dfe244aea83b500ef259d96f1%2F400d6f30944a4785a41aac86473ec4e1?format=webp&width=800"
                alt="Golden Photo Studio Owner - Professional Photographer"
                fill
                className="object-center object-cover grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                quality={60}
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknywtgFRZzGBBCZgtIGCGHOHQqjvXhgPU/Rf8ANpwWCmKr4SL34AQXhJOBkDbyOV0UXeH2xY4/NyPp4nIXWkhcMnvvwGbE0VWFGlG4VmxmIiWqGLAXMWdfQvIJ5PjE2CQH5+H0HKe2BdpgVUCg8wGpNpYQnUP9BSAYfUvUt6sKhNOC7v8AW7wgVVMk0Ey7A="
              />
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-lg border border-gray-100 w-64">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Since 1980</h4>
                  <p className="text-sm text-gray-500">Family Owned</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h3 className="text-3xl font-serif text-gray-800 mb-6">
              Our Photographic Journey
            </h3>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Founded in 1980, Golden Photo Studio has been the trusted choice
                for families in Kasia and beyond. We specialize in capturing
                life's most precious moments with a blend of traditional
                craftsmanship and modern techniques.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our studio takes pride in creating heirloom-quality photographs
                that stand the test of time. Each image is carefully composed
                and processed to preserve your memories with the dignity they
                deserve.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-amber-50 p-3 rounded-full">
                    <achievement.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-500">{achievement.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-3 bg-amber-600 text-white font-medium rounded-sm shadow-md hover:bg-amber-700 transition-colors duration-300"
            >
              View Our Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default About;
