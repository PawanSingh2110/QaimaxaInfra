import React from 'react';
import banner from '../../assets/bgbanner.jpg';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-72">
        <motion.img
          src={banner}
          alt="Product Background"
          className="w-full h-full object-cover brightness-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
      </div>

      {/* Contact Info and Form */}
      <motion.div
        className="bg-white text-gray-800 py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          variants={fadeInUp}
        >
          <motion.div className="bg-white shadow-lg p-6 rounded-2xl text-center" variants={fadeInUp}>
            <div className="text-pink-500 text-4xl mb-2">📍</div>
            <h3 className="text-lg font-semibold mb-2">Our Location</h3>
            <p>Mumbai, Navi Mumbai</p>
          </motion.div>

          <motion.div className="bg-white shadow-lg p-6 rounded-2xl text-center" variants={fadeInUp}>
            <div className="text-pink-500 text-4xl mb-2">✉️</div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="break-words">info@Qaimaxainfra.com</p>
          </motion.div>

          <motion.div className="bg-white shadow-lg p-6 rounded-2xl text-center" variants={fadeInUp}>
            <div className="text-pink-500 text-4xl mb-2">📞</div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="break-words">
              <a href="tel:+919819320999">+91-9819320999</a> / <br />
              <a href="tel:+919321790831">+91-9321790831</a>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={fadeInUp}
        >
          {/* Map with Zoom-In Animation */}
          <motion.div
            className="relative w-full h-[450px] md:h-96"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6408.6721971575535!2d72.83704079214574!3d19.039962707105673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d47a9b576b%3A0x5f8bfbcfe72fa863!2sQAIMAXA%20LLP!5e1!3m2!1sen!2sin!4v1746465486522!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-lg w-full h-full"
            ></iframe>
          </motion.div>

          {/* Contact Form with Slide-In */}
          <motion.form
            className="space-y-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-auto bg-black text-white hover:text-black hover:border-black border-[1px] px-6 py-3 rounded-2xl shadow hover:bg-gray-400 transition duration-75"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
