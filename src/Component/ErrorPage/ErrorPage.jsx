import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error '>
            <h1 className='text-7xl text-center mt-32 mb-10 text-red-600'>Page Not Found </h1>
            <img className='w-[600px] h-[400px] mx-auto rounded-3xl' src="https://i.postimg.cc/Qd2FyTKb/Shutterstock-8d-TAIcy-WQP.jpg" alt="" />
            <div className='flex bg-green-500 btn'>
            <Link to='/'>Back to Home</Link>
            
            </div>
        </div>
    );
};

export default ErrorPage;