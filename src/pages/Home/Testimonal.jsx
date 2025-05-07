import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const testimonials = [
  {
    name: "Sahil Mandal",
    title: "Eco Brilliance",
    image: "https://i.pravatar.cc/100?img=1",
    text: "Qaimaxa's professionalism and timely delivery exceeded our expectations. Highly recommended!",
  },
  {
    name: "Firoz Sayed",
    title: "Dealer",
    image: "https://i.pravatar.cc/100?img=2",
    text: "Their products are top quality and always on time. Great customer service too!",
  },
  {
    name: "GreenArch",
    title: "GreeenArch Construction",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYqIiRaPctiyhPNoISeSEUNQ8tY2lTEKPEg&s",
    text: "Impressed with the consistency and pricing. A reliable partner for our materials.",
  },
  {
    name: "Good Shepherd Church",
    title: "Client",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYqIiRaPctiyhPNoISeSEUNQ8tY2lTEKPEg&s",
    text: "Always on time, always top quality. Qaimaxa has streamlined our procurement process.",
  },
];

const TestimonialCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      className="relative bg-gray-100 py-10 px-4 sm:px-6 lg:px-8"
      id="testimonials"
    >
      <div className="w-full max-w-7xl mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800"
        >
          What Our Clients Say
        </motion.h2>

        {/* Custom Arrows */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
          <button ref={prevRef} className="bg-black p-2 rounded-full shadow-md">
            <FiChevronLeft size={24} className="text-white" />
          </button>
        </div>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
          <button ref={nextRef} className="bg-black p-2 rounded-full shadow-md">
            <FiChevronRight size={24} className="text-white" />
          </button>
        </div>

        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={16}
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000 }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="!w-full"
>
  {testimonials.map((t, index) => (
    <SwiperSlide key={index}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.4 }} // triggers multiple times when re-entering view
        className="bg-white rounded-xl shadow-md p-6 h-full mx-auto max-w-sm"
      >
        <p className="w-16 h-16 text-2xl font-extrabold flex justify-center items-center bg-black text-amber-200 mx-auto rounded-full border-4 border-gray-500 mb-4">
          {t.name[0]}
        </p>
        <h3 className="text-lg sm:text-xl font-semibold">{t.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{t.title}</p>
        <p className="text-gray-600 text-sm sm:text-base italic">“{t.text}”</p>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
};

export default TestimonialCarousel;
