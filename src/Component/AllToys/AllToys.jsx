import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';
import DisplayAllToys from './DisplayAllToys';

const AllToys = () => {
    useTitle('AllToys')
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] =useState('')
    console.log(searchText)
    const handleSearch = (e)=>{
        fetch(`https://toy-kingdom-server.vercel.app/searchByTitle/${searchText}`)
        .then(res => res.json())
        .then(searchData => setAllToys(searchData))

    }
    useEffect(()=>{
        fetch('https://toy-kingdom-server.vercel.app/allToys')
        .then(res => res.json())
        .then(toys => setAllToys(toys))
    },[])

    const sortByPrice = () =>{
        fetch('https://toy-kingdom-server.vercel.app/allToysSort')
        .then(res => res.json())
        .then(datas => setAllToys(datas))
    }
    useEffect(()=>{
       
    },[])
    return (
        <div className='mx-28'>
            <h1 className='mt-10 text-4xl text-center font-bold'>All Toys</h1>
            <div className='flex justify-center items-center mt-10'>
            <input onChange={(e)=> setSearchText(e.target.value)} className='bg-gray-300 w-1/4 h-12 rounded-xl p-5' type="text" name="searchValue" placeholder='Search By Toy Name' id=""></input>
            <button onClick={handleSearch} className='btn'>Search</button>
            </div>
            <div className='mx-auto p-2 rounded-2xl text-center mt-3 w-28 bg-[#EDA70E]'>
            <button onClick={sortByPrice} className=''>Sort By Price</button>
            </div>
            <div className='grid  my-24 justify-center gap-5 items-center'>
            {
               
                <DisplayAllToys
                
                toy={allToys}
                ></DisplayAllToys>
            }
            </div>
        </div>
    );
};

export default AllToys;