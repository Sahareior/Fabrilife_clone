"use client"
import React, { useEffect, useState } from 'react';
import Like from './_components/Like';

const data = [
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
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 899,
      price: 200
    },
    {
      id: 3,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 399,
      price: 140
    },
    {
      id: 4,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 799,
      price: 230
    },
    {
      id: 22,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 2329,
      price: 1030
    },
    {
      id: 33,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 2299,
      price: 1020
    },
    {
      id: 44,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 399,
      price: 244
    },
    {
      id: 222,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 221,
      price: 133
    },
    {
      id: 333,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 234,
      price: 112
    },
    {
      id: 444,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 299,
      price: 200
    },
    {
      id: 44e4,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 4299,
      price: 3200
    },
    {
      id: 4444,
      name: "Polo img",
      img: "https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg",
      oldPrice: 299,
      price: 100
    }
  ];

const page = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
     
        setLoading(false)
    
    },[])
  
    if (loading) {
        return <h2 className="text-center mt-10">Loading...</h2>;
      }
    return (
        <div className='h-full py-24 w-[86%] mx-auto mt-14'>
           <h2 className='text-center text-3xl font-bold'>Your Cart</h2>
           <div className="overflow-x-auto mt-4">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Products</th>
        <th>Unit Price</th>
        <th>Size</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>

        <td>
          <div className="flex gap-3">
            <div className="">
              <div className=" h-32 w-32">
                <img
                  src="https://fabrilife.com/products/62178453a62ab-square.jpg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-sky-500 text-sm">Lorem ipsum dolor sit amet elit. Perferendis, ipsam.</div>
           
            </div>
          </div>
        </td>
        <td>
        <div className="flex items-center justify-center mx-auto text-center gap-3 text-gray-600 mt-2">
                <p className="text-xs font-bold text-slate-500">৳1000</p>
                <p className="line-through text-red-500 font-bold text-sm">৳1222</p>
              </div>
        </td>
        <td>Premium L</td>
        <td>1</td>
        <td>2111</td>
        <th>
          <button className="btn btn-ghost btn-xs">delete</button>
        </th>
      </tr>

    </tbody>
    {/* foot */}
  </table>
</div>
<div className='flex flex-col gap-7 justify-center items-center'>
<h2 className='text-center mt-5 text-2xl font-bold'>Total Amount($) <span className='text-green-500'>695</span></h2>
<button className='btn btn-primary w-44 text-center'>Place Order</button>
<button className='btn btn-secondary w-44 text-center'>Place Order</button>
</div>
<h2 className='bg-slate-200 mt-9 p-3 text-center'>* If you wish to make a bulk order, please call us at +8809677666888 or email at cs@fabrilife.com for more information.</h2>
<div className=' mt-14 mb-24'>
<h2 className='text-center font-bold text-2xl mb-11'>You May Also Like</h2>
</div>
<Like data={data} />
        </div>
    );
};

export default page;