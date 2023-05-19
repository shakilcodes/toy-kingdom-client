import React from 'react';
import { Link } from 'react-router-dom';

const FireTruck = ({ fireTruck }) => {
    const {_id,picture, toy_name, seller_name, sub_category, price, quantity, ratings } = fireTruck;
    return (
        <div>
            <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
                <figure><img className='w-[400px] h-[400px]' src={picture} alt="Shoes" /></figure>
                <div className="text-start p-5">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Price: {price}</p>
                    <p>Ratings: {ratings}</p>
                    <div className="text-center">
                       <Link to={`/details/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FireTruck;