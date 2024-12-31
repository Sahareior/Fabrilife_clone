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
import { FaTruck } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

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
      {/* Add a dynamic height adjustment */}
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

      {/* Navbar */}
      <div className="navbar hidden md:block fixed z-30 bg-white px-9 py-4">
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
<Navcart />
        </div>
      </div>
    </>
  );
};

export default Navbar;
