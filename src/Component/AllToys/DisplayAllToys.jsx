import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAllToys = ({ toy }) => {
    const { _id, picture, toy_name, seller_name, sub_category, price, quantity } = toy;
    console.log(toy)
    return (
        <div>
            <div className="">
                <table className="">
                    {/* head */}
                    <thead className=''>
                        <tr className='bg-gray-200'>
                            <th></th>
                            <th className=''>Toy Name</th>
                            <th>Seller</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           
                            <th>{toy.map(d => <p>{ }</p>)}</th>
                            <td >{toy.map(d => <p className='border border-black text-2xl mb-2 p-2'>{d.toy_name}</p>)}</td>
                            
                            <td>{toy.map(d => <p className='border bg-gray-300 border-black text-2xl mb-2 p-2'>{d.seller_name}</p>)}</td>
                            <td>{toy.map(d => <p className='border border-black text-2xl mb-2 p-2'>{d.sub_category}</p>)}</td>
                            <td>{toy.map(d => <p className='border border-black text-2xl mb-2 p-2 bg-gray-300'> ${d.price}</p>)}</td>
                            <td>{toy.map(d => <p className='border border-black text-2xl mb-2 p-2'> {d.quantity}</p>)}</td>
                            <td>{toy.map(d => <p className=' text-2xl mb-2 p-2'> <Link to={`/details/${d._id}`}><button className=" bg-gray-300 h-9 px-1 rounded-lg">View Details</button></Link></p>)}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DisplayAllToys;