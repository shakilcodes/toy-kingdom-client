import React from 'react';
import useTitle from '../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div>
            <h1 className='mt-32 text-4xl text-center'>blogs</h1>
        </div>
    );
};

export default Blogs;