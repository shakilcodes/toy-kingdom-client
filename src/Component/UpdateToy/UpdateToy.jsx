import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';

const UpdateToy = () => {
    const { loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)
    const updateHandle = (event) => {
        event.preventDefault()
        const form = event.target;
        const price = form.Price.value;
        const quantity = form.Quantity.value
        const description = form.Description.value
        const updatedToy = { price, quantity, description }
        console.log(updatedToy)
        fetch(`https://toy-kingdom-server.vercel.app/allToys/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('updated your toy')
                }
            })
        form.reset()
        navigate('/myToys')
    }
    return (
        <div className='mx-28'>
            <h1 className='my-10 text-center text-2xl font-bold'>Update Your Toy</h1>
            <form onSubmit={updateHandle} className='flex flex-col gap-4'>
                <div>
                    <label className='text-xl font-bold p-2'>Price: </label>
                    <input className='bg-gray-200 w-9/12 p-2 rounded-md ms-16' type="text" placeholder='Price' name='Price' />
                </div>
                <div>
                    <label className='text-xl font-bold p-2'>Quantity: </label>
                    <input className='bg-gray-200 w-9/12 p-2 rounded-md ms-8' type="text" placeholder='Toy Quantity' name='Quantity' />
                </div>
                <div className='flex items-center'>
                    <label className='text-xl font-bold p-2'>Description: </label>
                    <textarea className='bg-gray-200 w-9/12 p-2 rounded-md ms-2' placeholder='Description' name="Description" id="" cols="30" rows="5"></textarea>

                </div>
                <button className='btn w-32 mx-auto'>Update</button>
            </form>
        </div>
    );
};

export default UpdateToy;