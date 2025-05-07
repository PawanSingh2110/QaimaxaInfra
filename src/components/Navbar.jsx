import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaProductHunt,
  FaBlog,
  FaComments,
  FaPhone,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo1.png";
import Logo1 from "../assets/logo2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        const target = document.getElementById(scrollTo);
        if (target) {
          const offset = 100;
          const topPosition =
            target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      const target = document.getElementById(sectionId);
      if (target) {
        const offset = 120;
        const topPosition =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    } else {
      navigate(`/?scrollTo=${sectionId}`);
    }
  };

  const navLinks = [
    {
      title: "About",
      url: "#",
      icon: <FaInfoCircle />,
      action: () => handleSectionClick("who we are"),
    },
    {
      title: "Products",
      url: "#",
      icon: <FaProductHunt />,
      action: () => handleSectionClick("products"),
    },
    {
      title: "WhyUs",
      url: "#",
      icon: <FaBlog />,
      action: () => handleSectionClick("whyus"),
    },
    {
      title: "Testimonials",
      url: "#",
      icon: <FaComments />,
      action: () => handleSectionClick("testimonials"),
    },
    {
      title: "Contact",
      url: "/contact",
      icon: <FaPhone />,
      
    },
  ];

  return (
    <nav
      className={`fixed py-5 top-0 left-0 w-full z-50 text-lg transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              {isScrolled ? (
                <img src={Logo} alt="logo" className="w-[240px]" />
              ) : (
                <img src={Logo1} alt="logo" className="w-[240px]" />
              )}
            </a>
          </div>
          <div className="hidden lg:flex space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={link.action || (() => navigate(link.url))}
                className="flex items-center hover:text-orange-400 transition-colors duration-200"
              >
                <span>{link.title}</span>
              </button>
            ))}
          </div>

          {/* mobile view toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with smooth slide animation only */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-white/50 backdrop-blur-sm z-40"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed right-0 bg-black top-0 h-full w-3/4 shadow-lg p-4 z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-2xl focus:outline-none"
              >
                <FaTimes className="text-white" />
              </button>
              <nav className="mt-10">
                {navLinks.map((link) => (
                  <button
                    key={link.title}
                    onClick={() => {
                      toggleMenu();
                      if (link.action) {
                        link.action();
                      } else {
                        navigate(link.url);
                      }
                    }}
                    className="flex items-center p-2 w-full text-left text-white hover:bg-gray-400 hover:text-white rounded-md transition-colors duration-200"
                  >
                    <span className="text-2xl flex items-center gap-2 p-3 mt-2">
                      <span className="text-amber-600 text-3xl">{">"}</span>
                      {link.title}
                    </span>
                  </button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
