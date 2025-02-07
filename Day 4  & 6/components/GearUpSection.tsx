"use client";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const GearUpSection = () => {
  const products = [
    {
      id: 1,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      type: "Men's Short-Sleeve Running Top",
      price: "₹ 3 895",
      image: "/images/cloth01.png",
    },
    {
      id: 2,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      type: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      price: "₹ ₹ 2 495",
      image: "/images/cloth02.png",
    },
    {
      id: 3,
      name: "Nike Dri-FIT ADV Run Division",
      type: "Women's Long-Sleeve Running Top",
      price: "₹ 5 295",
      image: "/images/cloth03.png",
    },
    {
      id: 4,
      name: "Nike Fast",
      type: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      price: "MRP : ₹ 3 765",
      image: "/images/cloth04.png",
    },
    {
      id: 5,
      name: "Nike Dri-FIT Ready",
      type: "Men's Short-Sleeve Fitness Top",
      price: "MRP : ₹ 2 495.00",
      image: "/images/men02.png",
    },
    {
      id: 6,
      name: "Nike Dri-FIT UV Hyverse",
      type: "Men's Short-Sleeve Graphic Fitness Top",
      price: "MRP : ₹ 2 495.00",
      image: "/images/men03.png",
    },
    {
      id: 7,
      name: "Nike Alate All U",
      type: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
      price: "MRP : ₹ 2 195.00",
      image: "/images/women01.png",
    },
    {
      id: 8,
      name: "Nike Swoosh",
      type: "Women's Medium-support Padded Sports Bra Tank",
      price: "MRP : ₹ 3 095.00",
      image: "/images/women02.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4); 
    }
  };

  const nextSlide = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex(currentIndex + 4); 
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 mt-20">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Gear Up</h2>
        <div className="flex items-center gap-2">
          <p className="text-black font-[600]">Shop Now</p>
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

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(currentIndex, currentIndex + 4).map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-center items-center p-4 "
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto object-contain mb-4"
            />
            <div className="w-full text-left">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.type}</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GearUpSection;
