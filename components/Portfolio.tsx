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
    // ... (keep your existing portfolioItems array)
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
      id: 10,
      category: "Portraits",
      image: "https://i.ibb.co/JWw2StmY/DSC-0037.jpg",
      title: "Creative Portrait",
      likes: 167,
      views: 780,
    },

    {
      id: 11,
      category: "Portraits",
      image:
        "https://i.ibb.co/ccWw1ZDX/DSC-0371.jpg",
      title: "Sunset Silhouette",
      likes: 189,
      views: 830,
    },
    {
      id: 12,
      category: "Portraits",
      image: "https://i.ibb.co/2YymgRFp/DSC-0036.jpg",
      title: "Family Portrait",
      likes: 145,
      views: 720,
    },
    {
      id: 13,
      category: "family",
      image: "https://i.ibb.co/1tTfkbfj/18-12x18-1.jpg",
      title: "Family Portrait",
      likes: 145,
      views: 720,
    },
    {
      id: 14,
      category: "family",
      image: "https://i.ibb.co/rf1NrR1x/Black-Modern-Family-Portrait-Facebook-Post.png",
      title: "Family Portrait",
      likes: 145,
      views: 720,
    },
     {
      id: 15,
      category: "family",
      image: "https://i.ibb.co/xtg4z2dM/DSC-0045q.jpg",
      title: "Family Portrait",
      likes: 145,
      views: 720,
    },
  ];

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory, portfolioItems],
  );

  return (
    <section ref={ref} id="portfolio" className="py-12 md:py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-2">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-3" />
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of weddings, portraits, events,
            products, and studio work.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6 md:mb-8 overflow-x-auto pb-2">
          <div className="flex w-max mx-auto gap-1 md:gap-2 px-2 md:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 text-xs md:px-4 md:py-1.5 rounded-full border transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-amber-600 text-white border-amber-600"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - Smaller Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -2 }}
                className="group border border-gray-100 rounded-md overflow-hidden shadow-xs hover:shadow-sm transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-md" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-102"
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* Bottom Overlay - Smaller */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xs p-2">
                    <h3 className="text-xs font-medium line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex justify-between text-[10px] text-gray-600 mt-0.5">
                      <span className="flex items-center gap-0.5">
                        <Heart className="h-2.5 w-2.5" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <Eye className="h-2.5 w-2.5" />
                        {item.views}
                      </span>
                    </div>
                  </div>

                  {/* Category Tag - Smaller */}
                  <div className="absolute top-1.5 left-1.5 bg-white text-gray-700 px-1.5 py-0.5 text-[10px] rounded-full border border-gray-100 capitalize">
                    {item.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Button - Smaller */}
        <div className="text-center mt-8 md:mt-10">
          <button className="px-5 py-1.5 text-sm border border-amber-600 text-amber-600 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-colors duration-200">
            View More
          </button>
        </div>
      </div>

      {/* Lightbox Modal - Compact */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {portfolioItems.find((item) => item.id === selectedImage) && (
                <>
                  <div className="relative aspect-[4/3] bg-gray-800 rounded-t-lg overflow-hidden">
                    <Image
                      src={
                        portfolioItems.find((item) => item.id === selectedImage)!
                          .image
                      }
                      alt={
                        portfolioItems.find((item) => item.id === selectedImage)!
                          .title
                      }
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="bg-white p-3 rounded-b-lg">
                    <h3 className="text-sm font-medium">
                      {portfolioItems.find((item) => item.id === selectedImage)!.title}
                    </h3>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span className="capitalize">
                        {portfolioItems.find((item) => item.id === selectedImage)!.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {portfolioItems.find((item) => item.id === selectedImage)!.likes}
                      </span>
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 w-7 h-7 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-md"
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

Portfolio.displayName = "Portfolio";
export default Portfolio;