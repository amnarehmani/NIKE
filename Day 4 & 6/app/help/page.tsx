import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Image from 'next/image';

const page = () => {
  return (
    <>
      
      <h2 className="text-center text-black font-semibold text-[24px] sm:text-[30px] mb-6 mt-4">
        GET HELP
      </h2>

    
      <div className='flex justify-center px-4'>
        <div className="flex items-center border-[1px] border-black w-full max-w-[457px] h-[56px] rounded-lg px-3">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full bg-transparent placeholder-gray-500 focus:outline-none"
          />
          <CiSearch className="text-2xl text-gray-500" />
        </div>
      </div>

    
      <div className='flex flex-wrap lg:flex-nowrap bg-white px-4 sm:px-8 mt-10 gap-8 pb-10'>

        
        <div className='lg:w-[60%] w-full flex flex-col gap-6'>
          <h3 className='font-semibold text-[20px] md:text-[24px] leading-[32px]'>
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h3>
          <p className='text-sm md:text-[15px]'>
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>

          <ul className='text-sm md:text-[15px] leading-[28px] list-disc ml-4'>
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>PayTM or a local credit or debit card if you enter your PAN at checkout.</li>
            <li>Apple Pay</li>
          </ul>

          <p className='text-sm md:text-[15px]'>
            <span className='font-semibold underline cursor-pointer'>Nike Members</span> can store multiple debit or credit cards for faster checkout. 
            <span className='font-semibold underline cursor-pointer'> Join us</span> today.
          </p>

    
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-black text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
              JOIN US
            </button>
            <button className="bg-black text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
              SHOP NIKE
            </button>
          </div>

    
          <h3 className='font-medium text-[20px] md:text-[24px] leading-[32px] mt-6'>FAQs</h3>
          <div className="text-sm md:text-[15px] leading-[28px]">
            <p className='font-semibold mt-4'>Does my card need international purchases enabled?</p>
            <p>Yes, we recommend asking your bank to enable international purchases on your card.</p>

            <p className='font-semibold mt-4'>Can I pay for my order with multiple methods?</p>
            <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>

            <p className='font-semibold mt-4'>Why don&apos;t I see Apple Pay as an option?</p>
            <p>Ensure you use Safari and a compatible Apple device with a supported card in your Wallet.</p>
          </div>

          
          <p className='mt-4'>Was this answer helpful?</p>
          <div className='flex gap-3 mt-2'>
            <FaThumbsUp className='text-2xl cursor-pointer' />
            <FaThumbsDown className='text-2xl cursor-pointer' />
          </div>

        
          <h3 className='font-medium text-[18px] text-gray-500 mt-6'>RELATED</h3>
          <p className='underline cursor-pointer text-black mt-2'>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
          <p className='underline cursor-pointer text-black mt-2'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
        </div>

        {/* Line Separator */}
        <div className="hidden lg:block border-l border-gray-300 h-auto lg:min-h-[700px]"></div>

    
        <div className='lg:w-[35%] w-full flex flex-col gap-6'>
          <h3 className='font-semibold text-[20px] md:text-[24px] leading-[32px] text-center'>
            CONTACT US
          </h3>

    
          <div className='flex flex-col items-center gap-4'>
            <Image src="/images/phone.png" alt='phone icon' width={60} height={60} />
            <p className='font-semibold'>000 800 919 0566</p>
            <p className='text-center text-sm'>Products &amp; Orders: 24/7 <br /> Info: 07:30 - 16:30, Mon-Fri</p>
          </div>

          <div className='flex flex-col items-center gap-4'>
            <Image src="/images/message.png" alt='message icon' width={60} height={60} />
            <p className='font-semibold'>24 hours a day</p>
          </div>

          <div className='flex flex-col items-center gap-4'>
            <Image src="/images/mail.png" alt='mail icon' width={60} height={60} />
            <p className='font-semibold'>We&apos;ll reply within 5 days</p>
          </div>

          <div className='flex flex-col items-center gap-4'>
            <Image src="/images/location.png" alt='location icon' width={60} height={60} />
            <p className='font-semibold'>STORE LOCATOR</p>
            <p className='text-center text-sm'>Find Nike stores near you</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
