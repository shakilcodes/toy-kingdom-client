import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAllToys from './DisplayAllToys';

const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div className='mx-28'>
            <h1 className='mt-10 text-4xl text-center'>All Toys</h1>
            <div className='grid grid-cols-2 my-24 justify-center items-center'>
            {
                toys.map(d => 
                <DisplayAllToys
                key={d._id}
                toy={d}
                ></DisplayAllToys>)
            }
            </div>
        </div>
    );
};

export default AllToys;