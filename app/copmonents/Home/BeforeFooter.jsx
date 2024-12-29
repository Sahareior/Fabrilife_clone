import React from 'react';
import { FaLock } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";


const BeforeFooter = () => {

    return (
        <div>
            <div className="relative  mt-14 flex justify-center items-center">
  <div className="relative h-52 overflow-hidden rounded-lg shadow-lg">
    {/* Image */}
    <img
      className="w-full   image-full opacity-90"
      src="https://fabrilife.com/image-gallery/5edc1d60d1b41.jpg"
      alt="Bulk Order/Wholesale"
    />
    {/* Overlay with text */}
    <div className="absolute  "></div>
    <div className="absolute top-4 left-4 w-96 ">
      <h2 className="text-2xl font-bold mb-2">Bulk Order / Wholesale</h2>
      
      <p className="text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quo
        reiciendis, commodi deleniti sunt id quae sed fugit fugiat praesentium?
      </p>
    </div>
  </div>
</div>
<div className="flex flex-col my-7 w-[60%] mx-auto justify-center items-center text-center space-y-6 py-10 ">
  {/* Title */}
  <h2 className="text-3xl font-bold text-gray-800">Work with Us</h2>

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quibusdam tempore possimus nam dignissimos atque nesciunt sapiente dolor nihil quis!</p>
  <div className="flex flex-col sm:flex-row items-center gap-4">
    <p className="text-lg text-gray-600">
      We are the official merchandising partner of
    </p>
    {/* Logo */}
    <img
      className="w-28 sm:w-32 object-contain"
      src="https://seeklogo.com/images/G/grameenphone-logo-6C1403D0AB-seeklogo.com.png"
      alt="Grameenphone logo"
    />
  </div>
</div>
<div className='relative mt-4'>
    <img className='w-full' src="https://fabrilife.com/image-gallery/61a699084e310.png" alt="" />
    <div className='absolute text-right top-1/3 right-6 '>
        <h2 className='text-2xl font-medium'>Earn Money</h2>
        <h3 className='uppercase text-wrap text-[#2B9C94] text-5xl'>Join Fabrisquad</h3>
        <p className='font-semibold'>An Affiliate programm by fabrilife</p>
    </div> 
</div>

        </div>
    );
};

export default BeforeFooter;