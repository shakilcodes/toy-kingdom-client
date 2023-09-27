import React from 'react';
import './Banner.css'
import banner from './../../../../public/banner.jpg'

const Banner = () => {
    return (
        <section className='  max-w-[1580px] mx-auto lg:h-[800px] pb-10 md:pb-0'>
            <div className='banner-container max-w-[1280px] mx-auto' >
                <div className='lg:flex justify-center items-center gap-20 lg:ml-32 md:pt-14'>
                    <div data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h1 className='md:text-7xl text-3xl font-bold lg:pt-32 pt-24 md:pt-10 text-center lg:text-start'>Kid's Toy <br /><span className='text-5xl '>Kingdom</span></h1>
                        <p className='hidden md:block mt-5 text-center lg:text-start'>Experience the joy of playtime at Kid's toy Kingdom!</p>
                        <button className='text-2xl font-semibold bg-[#FEAD03] hover:bg-[#d89000]  mt-10 px-10 p-2 rounded-xl text-white hidden lg:block'>Discover All Toys</button>
                    </div>
                    <div className='mx-auto lg:mt-36 mt-10 md:mx-10 lg:mx-0 md:pb-10 lg:pb-0' data-aos="fade-left" data-aos-easing="linear"
                        data-aos-duration="1000">
                        <img className='lg:w-[600px] rounded-2xl md:rounded-[100px] md:h-auto' src="https://i.postimg.cc/9FyFLmmS/baner-final.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner