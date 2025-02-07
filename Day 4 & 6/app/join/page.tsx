import React from 'react';
import Image from 'next/image';
import { Checkbox } from "@/components/ui/checkbox";
import Link from 'next/link';

const Join = () => {  
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className='flex justify-center items-center'>
        <Image
          src="/images/nike.png"
          alt="logo"
          width={100}
          height={100}
          className="w-[78px] h-[78px] mb-2"
        />
      </div>
      <h2 className="text-center text-black font-semibold text-[30px] sm:text-2xl mb-6">
        BECOME A NIKE MEMBER
      </h2>
      <p className='text-center text-[#8D8D8D] font-[400] text-[16px] mb-4'>
        Create your Nike Member profile and get <br />
        first access to the very best of Nike <br />
        products, inspiration and community.
      </p>
      <div className="flex flex-col items-center justify-center">
        <input
          type="email"
          required
          placeholder="Email Address"
          className="border p-2 w-[324px] h-[40px] rounded-[3px] bg-white text-[#8D8D8D] mb-4"
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="border p-2 w-[324px] h-[40px] rounded-[3px] bg-white text-[#8D8D8D] mb-4"
        />
        <input
          type="name"
          required
          placeholder="First Name"
          className="border p-2 w-[324px] h-[40px] rounded-[3px] bg-white text-[#8D8D8D] mb-4"
        />
        <input
          type="name"
          required
          placeholder="Last Name"
          className="border p-2 w-[324px] h-[40px] rounded-[3px] bg-white text-[#8D8D8D] mb-4"
        />
        <input
          type="name"
          required
          placeholder="Date of Birth"
          className="border p-2 w-[324px] h-[40px] rounded-[3px] bg-white text-[#8D8D8D] mb-1"
        />

        <p className="text-center text-[#8D8D8D] font-[400] text-[11px] pb-3">
          Get a Nike Member Reward every year on your Birthday.
        </p>

        <input
          type="name"
          required
          placeholder="India"
          className="border p-2 w-[324px] h-[40px] rounded-[3px] bg-white text-[#8D8D8D]  mb-4"
        />

        <div className="flex w-[324px] mb-4 gap-3">
          <button className="w-1/2  border rounded-l-[3px] bg-white text-[#8D8D8D]">
            Male
          </button>
          <button className="w-1/2 p-2 border rounded-r-[3px] bg-white text-[#8D8D8D]">
            Female
          </button>
        </div>

        <div className='flex gap-2 items-center justify-center'>
          <Checkbox />
          <p className="text-[#8D8D8D] font-[400] text-[13px]">
            Sign up for emails to get updates from Nike on <br /> products, offers and your Member benefits
          </p>
        </div>

        <p className='text-[#8D8D8D] text-[13px] text-center font-[400]  mt-3'>
          By creating an account, you agree to Nike&apos;s <span className='underline cursor-pointer'>Privacy <br /> Policy</span>  and <span className='underline cursor-pointer'>Terms of Use</span>
        </p>
      </div>

      <button className='w-[324px] h-[40px] bg-black text-white bottom-1 mt-6 rounded-[3px]'>
        JOIN US
      </button>

      <p className='text-center text-[#8D8D8D]  mt-4 font-[13px]'>
        Already a Member? <Link href="/signin" className='underline font-[500] text-black'>Sign In</Link>.
      </p>
    </div>
  );
}

export default Join;
