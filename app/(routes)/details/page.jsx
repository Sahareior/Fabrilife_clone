import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import LoadData from "./_components/LoadData";

const Details = () => {
    const data = [
        {
          id: 1,
          name: "Polo imffffsafg",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 2,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 3,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 4,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 22,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 33,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 44,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 222,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 333,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 444,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 44e4,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        },
        {
          id: 4444,
          name: "Polo img",
          img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
        }
      ];
  return (
<div className="w-[80%] mx-auto">
<div className=" bg-gray-50 min-h-screen flex justify-center mt-6 items-center">
      <div className="flex flex-col lg:flex-row gap-9 bg-white  justify-center rounded-lg">
        {/* Product Image and Frequently Bought Together */}
        <div className="flex flex-col items-center">
          <img
            className="w-[650px] h-[650px] rounded-lg shadow-md"
            src="https://fabrilife.com/products/655b55fa1eafc-square.jpeg?v=20"
            alt="Mens Premium Sweatshirt"
          />
          <div className="mt-4 ">
            <h1 className="font-bold mb-3 text-start mr-80 text-lg">Frequently Bought Together</h1>
           <div className="bg-black w-full h-1"></div>
           <div className="flex gap-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
  {/* Product Image */}
  <img
    className="w-44 h-44 object-cover rounded-lg border border-gray-200"
    src="https://fabrilife.com/products/6743162d5c2d3-square.jpg"
    alt="Mens Premium Sports Active Wear Full Sleeve T-shirt"
  />

  {/* Product Details */}
  <div className="flex flex-col  w-full">
    {/* Product Title */}
    <h2 className="font-semibold text-lg text-gray-800 hover:text-blue-500 transition">
      Mens Premium Sports Active Wear Full Sleeve T-shirt - Kick Off
    </h2>

    {/* Price Section */}
    <div className="flex items-center gap-3 text-gray-600 mt-2">
      <p className="text-xl font-bold text-blue-500">৳ 1000</p>
      <p className="line-through text-sm">৳ 1222</p>
    </div>

    {/* Add to Cart Button */}
    <button className="mt-4 px-6 py-2 w-44 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition">
      Add to Cart
    </button>
  </div>
</div>

          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col  w-[40%] gap-4">
          <div>
            <h2 className="font-bold text-3xl text-gray-800">
              Mens Premium Sweatshirt - Delta Frost Midnight
            </h2>
            <p className="font-extrabold text-2xl text-black mt-2">৳ 640</p>
          </div>

          {/* Size Selection */}
          <div>
            <p className="font-medium text-gray-600">Select Size</p>
            <div className="flex gap-4 mt-2">
              <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition">
                M
              </button>
              <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition">
                L
              </button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition">
                +
              </button>
              <input
                type="text"
                className="w-12 text-center border rounded-md"
                placeholder="3"
              />
              <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition">
                -
              </button>
            </div>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 my-4" />

          {/* Product Description */}
          <p className="text-gray-600">
            Fabrilife Men's Premium Quality Sports t-shirts are smooth and
            comfortable. The t-shirts are made with the finest quality polyester
            fabric, perfect for casual or sports wear.
          </p>

          {/* Detailed Specifications */}
          <div>
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
            <h3 className="font-bold text-lg">
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
      <LoadData data={data}/>
      <LoadData data={data}/>
</div>
  );
};

export default Details;
