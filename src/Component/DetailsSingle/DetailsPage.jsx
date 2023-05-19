import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./DetailsPage.css"

const DetailsPage = () => {
    const singeToy = useLoaderData()
    console.log(singeToy)
    useEffect(()=>{
        fetch('https://toy-kingdom-server-openarahmed.vercel.app')
        .then(res => res.json())
    },[])
    const {_id, picture, toy_name, seller_name,description, sub_category, price,rating, quantity, seller_email } = singeToy;

    console.log(singeToy)
    return (
        <div className='mx-28'>
            <h1 className='text-4xl font-bold my-10 text-center'>Car's Details</h1>
            <div className='details-container'>
            <img className='h-[500px] w-[450px] mx-auto' src={picture} alt="" />
            </div>
            <p className='text-3xl font-semibold mt-10 mb-3'>{toy_name}</p>
            <p className='text-xl mt-1'><span className='font-bold'>Saller Name</span>: {seller_name}</p>
            <p className='text-xl mt-1'><span className='font-bold'>Saller Email</span>: {seller_email}</p>
            <p className='text-xl mt-1'><span className='font-bold'>Price:</span> {price}</p>
            <p className='text-xl mt-1'><span className='font-bold'>Available Quantity</span>: {quantity}</p>
            <p className='text-xl mt-1'><span className='font-bold'>Ratings:</span> {rating}</p>
            <p className='text-xl mt-1'><span className='font-bold'>Detail Description</span>: {description}</p>
        </div>
    );
};

export default DetailsPage;