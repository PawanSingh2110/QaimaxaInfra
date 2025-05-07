import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import ProductCard from "../Product/ProductCard";
import RMC from "../../assets/rmc.jpg";
import Steel from "../../assets/steel.jpg";
import Blocks from "../../assets/blocks1.jpg";
import Ash from "../../assets/ash.jpg";
import Agri from "../../assets/agri.jpg";
import Pond from "../../assets/pond.jpg";

const OurProduct = () => {
  const products = [
    {
      id: 1,
      name: "High-Quality Ready-Mix Concrete (RMC) for Reliable Construction",
      description:
        "Our premium Ready-Mix Concrete (RMC) ensures strength, durability, and efficiency for all construction projects...",
      image: RMC,
    },
    {
      id: 2,
      name: "Durable Blocks for Strong Foundations",
      description:
        "Our high-quality blocks offer superior strength, durability, and thermal insulation...",
      image: Blocks,
    },
    {
      id: 3,
      name: "High-Quality Fly Ash for Sustainable Construction",
      description:
        "Enhance your construction projects with premium fly ash – a fine, eco-friendly material...",
      image: Ash,
    },
    {
      id: 4,
      name: "Eco-Friendly Pond Ash for Sustainable Construction",
      description:
        "Pond ash is a fine-grained byproduct of coal combustion, ideal for road construction, brick manufacturing, and soil stabilization...",
      image: Pond,
    },
    {
      id: 5,
      name: "High-Quality Aggregate for Strong & Durable Construction",
      description:
        "Our premium aggregates, including crushed stone, gravel, and sand, provide excellent strength...",
      image: Agri,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
    
      // For large screens (1440px and up), show 4 products
      if (width >= 1440) {
        setSlidesPerView(3);
      }
      // For large screens (1024px and up), show 3 products
      else if (width >= 1024) {
        setSlidesPerView(3);
      }
      // For medium screens (768px to 1023px), show 2 products
      else if (width >= 641) {
        setSlidesPerView(2);
      }
      // For screens between 630px and 640px, show 1 product
      else if (width >= 630 && width <= 640) {
        setSlidesPerView(1);
      }
      // For small screens below 768px, show 1 product
      else {
        setSlidesPerView(1);
      }
    };
    

    updateSlidesPerView(); // Set initial value on mount

    window.addEventListener("resize", updateSlidesPerView); // Update on resize

    return () => {
      window.removeEventListener("resize", updateSlidesPerView); // Cleanup on unmount
    };
  }, []);

  const totalPages = Math.ceil(products.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentSlide * slidesPerView;
  const visibleProducts = products
    .slice(startIndex, startIndex + slidesPerView)
    .concat(
      startIndex + slidesPerView > products.length
        ? products.slice(0, (startIndex + slidesPerView) % products.length)
        : []
    );

  return (
    <div id="products" className="w-[90%] lg:w-[80%] mx-auto mt-14 relative">
      {/* Heading with scroll animation */}
      <motion.span
        className="text-4xl font-medium text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Ensures animation runs every time the element appears in the viewport
      >
        Products
      </motion.span>

      {/* Product Slider */}
      <div className="overflow-hidden relative mt-6">
        {/* Animate the entire slide group */}
        <motion.div
          className="flex flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // Animation runs every time it appears
        >
          {visibleProducts.map((item, index) => (
            <motion.div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }} // Adjusted animation to repeat every time the item is in view
            >
              <ProductCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        <MdKeyboardArrowRight size={30} />
      </button>
    </div>
  );
};

export default OurProduct;
