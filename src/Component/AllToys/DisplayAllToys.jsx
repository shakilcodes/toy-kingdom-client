import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAllToys = ({ toy }) => {
    const {_id,picture, toy_name, seller_name, sub_category, price, quantity } = toy;
    return (
        <div>
            <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-[350px] h-[350px] rounded-2xl' src={picture} alt="Fire Truck" /></figure>
                <div className="p-5">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Seller: {seller_name}</p>
                    <p>Sub-Category: {sub_category}</p>
                    <p>Price: ${price}</p>
                    <p>Available Quantity: {quantity}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn bg-[#EDA70E]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayAllToys;