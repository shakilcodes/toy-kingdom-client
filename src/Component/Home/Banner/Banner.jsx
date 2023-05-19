import React from 'react';
import './Banner.css'
import banner from './../../../../public/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className='banner-container'>
            {/* <img src={banner} alt="" /> */}
            <h1>This is banner section</h1>
            </div>
        </div>
    );
};

export default Banner;