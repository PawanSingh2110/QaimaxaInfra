import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="w-[400px] h-[500px]  relative group overflow-hidden rounded-lg shadow-xl">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white  transition-all duration-500 group-hover:bg-black/80">
        <h3 className="text-2xl font-bold uppercase">{item.name}</h3>
        <p className="text-white text-sm mt-2 line-clamp-3">{item.description}</p>
        <Link
          to={`/product-detail/${item.id}`}
          className="mt-4 inline-block px-5 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
