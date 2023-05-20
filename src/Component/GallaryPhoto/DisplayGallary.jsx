import React from 'react';

const DisplayGallary = ({ toy }) => {
    const { _id, picture, toy_name, seller_name, sub_category, price, quantity } = toy;

    return (
        <div data-aos="zoom-in-up">
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img className='h-[360px] pt-3 w-[360px] p-1 rounded-3xl ' src={picture} alt="Shoes" /></figure>
                <p className='text-center text-xl font-semibold pb-2'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default DisplayGallary;