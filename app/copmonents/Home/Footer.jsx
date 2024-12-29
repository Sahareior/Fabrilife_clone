"use client"

import React from 'react';
import { FaLock } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  
  const data = [
    { id: 1, img: "https://fabrilife.com/img/sslcommerz.png", text: "All Secure payment methods", icon: FaLock },
    { id: 2, img: "https://fabrilife.com/img/sslcommerz.png", text: "Satisfaction Guaranteed", icon: HiOutlineEmojiHappy },
    { id: 3, img: "https://fabrilife.com/img/delivery.png", text: "Worldwide Delivery", icon: CiDeliveryTruck },
  ];

  return (
    <div>
      <div className="flex justify-center bg-[#F3F3F3] items-center gap-x-10 mt-6">
        {data.map((item) => (
      <div
      key={item.id}
      className="flex flex-col items-center text-center  pt-8  hover:shadow-lg transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="text-2xl  text-black mb-4"> {React.createElement(item.icon)}</div>
      {/* Text */}
      <p className="text-gray-700 font-semibold">{item.text}</p>
          
      {/* Image */}
      <img
        src={item.img}
        alt={item.text}
        className=" object-contain h-24 w-80 mb-1"
      />

    </div>
        ))}
      </div>

      {/* Footer Section */}
<div>
<div className="bg-[#37383F] flex gap-14 justify-start pl-36  px-6 py-14">
  {/* Subscription Section */}
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <p className="text-yellow-400 text-xl">
        <FaRegMessage />
      </p>
      <p className="text-slate-400 font-semibold text-sm">GET SPECIAL DISCOUNTS IN YOUR INBOX</p>
    </div>
    <div className="flex gap-2">
    <input
  type="text"
  placeholder="Enter your email"
  className=" w-96 border-b-2 border-white bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-0"
/>

      <button className="btn rounded-none  bg-[#EC971F] btn-sm">Subscribe</button>
    </div>
  </div>

  {/* Contact Section */}
  <div className="flex flex-col justify-center  gap-2">
    <div className="flex items-center gap-2">
      <p className="text-yellow-400 text-xl">
        <FaPhone />
      </p>
      <p className="text-white text-start text-sm">
        FOR ANY HELP YOU MAY CALL US AT
      </p>
    </div>
    <p className="text-slate-400">+8809677666888</p>
    <p className="text-slate-400 text-sm">
      Open 24 Hours a Day, 7 Days a Week
    </p>
  </div>
</div>

<footer className="footer sm:footer-horizontal bg-[#58595B] text-neutral-content justify-items-center grid-rows-2 p-10">
        
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">GitHub</a>
        </nav>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Apps</h6>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">iPhone</a>
          <a className="link link-hover">Android</a>
        </nav>
      </footer>
</div>
    </div>
  );
};

export default Footer;
