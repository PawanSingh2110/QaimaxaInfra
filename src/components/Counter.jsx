import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="mt-10 map relative py-16 rounded-xl bg-cover bg-center overflow-hidden"
      
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60 rounded-xl"></div>

      {/* Header Text */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-3xl font-bold text-center text-white mb-8"
      >
        Quality | Eco-Friendly | Durability
      </motion.h3>

      {/* Counter Section */}
      <div className="relative z-10 flex justify-center gap-10 flex-wrap text-white text-center">
        {[
          { label: "Clients", end: 69 },
          { label: "Manufacturers", end: 15 },
          { label: "Projects", end: 110 },
          { label: "Cities", end: 2 },
           // New counter added
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="bg-white/20 p-5 rounded-xl  shadow-lg w-40 backdrop-blur-md"
          >
            <h3 className="text-4xl font-bold text-white ">
              {inView && <CountUp start={0} end={item.end} duration={2} />}
            </h3>
            <p className="text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CounterSection;
