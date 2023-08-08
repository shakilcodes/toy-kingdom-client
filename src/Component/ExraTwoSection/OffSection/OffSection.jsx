import React from 'react';
import './OffSection.css'

const OffSection = () => {
    return (
        <div className=' max-w-[1280px] mx-auto pb-20 md:mx-0 mx-3'>
            <h1 className='text-3xl md:text-5xl text-center font-bold py-5 md:py-10 md:pt-28'>Offers On Going</h1>
            <section className='md:flex'>
                <section className='offSection'>
                    <div className='md:flex flex-col items-start pt-20 ps-5'>
                        <h1 className='text-white md:text-7xl'>Regular Car</h1>
                        <h1 className='text-white text-3xl'>Up to <span className='md:text-7xl font-bold '>35% OFF</span></h1>
                    </div>
                </section>
                <section className='offSectionTwo mt-3'>
                    <div className='flex flex-col items-start pt-20 ps-5'>
                        <h1 className='text-white md:text-7xl'>Police Car</h1>
                        <h1 className='text-white text-3xl'>Up to <span className='md:text-7xl font-bold '>25% OFF</span></h1>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default OffSection;