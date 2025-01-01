"use client";

import Link from "next/link";
import BeforeFooter from "./BeforeFooter";
import Fabrilife from "./Fabrilife";
import MensTshirts from "./MensTshirts";
import Threebanner from "./Threebanner";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "Polo imffffsafg",
    img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg"
  },
  {
    id: 2,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/61a794e1aa1f4-square.jpg"
  },
  {
    id: 3,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/638741f4b169a-square.jpg"
  },
  {
    id: 4,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/638741f4b7222-square.jpg"
  },
  {
    id: 22,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/638741f4b7330-square.jpg"
  },
  {
    id: 33,
    name: "Polo imge 33",
    img: "https://fabrilife.com/image-gallery/638741f4d4651-square.jpg"
  },
  {
    id: 44,
    name: "Polo img 44",
    img: "https://fabrilife.com/image-gallery/61a794e1a5fec-square.jpg"
  },
  {
    id: 222,
    name: "Polo img 333",
    img: "https://fabrilife.com/image-gallery/61a794e1a15bc-square.jpg"
  },
  {
    id: 333,
    name: "Polo img 212",
    img: "https://fabrilife.com/products/65a7c56293326-square.jpg"
  },
  {
    id: 444,
    name: "Polo img 1121",
    img: "https://fabrilife.com/products/675ea4954d90e-square.jpg"
  },
  {
    id: 44e4,
    name: "Polo img 444" ,
    img: "https://fabrilife.com/products/67611c88ed014-square.jpg"
  },
  {
    id: 4444,
    name: "Polo img 300",
    img: "https://fabrilife.com/products/666ad49c8dc2f-square.jpg"
  }
];

const bannerData = [
  {
    id:1,
    img: "https://fabrilife.com/image-gallery/638a77dce126d-square.jpg",
    name: "Painted Short Sleeve"
  },
  {
    id:2,
    img: "https://fabrilife.com/image-gallery/638938e7d0d50-square.jpg",
    name: "Painted Short Sleeve"
  },
  {
    id:3,
    img: "https://fabrilife.com/image-gallery/638a77dc9c88d-square.jpg",
    name: "Painted Short Sleeve"
  },
]
const bannerData2 = [
  {
    id:1,
    img: "https://fabrilife.com/image-gallery/638a77dcd7e6e-square.jpg",
    name: "Painted Short Sleeve"
  },
  {
    id:2,
    img: "https://fabrilife.com/image-gallery/638a77dccfbf4-square.jpg",
    name: "Painted Short Sleeve"
  },
  {
    id:3,
    img: "https://fabrilife.com/image-gallery/63893746ac793-square.jpg",
    name: "Painted Short Sleeve"
  },
]
const bannerData3 = [
  {
    id:1,
    img: "https://fabrilife.com/image-gallery/638a77dc9f8e6-square.jpg",
    name: "Painted Short Sleeve"
  },
  {
    id:2,
    img: "https://fabrilife.com/image-gallery/638a77dd192d3-square.jpg",
    name: "Painted Short Sleeve"
  },
  {
    id:3,
    img: "https://fabrilife.com/image-gallery/638a77dcdeb6f-square.jpg",
    name: "Painted Short Sleeve"
  },
]

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
    id: 4444,
    name: "Polo img 300",
    img: "https://fabrilife.com/products/666ad49c8dc2f-square.jpg",
    oldPrice: 299,
    price: 100
  }
];

const NewArrivals = () => {
   const [loading,setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
    },[])
    if(loading === false){
      return(
        <p>daa</p>
      )
    }
 const banner1 = "https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg"
 const banner2 = "https://fabrilife.com/image-gallery/6389374585bcd-square.jpg"
 const banner3 = "https://fabrilife.com/image-gallery/638a77dd011dc-square.jpg"
 const banner4 = "https://fabrilife.com/image-gallery/638a77dcdd7bb-square.jpg"
 const banner5 = "https://fabrilife.com/image-gallery/638a77dcea895-square.jpg"
 const banner1Text = "Mens Full Sleeves T-Shirts"
  return (
    <div className="md:w-[86%] w-[95%] overflow-x-hidden mx-auto">
      <div className="bg-[#FCF4E9] p-6">
        <h2 className="text-center text-[36px] uppercase lato-b  text-yellow-700 font-semibold">New Arrival</h2>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4 mt-6">
        {data.map((item) => (
            <Link key={item.id} href="/products" >
          <div key={item.id} className="w-full relative">
            <img src={item.img} alt={item.name} className="w-full h-auto" />
            <h4 className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl bg-white px-4 py-1 w-40 text-center font-medium text-sm">
              {item.name}
            </h4>
          </div>
          </Link>
        ))}
      </div>
      <div className="md:flex gap-4 justify-center items-center mt-16">
  {bannerData.map((item) => (
      <Link key={item.id} href="/products" >
    <div  className="relative mt-5 md:mt-0"> 
      <div className="relative md:w-[27.5vw] ">
        {/* Image with gradient overlay for better text visibility */}
        <img
          className="w-full opacity-90 shadow-lg"
          src={item.img}
          alt={item.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      </div>
      {/* Text */}
      <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-bold text-white text-xl">
        {item.name}
      </h3>
    </div>
    </Link>
  ))}
</div>
<MensTshirts bannerImg={banner1} bannerText={banner1Text} data={data1}/>
<Fabrilife />
<MensTshirts bannerImg={banner2} bannerText={banner1Text} data={data1}/>
<Threebanner data={bannerData2}/>
<h2>Mens Shortssss</h2>
<Threebanner data={bannerData3}/>
<MensTshirts bannerImg={banner3} bannerText={banner1Text} data={data1}/>
<MensTshirts bannerImg={banner4} bannerText={banner1Text} data={data1}/>
<div className="bg-[#CCF7F1] text-center mt-10 py-1 px-5">
  <h2 className="text-[14px] text-[#009688]">The Best Quality Socks you can find in Bangladesh</h2>
  <h2 className="text-[32px] font-bold text-[#009688]">Premium Antibacterial Socks</h2>
  <p className="text-[14px] text-[#009688]">Visit Store</p>
</div>
<MensTshirts bannerImg={banner5} bannerText={banner1Text} data={data1}/>
<BeforeFooter />

    </div>
  );
};

export default NewArrivals;
