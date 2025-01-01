"use client"
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import LoadData from "./_components/LoadData";
import { addToDb } from "@/app/copmonents/others/useTools";
import useStore from "@/app/store/useStore";


const data1 = [
  {
    id: 1,
    name: "Polo imffffsafg",
    img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
    oldPrice: 299,
    price: 100
  },
  {
    id: 2,
       name: "Polo img",
    img: "https://fabrilife.com/image-gallery/61a794e1aa1f4-square.jpg",
    oldPrice: 899,
    price: 200
  },
  {
    id: 3,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/638741f4b169a-square.jpg",
    oldPrice: 399,
    price: 140
  },
  {
    id: 4,
   name: "Polo img",
    img: "https://fabrilife.com/image-gallery/638741f4b7222-square.jpg",
    oldPrice: 799,
    price: 230
  },
  {
    id: 22,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/638741f4b7330-square.jpg",
    oldPrice: 2329,
    price: 1030
  },
  {
    id: 33,
    name: "Polo imge 33",
    img: "https://fabrilife.com/image-gallery/638741f4d4651-square.jpg",
    oldPrice: 2299,
    price: 1020
  },
  {
    id: 44,
    name: "Polo img 44",
    img: "https://fabrilife.com/image-gallery/61a794e1a5fec-square.jpg",
    oldPrice: 399,
    price: 244
  },
  {
    id: 222,
    name: "Polo img 333",
    img: "https://fabrilife.com/image-gallery/61a794e1a15bc-square.jpg",
    oldPrice: 221,
    price: 133
  },
  {
    id: 333,
    name: "Polo img 212",
    img: "https://fabrilife.com/products/65a7c56293326-square.jpg",
    oldPrice: 234,
    price: 112
  },
  {
    id: 444,
    name: "Polo img 1121",
    img: "https://fabrilife.com/products/675ea4954d90e-square.jpg",
    oldPrice: 299,
    price: 200
  },
  {
    id: 44e4,
    name: "Polo img 444" ,
    img: "https://fabrilife.com/products/67611c88ed014-square.jpg",
    oldPrice: 4299,
    price: 3200
  },
  {
    id: 4444,
    name: "Polo img 300",
    img: "https://fabrilife.com/products/666ad49c8dc2f-square.jpg",
    oldPrice: 299,
    price: 100
  }
];

const Details = () => {

  const selectedData = useStore((state) => state.selectedItem);
  const [quantity, setQuantity] = useState(1);
  const [displayItem, setDisplayItem] = useState(selectedData);

  const selectedItem = (item) => {
    setDisplayItem(item);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); 
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value); 
    }
  };



  const addToCart = (id) => {
    if (!id) {
      addToDb(12, quantity); 
      return;
    }
    addToDb(id, quantity); 
  };
console.log(selectedData)
  return (
<div className="w-full md:mt-16 md:p-7 p-1 md:w-[87%] mx-auto">
  <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row gap-6 items-center lg:items-start mt-6">
    <div className="flex flex-col lg:flex-row gap-5 bg-white justify-center rounded-lg shadow-lg p-4">

      <div className="flex md:w-[570px] flex-col items-center">
        <img
          className="md:h-[650px] h-full w-full rounded-lg shadow-md hover:shadow-lg transition"
          src={displayItem?.img}
          alt="Mens Premium Sweatshirt"
        />
        <div className="mt-4 w-full">
          <h1 className="mb-3 text-lg font-semibold">Frequently Bought Together</h1>
          <div className="bg-gray-300 w-full h-[2px] mb-4"></div>
          <div className="flex md:gap-6 md:p-4 gap-2 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          
            <img
              className="w-40 h-44 object-cover rounded-lg border border-gray-200"
              src="https://fabrilife.com/products/6743162d5c2d3-square.jpg"
              alt="Mens Premium Sports Active Wear Full Sleeve T-shirt"
            />

          
            <div className="flex flex-col w-full">
              <h2 className="text-sm font-medium text-gray-800 hover:text-blue-500 transition">
                Mens Premium Sports Active Wear Full Sleeve T-shirt - Kick Off
              </h2>
              <div className="flex items-center gap-3 text-gray-600 mt-2">
                <p className="text-sm font-bold text-blue-500">৳ 1000</p>
                <p className="line-through text-xs">৳ 1222</p>
              </div>
              <button
                onClick={() => addToCart(9)}
                className="mt-4 px-4 py-2 bg-black w-32 text-white text-sm font-medium rounded-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-[50%] gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{displayItem?.name}</h2>
          <p className="text-2xl font-extrabold text-black mt-2">৳ {displayItem?.price}</p>
        </div>

     
        <div>
          <p className="font-medium text-gray-600">Select Size</p>
          <div className="flex gap-4 mt-2">
            {["M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

  
        <div className="flex gap-4 ">
          <div className="flex items-center border border-slate-500 gap-2">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 border rounded-md bg-white text-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              className="w-12 text-center border rounded-md"
              min="1"
            />
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 border rounded-md bg-white font-bold text-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            >
              +
            </button>
          </div>
          <button
            onClick={() => addToCart()}
            className="px-4 py-2  text-white rounded-none bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Add to Cart
          </button>
        </div>

       
        <hr className="border-gray-300 my-4" />
  
        <p className="text-sm text-gray-600">
          Fabrilife Men's Premium Quality Sports t-shirts are smooth and comfortable. The t-shirts are made with the
          finest quality polyester fabric, perfect for casual or sports wear.
        </p>

        <div className="text-sm text-gray-600">
          <h3 className="font-bold text-lg">Detailed Specification:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>High-quality polyester fabric</li>
            <li>Soft and comfortable</li>
            <li>Perfect for casual or sports wear</li>
            <li>Durable and long-lasting</li>
            <li>Machine washable</li>
          </ul>
        </div>

        <div>
            <h3 className="font-bold text-[14px] ">
              Size chart - In inches (Expected Deviation &lt; 3%)
            </h3>
            <table className="mt-4 w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Size</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Chest (Round)
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Length</th>
                  <th className="border border-gray-300 px-4 py-2">Sleeve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">M</td>
                  <td className="border border-gray-300 px-4 py-2">39</td>
                  <td className="border border-gray-300 px-4 py-2">27.5</td>
                  <td className="border border-gray-300 px-4 py-2">25.25</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">L</td>
                  <td className="border border-gray-300 px-4 py-2">40.5</td>
                  <td className="border border-gray-300 px-4 py-2">28.5</td>
                  <td className="border border-gray-300 px-4 py-2">26</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">XL</td>
                  <td className="border border-gray-300 px-4 py-2">43</td>
                  <td className="border border-gray-300 px-4 py-2">29</td>
                  <td className="border border-gray-300 px-4 py-2">26.25</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2XL</td>
                  <td className="border border-gray-300 px-4 py-2">45</td>
                  <td className="border border-gray-300 px-4 py-2">30</td>
                  <td className="border border-gray-300 px-4 py-2">26.5</td>
                </tr>
              </tbody>
            </table>
          </div>

        {/* Share Section */}
        <h1 className="text-center text-blue-500 hover:underline cursor-pointer">Share</h1>
        <div className="flex gap-5 justify-center items-center text-blue-500">
          <FaInstagram className="text-2xl cursor-pointer hover:scale-110 transition" />
          <IoLogoTwitter className="text-2xl cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </div>
  </div>
  <LoadData selectedItem={selectedItem} data={data1} />
  <LoadData selectedItem={selectedItem} data={data1} />
</div>

  );
};

export default Details;
