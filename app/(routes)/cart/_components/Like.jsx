import Link from 'next/link';
import React from 'react';

const Like = ({data}) => {
    return (
        <div className='md:mt-24 mt-14 border border-slate-300'>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-y-10 gap-4 py-1 mt-12">
        {data.length>0? (
            data.map((item) => (
                <Link key={item.id} href="/products" >
              <div key={item.id} className="w-full ">
                <img src={item.img} alt={item.name} className="w-full h-auto" />
    <div className='flex justify-center items-center flex-col gap-1'>
    <h4 className="  bg-white font-bold text-[16px]">
                  {item.name}
                </h4>
               <div className='flex justify-center items-center flex-col'>
               <h3 className='text-slate-400'>Starts From</h3>
               <p>1300</p>
               </div>
    </div>
    <div className='flex justify-between px-5 mt-4'>
        <button className='btn bg-red-500 opacity-40 hover:opacity-100 btn-xs'>Save</button>
        <button className='btn bg-slate-500 btn-ghost btn-xs'>Share</button>
    </div>
              </div>
              </Link>
            ))
        )  :  (
            <p>Loading</p>
        )}
      </div>
        </div>
    );
};

export default Like;