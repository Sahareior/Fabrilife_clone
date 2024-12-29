"use client";

import BeforeFooter from "./BeforeFooter";
import Fabrilife from "./Fabrilife";
import MensTshirts from "./MensTshirts";
import Threebanner from "./Threebanner";

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
    price: 444,
    discountPrice: 333
  },
  {
    id: 2,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
    price: 444,
    discountPrice: 333
  },
  {
    id: 3,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
    price: 444,
    discountPrice: 333
  },
  {
    id: 4,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
    price: 444,
    discountPrice: 333
  },
  {
    id: 22,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
    price: 444,
    discountPrice: 333
  },
  {
    id: 33,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
    price: 444,
    discountPrice: 333
  },
  {
    id: 44,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
    price: 444,
    discountPrice: 333
  },
  {
    id: 222,
    name: "Polo img",
    img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
    price: 444,
    discountPrice: 333
  }
];

const NewArrivals = () => {
 const banner1 = "https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg"
 const banner2 = "https://fabrilife.com/image-gallery/6389374585bcd-square.jpg"
 const banner3 = "https://fabrilife.com/image-gallery/638a77dd011dc-square.jpg"
 const banner4 = "https://fabrilife.com/image-gallery/638a77dcdd7bb-square.jpg"
 const banner5 = "https://fabrilife.com/image-gallery/638a77dcea895-square.jpg"
 const banner1Text = "Mens Full Sleeves T-Shirts"
  return (
    <div className="w-[86%] mx-auto">
      <div className="bg-[#FCF4E9] p-6">
        <h2 className="text-center text-3xl uppercase text-yellow-700 font-semibold">New Arrival</h2>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-6">
        {data.map((item) => (
          <div key={item.id} className="w-full relative">
            <img src={item.img} alt={item.name} className="w-full h-auto" />
            <h4 className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl bg-white px-4 py-1 w-40 text-center font-medium text-sm">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-center items-center mt-16">
  {bannerData.map((item) => (
    <div key={item.id} className="relative"> 
      <div className="relative w-[27.5vw] ">
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
<div className="bg-[#CCF7F1] text-center mt-10 p-5">
  <h2 className="text-xl">The Best Quality Socks you can find in Bangladesh</h2>
  <h2 className="4xl">Premium Antibacterial Socks</h2>
  <p>Visit Store</p>
</div>
<MensTshirts bannerImg={banner5} bannerText={banner1Text} data={data1}/>
<BeforeFooter />

    </div>
  );
};

export default NewArrivals;
