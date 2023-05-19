import React from 'react';
import './Banner.css'
import banner from './../../../../public/banner.jpg'

const Banner = () => {
    return (
        <div className='banner-container '>
            <div className='banner justify-between items-center ml-32'>
                <div>
                    <h1 className='text-7xl font-bold'>Kid's Car <br />Kingdom</h1>
                    <p>Experience the joy of playtime at Kid's Car Kingdom!</p>
                </div>
                <div className='mx-auto'>
                    <img className='w-[800px] h-auto' src="https://i.postimg.cc/s2w8ZGv2/baner-final.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner