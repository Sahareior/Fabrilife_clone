"use client"

const LoadData = ({data,selectedItem}) => {
    return (
        <div className="mt-12">
           <p className='text-xl '> You may also like</p>
           <div className="w-full h-1 bg-slate-700"></div>
           <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
        {data.length>0 ? (
          data.map((item) => (
            <div key={item.id} onClick={()=> selectedItem(item)}>
                    <div className="w-full cursor-pointer relative">
                    <img src={item.img} alt={item.name} className="w-full h-auto" />
                    <h4 className="absolute bottom-0 left-1/2 transform -translate-x-1/2  bg-white px-4 py-1 w-40 text-center font-medium text-sm">
                    <div className="flex items-center justify-center mx-auto text-center gap-3 text-gray-600 mt-2">
                        <p className="text-xs font-bold text-slate-500">৳{item.price}</p>
                        <p className="line-through text-red-500 font-bold text-sm">৳{item.oldPrice}</p>
                      </div>
                    </h4>
                  </div>
                    <button className="btn bg-black btn-sm text-white w-full">Add to Cart</button>
            </div>
                ))
        ):(
          <p>Loading.....</p>
        )}
      </div>
        </div>
    );
};

export default LoadData;