"use client";

import Link from "next/link";

const Banner = () => {
  const data = [
    {
      id: 22,
      name: "Shop Now",
    },
    {
      id: 1,
      name: "Men",
    },
    {
      id: 2,
      name: "Women",
    },
    {
      id: 3,
      name: "Kids",
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner Image */}
      <img
        className="w-full h-auto"
        src="https://fabrilife.com/image-gallery/6739ecf850671.jpg"
        alt="Banner"
      />

      {/* Buttons and App Promo Section */}
      <div className="mt-3 bg-[#F7F7F7] flex flex-col sm:flex-row items-center w-full px-4 sm:px-9 justify-around gap-4">
        {/* Buttons */}
        <div className="flex flex-wrap sm:w-1/2 justify-around gap-3">
          {data.length > 0 ? (
            data.map((items) => (
              <Link key={items.id} href="/details">
                <button className="btn btn-xs md:btn-sm btn-ghost">
                  <p className="md:text-lg roboto-regular text-[16px]">{items.name}</p>
                </button>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* App Promo */}
        <div className="flex flex-col sm:flex-row sm:gap-3 items-center text-center">
          <p className="text-sm sm:text-xl bg-[#F1F1F1] px-3 py-2 sm:w-56">
            Get 5% off an app
          </p>
          <div className="flex gap-3">
            <img
              className="w-24 sm:w-auto"
              src="https://fabrilife.com/img/newhome/playstorebadge.svg"
              alt="Play Store"
            />
            <img
              className="w-24 sm:w-auto"
              src="https://fabrilife.com/img/newhome/fabrilifeappstore.svg"
              alt="App Store"
            />
          </div>
        </div>
      </div>

      {/* Text Notice */}
      <div className="bg-[#E0F7FA] p-3 w-[90%] sm:w-[86%] mx-auto mt-2 mb-2 text-[16px] sm:text-base">
        <p>
          <strong>Event T-shirt:</strong> T-shirt/Clothing with your brand logo
          or design? We are delivering worldwide at unbeatable prices.{" "}
          <strong>Click here</strong>
        </p>
      </div>
    </div>
  );
};

export default Banner;
