import React from 'react';
import { FaAngleRight } from "react-icons/fa6"

const Fabrilife = () => {
    return (
        <div className='md:flex gap-4 mt-14 items-center'>
            <div className='space-y-3'>
                <h3 className='text-[40px] flex items-center'>FabriLife <FaAngleRight /></h3>
                <h4 className=' text-[24px]'>Because comfort and confidence go hand in hand.</h4>
                <p className='text-[16px]'>
                            We focus on carefully selecting the best clothing that is comfortable, looks great, and makes you confident.
                            Apart from the fabric, design and fit, we go through strict quality control parameters to give you what you truly deserve.
                            The power of a good outfit is how it can influence your perception of yourself.
                        </p>
            </div>
            <img className='md:w-[27vw]' src="https://fabrilife.com/image-gallery/638b1d9333f59.png" alt="" />
        </div>
    );
};

export default Fabrilife;