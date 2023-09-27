import React from 'react';

const BiggerToys = () => {
    return (
        <section className='pb-5 md:pb-20 md:mx-0 mx-3'>
            <div className='max-w-[1280px] mx-auto py-20 bg-[#406147] rounded-2xl'>
                <div className='md:flex justify-center items-center gap-20 text-white'>
                    <div>
                        <img className='md:w-[400px] rounded-[50px] md:rounded-2xl px-3 md:px-0' src="https://i.postimg.cc/RCYZxJ0k/Bigger-Toys.jpg" alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-3xl text-center md:text-start mt-5 md:mt-0 md:text-5xl font-bold'>Bigger Toys</h1>
                        <p className=' text-center md:text-start my-8 md:w-[500px]'>Our memebers can borrow fuly assembled larger items from just $10 a month each(minimum 2 months), with no packaging to throw away, or batteries to find, And when yhour kids have finished with then, they dont't take up valueble space in your home.</p>
                        <div className='text-center md:text-start'>
                        <button className='btn bg-white hover:bg-[#FDC153] text-black'>Go to Store</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BiggerToys;