import React from 'react';
import './Banner.css'
import banner from './../../../../public/banner.jpg'

const Banner = () => {
    return (
        <div className='banner-container ' >
            <div className='banner justify-between items-center md:ml-32 '>
                <div data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h1 className='md:text-7xl text-3xl font-bold'>Kid's Car <br />Kingdom</h1>
                    <p className='hidden md:block'>Experience the joy of playtime at Kid's Car Kingdom!</p>
                </div>
                <div className='mx-auto' data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="1000">
                    <img className='w-[800px] h-auto' src="https://i.postimg.cc/9FyFLmmS/baner-final.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner