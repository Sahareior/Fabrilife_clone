'use client'
import Link from "next/link"; 

const Data = ({data}) => {
    if(data.length<0){
        return(
            <p>Loading....</p>
        )
    }
    return (
        <div className="mt-10">
  <div className="grid grid-cols-4 gap-y-4 px-9">
        {data.map((item) => (
          <div key={item.id} className="w-56 relative">
            <img src={item.img} alt={item.name} className="w-full h-auto" />
            <h4 className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl bg-white px-4 py-1 w-40 text-center font-medium text-sm">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
      </div>
    );
};

export default Data;