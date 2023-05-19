import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAllToys = ({ toy }) => {
    const {_id,picture, toy_name, seller_name, sub_category, price, quantity } = toy;
    return (
        <div>
            <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-72 h-72' src="./../../../Toys/truck 1.jpeg" alt="Fire Truck" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Seller: {seller_name}</p>
                    <p>Sub-Category: {sub_category}</p>
                    <p>Price: ${price}</p>
                    <p>Available Quantity: {quantity}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayAllToys;