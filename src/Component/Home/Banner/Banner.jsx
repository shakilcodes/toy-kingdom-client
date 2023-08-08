import React from 'react';
import './Banner.css'
import banner from './../../../../public/banner.jpg'

const Banner = () => {
    return (
        <section className=' bg-[#bec6a5] max-w-[1580px] mx-auto md:h-[800px] pb-10 md:pb-0'>
            <div className='banner-container max-w-[1280px] mx-auto' >
                <div className='md:flex justify-center items-center md:ml-32 '>
                    <div data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h1 className='md:text-7xl text-3xl font-bold md:pt-32 pt-24 text-center md:text-start'>Kid's Car <br /><span className='text-6xl'>Kingdom</span></h1>
                        <p className='hidden md:block mt-5'>Experience the joy of playtime at Kid's Car Kingdom!</p>
                    </div>
                    <div className='mx-auto md:mt-36 mt-10' data-aos="fade-left" data-aos-easing="linear"
                        data-aos-duration="1000">
                        <img className='md:w-[600px] rounded-2xl md:rounded-[100px] md:h-auto' src="https://i.postimg.cc/9FyFLmmS/baner-final.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner