import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';
import DisplayMyToy from './DisplayMyToy';


const MyToy = () => {
    useTitle('MyToys')
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return
    }
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`https://toy-kingdom-server.vercel.app/singleToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user?.email])

    const handleDelete = (id) => {
        const deleleConfirm = confirm('Do you want to delete this toy?')
        if (deleleConfirm) {
            fetch(`https://toy-kingdom-server.vercel.app/allToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = myToys.filter(d => d._id !== id)
                    setMyToys(remaining)
                })
        }
    }
    return (
        <div>
            <h1 className='mt-32 text-4xl text-center'>My Toys</h1>
            <div className='mx-28'>
                {
                    myToys?.map(d => <DisplayMyToy key={d._id} toy={d} handleDelete={handleDelete}></DisplayMyToy>)
                }
            </div>
        </div>
    );
};

export default MyToy;