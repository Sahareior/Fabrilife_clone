'use client'
import Link from "next/link"; 

const MensTshirts = ({bannerText,bannerImg,data}) => {
    if(data.length<0){
        return(
            <p>Loading....</p>
        )
    }
    return (
        <div className="mt-14">
        <div className="flex gap-4">
          <div className="relative">
            <div className="relative w-[27.5vw]">
              {/* Image with gradient overlay for better text visibility */}
              <img
                src={bannerImg}
                alt="Mens Full Sleeves T-Shirts"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </div>
            {/* Text */}
            <h3 className="absolute bottom-4 left-6 font-bold text-white text-xl">
              {bannerText}
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {data.length>0 ?(
                data.map((item) => (
                <Link key={item.id} href="/details">
                    <div  className="w-full relative shadow hover:shadow-md transition-shadow">
                      <img src={item.img} alt={item.name} className="w-full h-auto " />
                      <div className="absolute flex bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 ">
                        <p className="text-xs text-gray-500 line-through">${item.price}</p>
                        <p className="text-sm font-semibold text-red-600">${item.discountPrice}</p>
                      </div>
                    </div>
                </Link>
                  ))
            ):(
                <p>Loading.....</p>
            )}
          </div>
        </div>
      </div>
    );
};

export default MensTshirts;