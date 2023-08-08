import React from 'react';

const DisplayGallary = ({ toy }) => {
    const { _id, picture, toy_name, seller_name, sub_category, price, quantity } = toy;

    return (
        <div className='mx-3 md:mx-0' data-aos="zoom-in-up">
            <div className="card md:w-[300px]  md:h-[300px] bg-base-100 shadow-2xl">
                <figure><img className='h-[360px] pt-3 w-[360px] p-1 rounded-3xl ' src={picture} alt="Shoes" /></figure>
                <p className='text-center text-xl font-semibold pb-2'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default DisplayGallary;