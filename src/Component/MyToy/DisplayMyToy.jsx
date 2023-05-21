import React from 'react';
import { Link } from 'react-router-dom';
import "./MyToys.css"

const DisplayMyToy = ({ toy, handleDelete }) => {
    const { _id, picture, seller_email, rating, toy_name, seller_name, sub_category, price, quantity, description } = toy;
    console.log(toy)
   
    return (
        <div className='myToys'>
            <div>
                <img className='h-64 w-64' src={picture} alt="" />
            </div>

            <div>
                <h1 className='text-2xl font-bold'>{toy_name}</h1>
                <h1 className='text-xl'>Seller: {seller_name}</h1>
                <h1>Seller email: {seller_email}</h1>
                <h1>Sub-Toys: {sub_category}</h1>
                <h1>Ratings: {rating}</h1>
            </div>
            <div>
                <h1><span className='text-2xl font-bold'>Description</span>: {description}</h1>
            </div>
            <div className='flex flex-col gap-2'>
               <Link to={`/update/${_id}`}> <button  className='btn w-28 bg-[#EDA70E]'>Update</button></Link>
                <button onClick={() => handleDelete(_id)} className='btn bg-red-500 w-28'>Remove</button>
            </div>

        </div>
    );
};

export default DisplayMyToy;