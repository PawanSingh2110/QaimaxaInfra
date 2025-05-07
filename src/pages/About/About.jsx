import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner1 from "../../assets/banner1.jpg";
import Slider from "../../components/Slider";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const logoRef = useRef(null);

  const navLinks = ["Home", "About", "Services", "Contact"];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "100vh",
        duration: 1,
        ease: "power3.inOut",
      });

      gsap.fromTo(
        linksRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(linksRef.current, {
        y: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.in",
      });

      gsap.to(menuRef.current, {
        height: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.inOut",
      });
    }

    // ScrollTrigger for logo (based on your screenshot)
    ScrollTrigger.create({
      animation: gsap.from(logoRef.current, {
        y: "50vh",
        scale: 6,
        yPercent: -40,
      }),
      scrub: true,
      trigger: ".content", // We'll add a 'content' class to the next section
      start: "top bottom",
      endTrigger: ".content",
      end: "top center",
    });
  }, [isOpen]);

  return (
    <div className="relative z-[5]">
      {/* Top bar with Logo and Hamburger */}
      <div className="fixed px-10 top-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow-md z-[6]">
        {/* Logo */}
        <div className="text-2xl font-medium text-black">
          service
        </div>

        {/* Hamburger Icon */}
        <button
          className="flex flex-col gap-1 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-8 h-1 bg-black transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-8 h-1 bg-black transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Center Logo with Scroll Animation */}
      <div 
        ref={logoRef}
        className="logo text-3xl fixed top-0 z-50 left-[50%] -translate-x-1/2 font-mono"
      >
        logo
      </div>

      {/* Page Content */}
      <div className="h-[100vh] w-full"></div>

      {/* Content section where logo animation will end */}
      <div className="content">
        <img src={Banner1} alt="" className="w-full" />
      </div>

      <div>
        <Slider/>
      </div>

      {/* Animated Menu Background */}
      <div
        ref={menuRef}
        className="absolute top-0 left-0 w-full bg-white overflow-hidden h-0"
      >
        <div className="flex h-full">
          {/* Left side NavLinks */}
          <ul className="flex flex-col items-start justify-start gap-10 text-5xl font-bold p-10 pt-32 w-1/2">
            {navLinks.map((link, index) => (
              <li
                key={index}
                ref={(el) => (linksRef.current[index] = el)}
                className="cursor-pointer opacity-0"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Right side filler */}
          <div className="w-1/2 flex items-center justify-center text-gray-400 text-2xl p-8">
            <p>Welcome to our site!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
