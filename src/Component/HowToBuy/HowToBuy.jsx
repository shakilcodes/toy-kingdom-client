import React from 'react';

const HowToBuy = () => {
    return (
        <section className='bg-[#EEEEE6]'>
            <div className='max-w-[1280px] mx-auto '>
                <div>
                    <h1 className='text-3xl md:text-6xl text-center font-bold md:pt-32 pt-10'>How to Buy?</h1>
                </div>
                <div className='md:flex justify-around items-center mt-8 md:mt-16'>
                    <div className='text-center'>
                        <img className='w-[250px] md:ms-8 ms-[70px]' src="https://i.postimg.cc/65QfhJdh/how1.jpg" alt="" />
                        <h1 className='text-2xl md:text-4xl font-bold'>Choose A Toy</h1>
                        <p className='mt-5'>Pic from over 1,000 of the latest must haves</p>
                    </div>
                    <div className='text-center'>
                        <img className='w-[250px] md:ms-8 ms-[70px]' src="https://i.postimg.cc/qBt49gXh/how2.jpg" alt="" />
                        <h1 className='text-2xl md:text-4xl font-bold'>Add To Cart</h1>
                        <p className='mt-5'>Pic from over 1,000 of the latest must haves</p>
                    </div>
                    <div className='text-center'>
                        <div className=''>
                            <img className='w-[250px] md:ms-7 ms-[70px]' src="https://i.postimg.cc/GhFwCDB2/how3.jpg" alt="" />
                        </div >
                        <h1 className='text-2xl md:text-4xl font-bold'>Pyment</h1>
                        <p className='mt-5'>Pic from over 1,000 of the latest must haves</p>
                    </div>


                </div>
                <div className='text-center py-5 md:py-16'>
                    <button className='btn bg-[#FFAF00] hover:bg-orange-400'>Get started</button>
                </div>
            </div>
        </section>
    );
};

export default HowToBuy;