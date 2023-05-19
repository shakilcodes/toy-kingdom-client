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
        <div>
            <h1 className='text-5xl text-center font-bold mt-20 mb-10'>Gallary</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-28 gap-5'>
                {
                    toyGallary.map(d => <DisplayGallary key={d._id} toy={d}></DisplayGallary>)
                }
            </div>
        </div>
    );
};

export default GallaryPhoto;