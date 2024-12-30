"use client"

import Link from "next/link";

const Banner = () => {
    const data = [
        {
            id: 22,
            name:"Shop Now"
        },
        {
            id: 1,
            name:"Men"
        },
        {
            id: 2,
            name:"Women"
        },
        {
            id: 3,
            name:"Kids"
        },
    ]
    return (
        <div className="bg-white">
            <img className='w-full' src="https://fabrilife.com/image-gallery/6739ecf850671.jpg" alt="" />

            <div className=" mt-3 bg-[#F7F7F7] flex w-full px-9 justify-around">
                <div className="flex w-1/2 justify-around">
                {
                    data.map(items => (
                       <Link  key={items.id} href="/details">
                        <button className="btn btn-ghost "><p className="text-xl">{items.name}</p></button>
                       </Link>
                    ))
                }
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-xl bg-[#F1F1F1] z-20 px-3 w-56 ">Get 5% off an app</p>
                    <img src="https://fabrilife.com/img/newhome/playstorebadge.svg" alt="" />
                    <img src="https://fabrilife.com/img/newhome/fabrilifeappstore.svg" alt="" />
                </div>
            </div>
            {/* Text notice */}
            <div  className="bg-[#E0F7FA] p-3 w-[86%] mx-auto mt-4">
                <p className="">
                    <strong>Event T-shirt</strong>
                T-shirt/Clothing with your brand logo or design? We are delivering worldwide at unbeatable prices.
                    <strong>click here</strong>   
                </p>
            </div>
        </div>
    );
};

export default Banner;