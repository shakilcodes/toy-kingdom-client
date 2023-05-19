import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAllToys from './DisplayAllToys';

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className='mx-28'>
            <h1 className='mt-10 text-4xl text-center font-bold'>All Toys</h1>
            <div className='grid grid-cols-3 my-24 justify-center gap-5 items-center'>
            {
                toys?.map(d => 
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