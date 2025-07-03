"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Eye, Heart, Share2, ZoomIn } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    "All",
    "Weddings",
    "Portraits",
    "Events",
    "Fashion",
    "Nature",
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "Weddings",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
      title: "Romantic Wedding Ceremony",
      likes: 234,
      views: 1200,
    },
    {
      id: 2,
      category: "Portraits",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
      title: "Professional Portrait",
      likes: 187,
      views: 890,
    },
    {
      id: 3,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070",
      title: "Fashion Editorial",
      likes: 312,
      views: 1500,
    },
    {
      id: 4,
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      title: "Mountain Landscape",
      likes: 156,
      views: 670,
    },
    {
      id: 5,
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
      title: "Corporate Event",
      likes: 98,
      views: 540,
    },
    {
      id: 6,
      category: "Weddings",
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070",
      title: "Wedding Reception",
      likes: 201,
      views: 980,
    },
    {
      id: 7,
      category: "Portraits",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2076",
      title: "Family Portrait",
      likes: 145,
      views: 720,
    },
    {
      id: 8,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0b56ba896fc?q=80&w=2070",
      title: "Studio Fashion",
      likes: 278,
      views: 1300,
    },
    {
      id: 9,
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      title: "Sunset Silhouette",
      likes: 189,
      views: 830,
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-20 bg-black text-white overflow-hidden"
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/20 rounded-full mb-6"
          >
            <span className="text-amber-400 font-semibold">Our Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Visual
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our diverse collection of photographic artistry across
            different styles and moments.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-white/80 text-sm">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{item.views}</span>
                          </div>
                        </div>
                        <ZoomIn className="h-5 w-5 text-white/80" />
                      </div>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                    <span className="text-xs text-white font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Complete Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {portfolioItems.find((item) => item.id === selectedImage) && (
                <Image
                  src={
                    portfolioItems.find((item) => item.id === selectedImage)!
                      .image
                  }
                  alt={
                    portfolioItems.find((item) => item.id === selectedImage)!
                      .title
                  }
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
