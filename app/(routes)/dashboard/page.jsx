import prisma from '@/lib/prisma';
import React from 'react';

const page = async () => {

    const course = await prisma.product.findMany({
        orderBy:{
            id:'asc'
        }
    })

    console.log(course)
    return (
        <div className='h-screen flex justify-center items-center'>
            <h4>ttt</h4>
        </div>
    );
};

export default page;