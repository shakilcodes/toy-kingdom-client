import React from 'react';
import './OffSection.css'

const OffSection = () => {
    return (
        <div className='md:mx-20'>
            <h1 className='text-5xl text-center font-bold my-10 mt-20'>Offers</h1>
            <section className='md:flex'>
                <section className='offSection'>
                    <div className='md:flex flex-col items-start pt-20 ps-5'>
                        <h1 className='text-white md:text-7xl'>Regular Car</h1>
                        <h1 className='text-white text-3xl'>Up to <span className='md:text-7xl font-bold '>35% OFF</span></h1>
                    </div>
                </section>
                <section className='offSectionTwo'>
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