import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';
import DisplayAllToys from './DisplayAllToys';

const AllToys = () => {
    useTitle('AllToys')
    // const datas = useLoaderData()
    // console.log(datas)
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState('')

console.log(allToys)
    useEffect(() => {
        fetch('https://toy-kingdom-server.vercel.app/allToys')
            .then(res => res.json())
            .then(toys => setAllToys(toys))
    }, [])

    const handleSearch = (e) => {
        fetch(`https://toy-kingdom-server.vercel.app/searchByTitle/${searchText}`)
            .then(res => res.json())
            .then(searchData => setAllToys(searchData))

    }


    const sortByPrice = () => {
        fetch('https://toy-kingdom-server.vercel.app/allToysSort')
            .then(res => res.json())
            .then(datas => setAllToys(datas))
    }
    // useEffect(()=>{

    // },[])
    return (
        <div className='mx-28'>
            <h1 className='mt-20 text-4xl text-center font-bold'>All Toys</h1>
            <div className='flex justify-center items-center mt-10'>
                <input onChange={(e) => setSearchText(e.target.value)} className='bg-gray-300 w-1/4 h-12 rounded-xl p-5' type="text" name="searchValue" placeholder='Search By Toy Name' id=""></input>
                <button onClick={handleSearch} className='btn'>Search</button>
            </div>
            <div className='mx-auto p-2 rounded-2xl text-center mt-3 w-28 bg-[#EDA70E]'>
                <button onClick={sortByPrice} className=''>Sort By Price</button>
            </div>
            <div className='grid  my-10 justify-center gap-5 items-center'>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                   <th>#</th>
                                   <th>Toy Name</th>
                                    <th>Seller Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Ratings</th>
                                    <th>View Details</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allToys.map(d => <tr>
                                        <td>
                                        <img className='w-12 rounded-full' src={d.picture} alt="Avatar Tailwind CSS Component" />
                                        </td>
                                        
                                        <td>
                                            <div className="">
                                               
                                                <div>
                                                    <div className="font-bold">{d.toy_name}</div>
                                                    
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                         {d.seller_name}
                                        </td>
                                        <td>$ {d.price}</td>
                                        <td> {d.quantity}</td>
                                        <td>{d.rating}</td>
                                        <th>
                                        <Link to={`/details/${d._id}`}><button className=" bg-orange-300 h-9 px-1 rounded-lg">View Details</button></Link> 
                                        </th>
                                    </tr>)
                                }
                                
                              
                                
                            </tbody>
                            
                            

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToys;