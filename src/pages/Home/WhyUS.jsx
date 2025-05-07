import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaShieldAlt, FaHeadset, FaCogs, FaWallet } from "react-icons/fa";

const WhyGaamUP = () => {
  const features = [
    { icon: <FaClipboardList />, text: "Latest and innovative products and solutions" },
    { icon: <FaShieldAlt />, text: "All products are of superior quality and long-lasting" },
    { icon: <FaWallet />, text: "The products at QAIMAXA INFRA are cost-effective" },
    { icon: <FaHeadset />, text: "We offer 24 X 7 service and support" },
    { icon: <FaCogs />, text: "Get customized products as per your requirements" },
  ];

  return (
    <div
      id="whyus"
      className="whyme relative flex items-center justify-center mt-10 py-16 bg-black bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl w-full px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-medium text-white mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <span className="text-black">Why</span>{" "}
          <span className="text-black">
            QAIMAXA INFRA
          </span>
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-6 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-xl bg-[#1e1e1e] flex flex-col items-center text-center transition-all duration-300 ease-in-out 
              shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-[#737373] hover:to-black"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
              }}
            >
              <span className="text-4xl text-[#737373] mb-3 transition-all duration-300 group-hover:text-white">
                {item.icon}
              </span>
              <p className="text-lg tracking-wider font-medium text-[#d1d1d1] transition-all duration-300 group-hover:text-white">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyGaamUP;
