"use client";
import React, { useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import Link from "next/link";

const CartIcon = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []); 

  if (!isClient) {
    return null; 
  }

  return (
    <div className="relative">
      <Link href="/cart">
        <BsBag className="text-[19px] cursor-pointer" />
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
          0
        </span>
      </Link>
    </div>
  );
};

export default CartIcon;
