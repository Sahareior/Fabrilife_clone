"use client";

const Threebanner = ({ data }) => {
  if (data.length === 0) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className="flex gap-4 justify-center items-center mt-16">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="relative">
              <div className="relative w-[27.5vw]">
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
          ))
        ) : (
          <p>Loading banners...</p>
        )}
      </div>
    </div>
  );
};

export default Threebanner;
