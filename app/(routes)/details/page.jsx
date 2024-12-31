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
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Ensure minimum of 1
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value); // Update if the value is a valid number and >= 1
    }
  };



  const addToCart = (id) => {
    if (!id) {
      addToDb(12, quantity); // Pass quantity for a default item ID
      return;
    }
    addToDb(id, quantity); // Pass the correct ID and quantity
  };
console.log(selectedData)
  return (
<div className="w-full md:mt-16 md:p-7 p-1 md:w-[87%] mx-auto">
<div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row gap-6 items-center lg:items-start mt-6">
      <div className="flex flex-col lg:flex-row gap-5 bg-white  justify-center rounded-lg">
        {/* Product Image and Frequently Bought Together */}
        <div className="flex md:w-[570px] flex-col items-center">
          <img
            className=" md:h-[650px] h-full w-full rounded-lg shadow-md"
            src={displayItem?.img}
            alt="Mens Premium Sweatshirt"
          />
          <div className="mt-4 ">
            <h1 className=" mb-3  text-lg">Frequently Bought Together</h1>
           <div className="bg-black w-full h-1"></div>
           <div className="flex  md:gap-6 md:p-4 gap-2 p-1 bg-white rounded-lg shadow-md hover:shadow-lg transition">
  {/* Product Image */}
  <img
    className="w-40 bg-black h-44 object-cover rounded-lg border border-gray-200"
    src="https://fabrilife.com/products/6743162d5c2d3-square.jpg"
    alt="Mens Premium Sports Active Wear Full Sleeve T-shirt"
  />

  {/* Product Details */}
  <div className="flex flex-col  w-full">
    {/* Product Title */}
    <h2 className=" text-[16px] text-gray-800 hover:text-blue-500 transition">
      Mens Premium Sports Active Wear Full Sleeve T-shirt - Kick Off
    </h2>

    {/* Price Section */}
    <div className="flex items-center gap-3 text-gray-600 mt-2">
      <p className="text-[16px] font-bold text-blue-500">৳ 1000</p>
      <p className="line-through text-sm">৳ 1222</p>
    </div>

    {/* Add to Cart Button */}
    <button onClick={()=> addToCart(9)} className="mt-4 px-6 py-2 w-44 bg-black w-xs text-white font-medium rounded-md hover:bg-blue-600 transition">
      Add to Cart
    </button>
  </div>
</div>

          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col w-full md:w-[50%] gap-4">
          <div>
            <h2 className=" text-[24px] text-gray-800">
           {displayItem?.name}
            </h2>
            <p className="font-extrabold text-2xl text-black mt-2">৳ {displayItem?.price}</p>
          </div>

          {/* Size Selection */}
          <div>
            <p className="font-medium text-gray-600">Select Size</p>
            <div className="flex gap-4 mt-2">
              <button className="px-4 py-2 border rounded-md bg-white  hover:bg-gray-200 transition">
                M
              </button>
              <button className="px-4 py-2 border rounded-md bg-white  hover:bg-gray-200 transition">
                L
              </button>
              <button className="px-4 py-2 border rounded-md bg-white  hover:bg-gray-200 transition">
                XL
              </button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
      <div className="flex items-center gap-2">
        {/* Decrease Button */}
        <button
          onClick={decreaseQuantity}
          className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition"
        >
          -
        </button>

        {/* Quantity Input */}
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          className="w-12 text-center border rounded-md"
          min="1"
        />

        {/* Increase Button */}
        <button
          onClick={increaseQuantity}
          className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button onClick={()=> addToCart()} className=" px-4 py-2 bg-black w-sm text-white rounded-md hover:bg-blue-600 transition">
        Add to Cart
      </button>
    </div>

          {/* Divider */}
          <hr className="border-gray-300 my-4" />

          {/* Product Description */}
          <p className="text-gray-600 text-[14px] ">
            Fabrilife Men's Premium Quality Sports t-shirts are smooth and
            comfortable. The t-shirts are made with the finest quality polyester
            fabric, perfect for casual or sports wear.
          </p>

          {/* Detailed Specifications */}
          <div className="text-gray-600 text-[14px] ">
            <h3 className="font-bold text-lg">Detailed Specification:</h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>High-quality polyester fabric</li>
              <li>Soft and comfortable</li>
              <li>Perfect for casual or sports wear</li>
              <li>Durable and long-lasting</li>
              <li>Machine washable</li>
            </ul>
          </div>

          {/* Size Chart */}
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
      <h1 className="text-center text-blue-400 hover:underline">Share</h1>
      <div className="flex gap-5 justify-center items-center">
<p className="text-2xl"><FaInstagram /></p>
<p className="text-2xl"><IoLogoTwitter /></p>
      </div>
        </div>
      </div>
    </div>
      <LoadData selectedItem={selectedItem} data={data1}/>
      <LoadData  selectedItem={selectedItem} data={data1}/>
</div>
  );
};

export default Details;
