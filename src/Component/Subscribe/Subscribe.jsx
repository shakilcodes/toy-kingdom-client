import React from 'react';

const Subscribe = () => {
    return (
        <div className='pt-20 pb-10 mx-3 md:mx-0'>
            <div className='text-black text-center '>
                <h1 className='text-5xl font-bold'>Subscribe Toy Kingdom</h1>
                <p className='text-xl mt-2'>Get Latest News and Update</p>
            </div>
            <div className='py-8 flex justify-center '>
                <input className='md:w-[450px] px-5' placeholder='Email Address' type="text" />
                <button className='h-11 w-[200px] bg-[#ffad02]'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;