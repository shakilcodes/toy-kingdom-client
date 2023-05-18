import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyToy = () => {
    const me = useContext(AuthContext)
    console.log(me);
    return (
        <div>
            <h1 className='mt-32 text-4xl text-center'>My Toys</h1>
        </div>
    );
};

export default MyToy;