"use client"
import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Data from './_components/Data';
import FilterSidebar from './_components/Filter';
const data = [
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
            { type: "Cut & Stitch ", count: 28 },
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
            { type: "Cut & Stitch ", count: 32 },
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
     const [loading, setLoading] = useState(true);
        useEffect(()=>{
         
            setLoading(false)
        
        },[])
      
        if (loading) {
            return <h2 className="text-center mt-10">Loading...</h2>;
          }

    const handleFilterChange = (filters) => {
      if (filters.length === 0) {
        setFilteredData(data); 
      } else {
        setFilteredData(data.filter((item) => filters.includes(item.category)));
      }
    };
    return (
        <div className="w-full  mx-auto md:mt-20">
          
        <div className="flex gap-2">
   
          <div className="w-[25%] h-[90vh] hidden md:block overflow-y-auto sticky top-20">
            <FilterSidebar data={data1} onFilterChange={handleFilterChange} />
          </div>
      
    
          <div className="md:w-[75%] mx-auto w-full">
            <div className="relative w-full  md:w-[94%] mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full  h-10 border border-gray-300 rounded-none"
              />
              <p className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
                <FaSearch />
              </p>
            </div>
            <div className=''>
            <Data data={data} />
            </div>
          </div>
        </div>
      </div>
      
      
    );
};

export default page;