"use client";

import Link from "next/link";

const Threebanner = ({ data }) => {
  if (data.length === 0) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className="md:flex gap-4 justify-center items-center mt-16">
        {data.length > 0 ? (
          data.map((item) => (
        <Link key={item.id} href="/products">
            <div  className="relative">
              <div className="relative mt-5 md:mt-0 md:w-[27.5vw]">
                {/* Image with gradient overlay for better text visibility */}
                <img
                  className="w-full opacity-90 shadow-lg"
                  src={item.img}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
              </div>
              {/* Text */}
              <h3 className="absolute w-full bottom-4 left-2/3 ml-5 transform -translate-x-1/2 font-bold text-white text-xl">
                {item.name}
              </h3>
            </div>
        </Link>
          ))
        ) : (
          <p>Loading banners...</p>
        )}
      </div>
    </div>
  );
};

export default Threebanner;
