"use client";

import { useState, useRef, memo, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";

const Portfolio = memo(() => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = useMemo(
    () => ["All", "Weddings", "Portraits", "Events", "Products", "Studio Work"],
    [],
  );

  const portfolioItems = [
    {
      id: 1,
      category: "Weddings",
      image: "https://i.ibb.co/4wYdZXM7/1-7.jpg",
      title: "Romantic Wedding Ceremony",
      likes: 234,
      views: 1200,
    },
    {
      id: 2,
      category: "Portraits",
      image: "https://i.ibb.co/nKnZKZ2/DSC-0008ddq.jpg",
      title: "Professional Portrait",
      likes: 187,
      views: 890,
    },
    {
      id: 3,
      category: "Fashion",
      image: "https://i.ibb.co/C35sy903/JYOTI-1-1-copy.jpg",
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
      image: "https://i.ibb.co/pj3gzCMy/00.jpg",
      title: "Corporate Event",
      likes: 98,
      views: 540,
    },
    {
      id: 6,
      category: "Weddings",
      image: "https://i.ibb.co/rGdY87Pf/1-6.jpg",
      title: "Wedding Reception",
      likes: 201,
      views: 980,
    },
    {
      id: 7,
      category: "Portraits",
      image: "https://i.ibb.co/xKb1zBP9/DSC-0043.jpg",
      title: "Family Portrait",
      likes: 145,
      views: 720,
    },
    {
      id: 8,
      category: "Fashion",
      image: "https://i.ibb.co/qLQgB5sw/Untitled-design.png",
      title: "Studio Fashion",
      likes: 278,
      views: 1300,
    },
    {
      id: 9,
      category: "Portraits",
      image: "https://i.ibb.co/sdGbh6NX/DSC-0569.jpg",
      title: "Family Portrait",
      likes: 145,
      views: 720,
    },
    {
      id: 11,
      category: "Portraits",
      image: "https://i.ibb.co/2YymgRFp/DSC-0036.jpg",
      title: "Creative Portrait",
      likes: 167,
      views: 780,
    },

    {
      id: 10,
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      title: "Sunset Silhouette",
      likes: 189,
      views: 830,
    },
  ];

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section ref={ref} id="portfolio" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-2">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4" />
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of weddings, portraits, events,
            products, and studio work that showcase our timeless style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm border transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-amber-600 text-white border-amber-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Bottom Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4">
                    <h3 className="text-lg font-semibold font-serif mb-1">
                      {item.title}
                    </h3>
                    <div className="flex justify-between text-sm text-gray-700">
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {item.views}
                      </span>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-white text-gray-800 px-3 py-1 text-xs rounded-full border border-gray-200">
                    {item.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-amber-600 text-amber-600 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-colors duration-300">
            View Complete Portfolio
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
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
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default Portfolio;
