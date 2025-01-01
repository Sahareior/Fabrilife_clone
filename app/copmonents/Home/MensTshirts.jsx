'use client'
import Link from "next/link";

const MensTshirts = ({ bannerText, bannerImg, data }) => {
  if (data.length === 0) {
    return <p>Loading....</p>;
  }

  const displayedData = data.slice(0, 8);

  return (
    <div className="mt-14">
      <div className="md:flex gap-4">
     
        <div className="relative">
          <Link href="/products">
            <div className="relative md:w-[27.5vw]">
          
              <img
                src={bannerImg}
                alt="Mens Full Sleeves T-Shirts"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </div>
          </Link>
        
          <h3 className="absolute w-full bottom-4 left-6 font-bold text-white text-[21px]">
            {bannerText}
          </h3>
        </div>

       
        <div className="grid md:grid-cols-4 grid-cols-2 mt-5 md:mt-0 gap-4">
          {displayedData.map((item, index) => (
            index === 7 ? (
            
<Link key={item.id} href="/details">
  <div className="w-full relative shadow hover:shadow-md transition-shadow">
  
    <img src={item.img} alt={item.name} className="w-full h-auto" />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    

    <div className="absolute flex bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2">
      <p className="text-xs text-gray-500 line-through">${item.oldPrice}</p>
      <p className="text-sm font-semibold text-red-600">${item.price}</p>
    </div>
    
   
    <h3 className="absolute top-9 w-28 text-2xl text-white left-14">View More</h3>
  </div>
</Link>

            ) : (
         
              <Link key={item.id} href="/details">
                <div className="w-full relative shadow hover:shadow-md transition-shadow">
                  <img src={item.img} alt={item.name} className="w-full h-auto" />
                  <div className="absolute flex bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2">
                    <p className="text-xs text-gray-500 line-through">${item.oldPrice}</p>
                    <p className="text-sm font-semibold text-red-600">${item.price}</p>
                  </div>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default MensTshirts;
