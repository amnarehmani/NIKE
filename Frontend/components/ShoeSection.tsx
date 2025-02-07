"use client"
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const ShoeSection = () => {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      type: "Women's Shoes",
      price: "₹ 13 995",
      image: "/images/shoe01.png",
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      type: "Men's Shoes",
      price: "₹ 13 995",
      image: "/images/shoe02.png",
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      type: "Men's Shoes",
      price: "₹ 16 995",
      image: "/images/shoe01.png",
    },
    {
      id: 4,
      name: "Nike Blazer Low '77 Jumbo",
      type: "Women's Shoes",
      price: "MRP : ₹ 8 595.00",
      image: "/images/shoe04.png",
    },
    {
      id: 5,
      name: "Nike Legend Essential 3 Next Nature",
      type: "Men's trending shoe",
      price: "MRP : ₹ 4 995.00",
      image: "/images/shoe05.png",
    },
    {
      id: 6,
      name: "Jordan Why Not .6 PF",
      type: "Men's Shoes",
      price: "MRP : ₹ 13 995.00",
      image: "/images/shoe06.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };


  const nextSlide = () => {
    if (currentIndex < shoes.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 mt-20">
    
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Best of Air Max</h2>
        <div className="flex items-center gap-2">
          <p className="text-black font-[600]">Shop</p>
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FiChevronLeft className="text-gray-700 text-lg" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FiChevronRight className="text-gray-700 text-lg" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shoes.slice(currentIndex, currentIndex + 3).map((shoe) => (
          <div
            key={shoe.id}
            className="flex flex-col justify-center items-center p-4 rounded-md"
          >
            <Image
              src={shoe.image}
              alt={shoe.name}
              width={500}
              height={500}
              className="w-full h-auto object-contain mb-4"
            />
            <div className="w-full text-left">
              <h3 className="text-lg font-medium text-gray-900">{shoe.name}</h3>
              <p className="text-sm text-gray-600">{shoe.type}</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">
                {shoe.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeSection;
