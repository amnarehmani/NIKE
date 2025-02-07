"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import Image from "next/image";
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center h-20 px-6 py-4">
        <Link href="/">
        <Image
          src="/images/nike.png"
          alt="logo"
          width={100}
          height={100}
          className="w-[78px] h-[78px]"
        />
        </Link>

        <div className="hidden lg:flex gap-8">
          <Link href="#" className="hover:border-b-2 hover:border-gray-500">
            New & Featured
          </Link>
          <Link href="#" className="hover:border-b-2 hover:border-gray-500">
            Men
          </Link>
          <Link href="#" className="hover:border-b-2 hover:border-gray-500">
            Women
          </Link>
          <Link href="#" className="hover:border-b-2 hover:border-gray-500">
            Kids
          </Link>
          <Link href="#" className="hover:border-b-2 hover:border-gray-500">
            Sale
          </Link>
          <Link href="#" className="hover:border-b-2 hover:border-gray-500">
            SNKRS
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center bg-[#F5F5F5] w-[180px] h-[40px] rounded-full px-2">
            <CiSearch className="text-2xl text-black flex-shrink-0" />

            <input
              type="text"
              placeholder="Search"
              className="w-[120px] bg-transparent  text-gray-700 placeholder-gray-500 focus:outline-none ml-1"
            />
          </div>

          <div className="flex gap-4 items-center">
            <Link href="/wishlist">
              <CiHeart className=" text-[24px] cursor-pointer" />
            </Link>
            <Link href="/cart">
              <BsBag className=" text-[19px] cursor-pointer" />
            </Link>
          </div>
        </div>

        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar*/}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button className="text-gray-700 text-3xl" onClick={toggleSidebar}>
              <HiX />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow space-y-6">
            <div className="flex items-center bg-[#F5F5F5] w-3/3 h-[38px] px-4 rounded-full">
              <CiSearch className="text-2xl text-black flex-shrink-0" />

              <input
                type="text"
                placeholder="Search"
                className="w-[120px] bg-transparent  text-gray-700 placeholder-gray-500 focus:outline-none ml-1"
              />
            </div>

            <ul className="space-y-4 text-center w-full">
              <li>
                <Link
                  href="#"
                  className="hover:border-b-2 hover:border-gray-500"
                >
                  New & Featured
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:border-b-2 hover:border-gray-500"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:border-b-2 hover:border-gray-500"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:border-b-2 hover:border-gray-500"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:border-b-2 hover:border-gray-500"
                >
                  Sale
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:border-b-2 hover:border-gray-500"
                >
                  SNKRS
                </Link>
              </li>
            </ul>

            <div className="flex gap-6">
              <Link href="/wishlist">
                <CiHeart className="text-[24px] cursor-pointer" />
              </Link>
              <Link href="/cart">
                <BsBag className="text-[19px] cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
