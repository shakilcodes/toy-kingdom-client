import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayGallary from './DisplayGallary';

const GallaryPhoto = () => {
    const [toyGallary, setToy] = useState([])

    useEffect(() => {
        fetch('gallary.json')
            .then(res => res.json())
            .then(datas => setToy(datas))
    }, [])
    return (
        <div className='max-w-[1280px] mx-auto pb-28'>
            <h1 className='text-3xl md:text-5xl text-center font-bold md:pt-20 pb-5 md:pb-10'>Fresh Car Gallary</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5' >
                {
                    toyGallary.map(d => <DisplayGallary key={d._id} toy={d}></DisplayGallary>)
                }
            </div>
            <span id='category'></span>
        </div>
    );
};

export default GallaryPhoto;