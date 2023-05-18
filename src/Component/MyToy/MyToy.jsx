import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import DisplayMyToy from './DisplayMyToy';


const MyToy = () => {
    const me = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5010/singleToys/toyworld@example.com')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyToys(data)
        })
    },[])
    console.log(myToys)
    console.log(me);
    return (
        <div>
            <h1 className='mt-32 text-4xl text-center'>My Toys</h1>
            <div>
                {
                    myToys?.map(d => <DisplayMyToy key={d._id} toy={d}></DisplayMyToy>)
                }
            </div>
        </div>
    );
};

export default MyToy;