"use client";
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Image from 'next/image';

const Page = () => {  

  const [visibleStores, setVisibleStores] = useState(3);

  const allStores = [
    {
      name: "Nike NYC - House of Innovation 000",
      address: "650 5th Ave.",
      city: "New York, NY, 10019, US",
      status: "Closed",
      opens: "11:00 am",
    },
    {
      name: "Nike By Upper East Side",
      address: "1131 3rd Ave.",
      city: "New York, NY, 10065, US",
      status: "Closed",
      opens: "11:00 am",
    },
    {
      name: "Nike By Flatiron",
      address: "156 Fifth Ave.",
      city: "New York, NY, 10010, US",
      status: "Closed",
      opens: "11:00 am",
    },
    {
      name: "Nike By SoHo",
      address: "555 Broadway",
      city: "New York, NY, 10012, US",
      status: "Open",
      opens: "10:00 am",
    },
    {
      name: "Nike By Times Square",
      address: "100 W 42nd St.",
      city: "New York, NY, 10036, US",
      status: "Open",
      opens: "10:00 am",
    },
    {
      name: "Nike By Brooklyn",
      address: "345 Flatbush Ave.",
      city: "Brooklyn, NY, 11217, US",
      status: "Closed",
      opens: "11:00 am",
    },
    {
      name: "Nike By Queens",
      address: "212-10 42nd Ave.",
      city: "Queens, NY, 11361, US",
      status: "Open",
      opens: "10:00 am",
    },
    {
      name: "Nike By Bronx",
      address: "1220 E Fordham Rd.",
      city: "Bronx, NY, 10458, US",
      status: "Open",
      opens: "10:00 am",
    },
    {
      name: "Nike By Harlem",
      address: "215 W 125th St.",
      city: "New York, NY, 10027, US",
      status: "Closed",
      opens: "11:00 am",
    },
    {
      name: "Nike By Midtown",
      address: "300 W 42nd St.",
      city: "New York, NY, 10036, US",
      status: "Closed",
      opens: "11:00 am",
    },
    {
      name: "Nike By Upper West Side",
      address: "650 Amsterdam Ave.",
      city: "New York, NY, 10025, US",
      status: "Open",
      opens: "10:00 am",
    },
  ];

  const showMoreStores = () => {
    setVisibleStores((prev) => Math.min(prev + 7, allStores.length));
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mt-6 items-start lg:items-center">
        <div className="flex flex-col mt-4 lg:w-[40%] px-6 mb-4">
          <h1 className="font-semibold text-[28px] leading-8 mb-10">Find a Nike Store</h1>

          <div className="flex items-center w-full lg:w-[416px] h-[56px] gap-3 px-4 rounded-md border border-black mb-6">
            <CiSearch className="text-2xl text-black flex-shrink-0" />
            <input
              type="text"
              placeholder="Search Location"
              className="w-full text-gray-700 placeholder-gray-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between w-full lg:w-[416px]">
            <p className="text-[#757575] text-[14px] leading-5">{allStores.length} Stores Near You</p>
            <div className="flex items-center gap-2 border border-[#CCCCCC] rounded-full px-4 py-2">
              <button className="font-medium text-[15px]">Filter</button>
              <TbAdjustmentsHorizontal className="text-[18px] text-black cursor-pointer" />
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {allStores.slice(0, visibleStores).map((store, index) => (
              <div key={index} className="border-t border-gray-300 pt-4">
                <p className="font-medium text-[15px]">{store.name}</p>
                <p className="text-[#757575] text-[14px]">{store.address}</p>
                <p className="text-[#757575] text-[14px]">{store.city}</p>
                <p className="text-[#757575] text-[14px]">
                  <span className="text-red-500">{store.status}</span> • Opens at {store.opens}
                </p>
              </div>
            ))}

            {visibleStores < allStores.length && (
              <button
                onClick={showMoreStores}
                className="mt-4 underline hover:text-blue-600 font-medium text-[15px]"
              >
                View All Stores
              </button>
            )}
          </div>
        </div>

        <div className="w-full lg:w-[60%] flex justify-center mt-6 lg:mt-0 px-6 mb-4">
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              src="/images/store.png"
              alt="location"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page; 
