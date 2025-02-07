import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox";
const page = () => {
  return (
    <div>
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
      YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
      </h2>
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
       

        <div className='flex gap-2 items-center justify-center'>
          <Checkbox />
          <p className="text-[#8D8D8D] font-[400] text-[13px]">
          Keep me signed in
          </p>
          <p className="text-[#8D8D8D] font-[400] text-[13px] pl-8">Forgot Passoword</p>
        </div>

        <p className='text-[#8D8D8D] text-[13px] text-center font-[400]  mt-3'>
          By logging in, you agree to Nike&apos;s <span className='underline cursor-pointer'>Privacy <br /> Policy</span>  and <span className='underline cursor-pointer'>Terms of Use</span>
        </p>
      </div>

      <button className='w-[324px] h-[40px] bg-black text-white bottom-1 mt-6 rounded-[3px]'>
        SIGN IN
      </button>

      <p className='text-center text-[#8D8D8D]  mt-4 font-[13px]'>
        Not a member? <Link href="/join" className='underline font-[500] text-black'>join us</Link>.
      </p>
    </div>
    </div>
  )
}

export default page
