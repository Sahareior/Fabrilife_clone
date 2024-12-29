"use client"
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Data from './_components/Data';
import FilterSidebar from './_components/Filter';
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

const data1 = [
    { category: "New Arrival", count: 63 },
    { category: "New Arruyival", count: 63 },
    { category: "New Arhzrival", count: 63 },
    { category: "New Arrtyrival", count: 63 },
    { category: "New sdfArrival", count: 63 },
    { category: "Top Selling", count: 228 },
    { category: "Top Sadselling", count: 2728 },
    { category: "Top Sellidffdng", count: 26528 },
    { category: "Free Delivery", count: 541 },
    {
      category: "Mens",
      count: 943,
      subcategories: [
        {
          subcategory: "Half Sleeve T-shirt",
          count: 319,
          types: [
            { type: "Blank", count: 51 },
            { type: "Cut & Stitch", count: 24 },
            { type: "Cut & Stitch (Designer Edition)", count: 28 },
            { type: "Drop Shoulder T-shirt", count: 7 },
            { type: "Printed", count: 151 },
          ],
        },
        {
          subcategory: "Full Sleeve T-shirt",
          count: 143,
          types: [
            { type: "Blank", count: 46 },
            { type: "Cut & Stitch", count: 18 },
            { type: "Cut & Stitch (Designer Edition)", count: 32 },
            { type: "Printed", count: 47 },
          ],
        },
        {
          subcategory: "Shirt",
          count: 52,
          types: [
            { type: "Casual Shirt", count: 38 },
            { type: "Formal Shirt", count: 14 },
          ],
        },
      ],
    },
  ];
  

const page = () => {
    const [filteredData, setFilteredData] = useState(data);

    const handleFilterChange = (filters) => {
      if (filters.length === 0) {
        setFilteredData(data); // Show all if no filters are selected
      } else {
        setFilteredData(data.filter((item) => filters.includes(item.category)));
      }
    };
    return (
        <div className="w-full h-screen mx-auto px-10 mt-20">
        <div className="flex gap-24">
          {/* Fixed Sidebar */}
          <div className="w-[20%] fixed h-[90vh] overflow-y-auto">
            <FilterSidebar data={data1} onFilterChange={handleFilterChange} />
          </div>
      
          {/* Main Content */}
          <div className="w-[80%] ml-[20%]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full pr-10 h-10 border border-gray-300 rounded-none"
              />
              <p className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
                <FaSearch />
              </p>
            </div>
            <Data data={data} />
          </div>
        </div>
      </div>
      
    );
};

export default page;