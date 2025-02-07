import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="bg-[#F5F5F5] w-full h-auto sm:h-[50px] py-2">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 px-4 md:px-8">

        <div className="flex items-center justify-center">
          <Image
            src="/images/icon-header.png"
            alt="icon"
            width={28}
            height={28}
            className="w-[28px] h-[28px] md:w-[32px] md:h-[32px]"
          />
        </div>

    
        <div className="px-4 py-1 rounded-md">
          <Link
            href="/content"
            className="block text-sm md:text-base font-medium text-gray-700 hover:underline text-center"
          >
            Skip to the main content
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-[12px] md:text-[14px] font-medium">
          <Link
            href="/store"
            className="hover:text-blue-600 transition duration-300"
          >
            Find store
          </Link>
          <div>|</div>
          <Link
            href="/help"
            className="hover:text-blue-600 transition duration-300"
          >
            Help
          </Link>
          <div>|</div>
          <Link
            href="/join"
            className="hover:text-blue-600 transition duration-300"
          >
            Join us
          </Link>
          <div>|</div>
          <Link
            href="/signin"
            className="hover:text-blue-600 transition duration-300"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
