"use client";

import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import Link from "next/link";
import { getShoppingCart } from "../others/useTools";
import Navcart from "./Navcart";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { Modal } from "./NavbarComponents/Modal";
import DropdownItems from "./NavbarComponents/DropdownItems";


const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const fetchCart = () => {
    const cartData = getShoppingCart();
    setCart(cartData);
  };

  useEffect(() => {
    // Fetch initial cart data
    fetchCart();
    setLoading(false);
  }, []);

  useEffect(() => {
    // Listen for changes in the cart (e.g., localStorage updates)
    const handleStorageChange = () => {
      fetchCart();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  const length = Object.keys(cart).length;

  return (
    <>

      <div
        className={`transition-all hidden md:block duration-300 ${
          showTopBar ? "h-[40px]" : "h-[0.1px]"
        }`}
      >
        {showTopBar && (
          <div className="flex justify-between bg-[#F3F3F3] p-1">
            <div>
              <h2 className="text-white p-2 flex justify-center items-center gap-2 px-2 text-sm bg-black font-bold">
                <span className="text-yellow-300 text-xl">
                  <BsLightningChargeFill />
                </span>
                EXCLUSIVE T-SHIRTS ON SALE | Limited time only<FaArrowRight />
              </h2>
            </div>
            <div className="flex gap-3">
              <button className="w-52 bg-black p-1 text-white">
                <p className="text-white flex justify-center items-center gap-2 text-sm">Order Bulk/ Corporate Sells<FaTruck /></p>
              </button>
              <button className="w-52 bg-black p-1 items-center flex justify-center text-white">
                <p className="text-white text-sm flex items-center gap-3">Store Location<IoLocationOutline /></p>
              </button>
              <button className="w-32 bg-[#F3F3F3] p-1 text-white">
                <p className="text-slate-600 flex justify-center items-center gap-2">Help<FaRegQuestionCircle /></p>
              </button>
              <button className="w-32 bg-[#F3F3F3] p-1 text-white">
                <p className="text-blue-400 flex justify-center items-center gap-2"><IoMdExit />Login</p>
              </button>
            </div>
          </div>
        )}
      </div>

  
      <div className="navbar  md:fixed flex  justify-between z-30 bg-white py-4 md:block md:px-9">

      <div className="navbar-start flex items-center justify-between md:justify-start">
 
        <div className="md:hidden relative">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost"
        onClick={toggleDrawer}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <Modal isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>


        <Link href="/" className="md:hidden">
          <img
            className="w-36 cursor-pointer"
            src="https://fabrilife.com/img/fabrilife.svg"
            alt="Logo"
          />
        </Link>
        <Link href='/dashboard'>
        <button className="btn btn-secondary btn-xs">Das</button>
        </Link>
      </div>


      <div className="hidden  md:flex items-center justify-between w-full">

        <div className=" flex justify-center items-center gap-3">
{
  !showTopBar && (
    <div className=" relative">
    <div
      tabIndex={0}
      role="button"
      className="btn btn-ghost"
      onClick={toggleDrawer}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </div>
    <Modal isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
  </div>
  )
}
        <Link href="/" className="hidden md:block">
          <img
            className="w-52 cursor-pointer"
            src="https://fabrilife.com/img/fabrilife.svg"
            alt="Logo"
          />
        </Link>
        </div>

        {
          showTopBar && (
<>

<div className="relative hidden md:block group">
  <div className="cursor-pointer flex justify-center items-center gap-3">Shop <FaAngleDown /></div>
  {/* Dropdown Menu */}
  <div className="absolute left-0  mt-1 w-[65vw] mx-auto bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-20">
  <DropdownItems />
  </div>
</div>

          <div className="relative hidden md:block w-[600px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full pr-10 h-10 border border-gray-300 rounded-none"
          />
          <p className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
            <FaSearch />
          </p>
        </div>
</>
        )
        }


{
  
}


        <div className="z-30 flex justify-center items-center gap-5 w-auto">
          {
            !showTopBar && (
              <> <FaSearch /></>
            )
          }
          <Navcart />
        </div>
      </div>


      <div className="flex md:hidden gap-3 mr-[6vw] items-center">
        <FaSearch onClick={toggleSearch} className="cursor-pointer" />
        <Navcart />

      </div>

      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 z-20">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 border border-gray-300 rounded-md px-3"
          />
        </div>
      )}
    </div>

    </>
  );
};

export default Navbar;
