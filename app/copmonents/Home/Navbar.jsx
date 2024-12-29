"use client"

import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY === 0); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {showTopBar && (
        <div className="flex justify-between bg-[#F3F3F3] p-1">
          <div>
            <h2 className="text-white p-2 flex justify-center items-center gap-2 px-2 text-sm bg-black font-bold">
              <span className="text-yellow-300 text-xl">
                <BsLightningChargeFill />
              </span>
              EXCLUSIVE T-SHIRTS ON SALE | Limited time only
            </h2>
          </div>
          <div className="flex gap-3">
            <button className="w-52 bg-black p-1 text-white">
              <p className="text-white text-sm">Order Bulk/ Corporate Sells</p>
            </button>
            <button className="w-52 bg-black p-1 text-white">
              <p className="text-white text-sm">Store Location</p>
            </button>
            <button className="w-32 bg-[#F3F3F3] p-1 text-white">
              <p className="text-slate-600">Help</p>
            </button>
            <button className="w-32 bg-[#F3F3F3] p-1 text-white">
              <p className="text-blue-400">Login</p>
            </button>
          </div>
        </div>
      )}

      <div className="navbar fixed z-30 bg-white px-9 py-3">
        <div className="flex justify-between w-full">
         
          <Link href="/">
            <img
              className="w-52 cursor-pointer"
              src="https://fabrilife.com/img/fabrilife.svg"
              alt="Logo"
            />
          </Link>

          <h3>Shop</h3>

          <div className="relative w-[600px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full pr-10 h-10 border border-gray-300 rounded-none"
            />
            <p className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
              <FaSearch />
            </p>
          </div>

          <div className="flex justify-center pr-14 items-center gap-2">
            <a className="text-xl">
              <FaCartShopping />
            </a>
            <p className="text-white mt-4 px-1 rounded-full text-sm bg-sky-500">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
