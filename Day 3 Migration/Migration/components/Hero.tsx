import React from 'react'
import Image from 'next/image'
import ShoeSection from './ShoeSection'
import GearUpSection from './GearUpSection'

import Lists from './Lists'
const Hero = () => {
  return (
    <>
      {/* Top Banner Section */}
      <div className='bg-[#F5F5F5] w-full h-[58px] shadow-[0px_-1px_0px_0px_#E5E5E5_inset]'>
        <h1 className='text-center text-black font-[600] text-[17px] py-1'>Hello Nike App</h1>
        <p className='text-center text-[12px]'>
          Download the app to access everything Nike. 
          <span className='font-[600] underline'> Get Your Great</span>
        </p>
      </div>

      {/* Hero Image Section */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/hero-image.png"
          alt="hero"
          width={1000}
          height={1000}
          className="w-full h-auto max-w-[1344px] object-cover"
        />
      </div>

      {/* First Look Section */}
      <div className="mt-8 py-8 px-4 md:px-8">
        <h1 className="text-center text-black font-semibold text-[17px] pb-2">
          First Look
        </h1>
        <h1 className="text-center text-black font-semibold text-[40px] md:text-[50px] leading-[50px] md:leading-[60px] pb-4">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-center text-gray-700 text-sm md:text-base px-2 leading-6 md:leading-7">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br className="hidden md:block" />
          designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
          <button className="bg-black text-white text-sm font-medium py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-gray-800 transition duration-300">
            Notify Me
          </button>
          <button className="bg-black text-white text-sm font-medium py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-gray-800 transition duration-300">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Shoe Section */}
      <ShoeSection />

      {/* Featured Section */}
      <div>
        <h2 className="text-center text-black font-semibold text-xl sm:text-2xl lg:text-3xl mb-8 mt-20">
          Featured
        </h2>
        <div className="flex justify-center items-center">
          <Image
            src="/images/runner.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="w-full h-auto max-w-[1344px] object-cover"
          />
        </div>
        <div className="mt-8 py-8 px-4 md:px-8">
          <h1 className="text-center text-black font-semibold text-[40px] md:text-[50px] leading-[50px] md:leading-[60px] pb-4">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-center text-gray-700 text-sm md:text-base px-2 leading-6 md:leading-7">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
            <button className="bg-black text-white text-sm font-medium py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-gray-800 transition duration-300">
              Find Your Shoe
            </button>
          </div>
        </div>
      </div>

      {/* Gear Up Section */}
      <GearUpSection />

      

      
      <div>
        <h2 className="text-center text-black font-semibold text-xl sm:text-2xl lg:text-3xl mb-8 mt-20">
          Dont Miss
        </h2>
        <div className="flex justify-center items-center">
          <Image
            src="/images/missing.png"
            alt="hero"
            width={1000}
            height={1000}
            className="w-full h-auto max-w-[1344px] object-cover"
          />
        </div>
        <div className="mt-8 py-8 px-4 md:px-8">
          <h1 className="text-center text-black font-semibold text-[40px] md:text-[50px] leading-[50px] md:leading-[60px] pb-4">
            FLIGHT ESSENTIALS
          </h1>
          <p className="text-center text-gray-700 text-sm md:text-base px-2 leading-6 md:leading-7">
            Your built to last, all week wears but with style only Jordan Brand can deliver.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
            <button className="bg-black text-white text-sm font-medium py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-gray-800 transition duration-300">
              Shop
            </button>
          </div>
        </div>
      </div>

      {/* Essentials Section */}
      <div className="mt-20">
        <h2 className="text-center text-black font-semibold text-xl sm:text-2xl lg:text-3xl mb-8">
          The Essentials
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Image 1 */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center">
              <Image
                src="/images/essential01.png"
                alt="Picture 1"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F2D8D8] text-black py-2 px-4 rounded-full text-sm md:text-base hover:bg-gray-800 hover:text-white transition duration-300">
                Men
              </button>
            </div>
            {/* Image 2 */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center">
              <Image
                src="/images/essential02.png"
                alt="Picture 2"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F2D8D8] text-black py-2 px-4 rounded-full text-sm md:text-base hover:bg-gray-800 hover:text-white transition duration-300">
                Women
              </button>
            </div>
            {/* Image 3 */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center">
              <Image
                src="/images/essential03.png"
                alt="Picture 3"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F2D8D8] text-black py-2 px-4 rounded-full text-sm md:text-base hover:bg-gray-800 hover:text-white transition duration-300">
                Kid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* lists */}
<Lists />

    </>
  )
}

export default Hero