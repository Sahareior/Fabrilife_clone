"use client"

const LoadData = ({data}) => {
    return (
        <div className="mt-12">
           <p className='text-xl '> You may also like</p>
           <div className="w-full h-1 bg-slate-700"></div>
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
        </div>
    );
};

export default LoadData;