"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { getShoppingCart } from "../others/useTools";

const Navcart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const cartData = getShoppingCart();
        setLoading(false)
        setCart(cartData);
    },[])
    const length = Object.keys(cart).length;
    if (loading) {
        return <h2 className="text-center mt-10">Loading...</h2>;
      }
    
    return (
        <div>
          
          <div className="flex justify-center pr-14 items-center gap-2">
            <Link href="/cart" className="text-xl">
              <FaCartShopping />
            </Link>
            <p className="text-white mt-4 px-1 rounded-full text-sm bg-sky-500">
             {length}
            </p>
          </div>
        </div>
    );
};

export default Navcart;