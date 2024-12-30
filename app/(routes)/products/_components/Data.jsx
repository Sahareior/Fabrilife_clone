'use client';

import Link from "next/link"; 
import { useState } from "react";
import Modal from "./Modal";

const Data = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  if (data.length < 1) {
    return <p>Loading....</p>;
  }

  const calculateDiscounts = (price, oldPrice) => {
    let discount = 0;
    if (oldPrice > price) {
      discount = oldPrice - price;
    }
    return discount;
  };

  const handleBuyNow = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="mt-5">
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pr-4 sm:pr-6 lg:pr-9">
        {data.map((item) => (
          <div key={item.id} className="w-56">
            <img src={item.img} alt={item.name} className="w-full h-auto" />
            <h4 className="text-center font-bold">{item.name}</h4>
            <div className="space-y-3 mt-2">
              <p className="bg-black text-white text-center p-1 w-20 mx-auto text-xs">
                Save {calculateDiscounts(item.price, item.oldPrice)} tk
              </p>
              <div className="flex items-center justify-center mx-auto text-center gap-3 text-gray-600 mt-2">
                <p className="text-xl font-bold text-slate-500">৳{item.price}</p>
                <p className="line-through text-red-500 font-bold text-sm">৳{item.oldPrice}</p>
              </div>
              <button 
                className="btn bg-black text-white btn-sm w-full" 
                onClick={() => handleBuyNow(item)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal open={open} onClose={closeModal} item={selectedItem} />
    </div>
  );
};

export default Data;
