import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Police = ({police}) => {
    const {user} = useContext(AuthContext)
    const {_id,picture, toy_name, seller_name, sub_category, price, quantity, rating } = police;
    const handleNotification = () =>{
       if(!user) {
        alert('You have to Login first')
       }
    }
    return (
        <div className='text-center' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
            <div className="card w-[300px] h-[400px] bg-base-100 shadow-xl">
                <figure><img className='w-[400px] h-[400px]' src={picture} alt="Shoes" /></figure>
                <div className="text-start p-5">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Price: {price}</p>
                    <p>Ratings: {rating}</p>
                    <div className="text-center">
                    <Link onClick={handleNotification} to={`/details/${_id}`}> <button className="btn-sm rounded-xl mt-3 bg-[#ffaf00]">View Details</button></Link>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Police;