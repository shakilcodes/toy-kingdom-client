import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const FireTruck = ({ fireTruck }) => {
    const {user} = useContext(AuthContext)
    const {_id,picture, toy_name, seller_name, sub_category, price, quantity, rating } = fireTruck;
    const handleNotification = () =>{
        if(!user){
            alert('You have to Login first')
        }
    }
    return (
        <div className='text-center mx-3 md:mx-0' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
            <div className="card md:w-[300px] md:h-[400px] bg-base-100 shadow-xl">
                <figure><img className='md:w-[300px] w-[350px] px-5 md:px-0 h-[300px] rounded-2xl mt-5' src={picture} alt="Shoes" /></figure>
                <div className="text-start p-5">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Price: {price}</p>
                    <p>Ratings: {rating}</p>
                    <div className="text-center">
                       <Link onClick={handleNotification} to={`/details/${_id}`}> <button className="btn-sm rounded-xl bg-[#ffaf00] mt-3">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FireTruck;