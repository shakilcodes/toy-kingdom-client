import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddAToys = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return 'Loading............'
    }
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const picture = form.url.value;
        const toy_name = form.toyName.value
        const sub_category = form.subToys.value
        const price = form.Price.value
        const rating = form.Ratings.value
        const quantity = form.Quantity.value
        const description = form.Description.value
        const seller_name = user?.displayName
        const seller_email = user?.email
        const inputValues = {picture, toy_name, sub_category, price, rating, quantity, description, seller_name, seller_email }
        console.log(inputValues)
        fetch('https://toy-kingdom-server-openarahmed.vercel.app/postToys',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(inputValues)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data._id)
            if(data.insertedId){
               alert ('successfully added new toy')
            }
            navigate('/myToys')
        })
    }

    return (
        <div className='mx-28'>
            <h1 className='my-10 font-bold text-4xl text-center'>Add Your Toys</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>

                    <div>
                        <label className='text-xl font-bold p-2'>Toy URL:</label>
                        <input className='bg-gray-200 w-9/12 p-2 rounded-md ms-10' type="text" placeholder='Your Toy Photo URL' name='url' />
                    </div>


                    <div>
                        <label className='text-xl font-bold p-2'>Toy Name  :</label>
                        <input className='bg-gray-200 w-9/12 p-2 rounded-md ms-5' type="text" placeholder='Your Toy Name' name='toyName' />

                    </div>
                    <div>
                        <label className='text-xl font-bold p-2'>Saller Name: </label>
                        <input className='bg-gray-200 w-9/12 p-2 rounded-md' type="text" defaultValue={user?.displayName} />
                    </div>
                    <div>
                        <label className='text-xl font-bold p-2'>Saller Email: </label>
                        <input className='bg-gray-200 w-9/12 p-2 rounded-md ms-1' type="text" defaultValue={user?.email} />
                    </div>
                    <div>
                        <label className='text-xl font-bold p-2'>Sub-Toys: </label>
                        <input className='bg-gray-200 w-9/12 p-2 rounded-md ms-6' type="text" placeholder='Sub-Toys' name='subToys' />
                    </div>
                    <div>
                        <label className='text-xl font-bold p-2'>Price: </label>
                        <input className='bg-gray-200 w-9/12 p-2 rounded-md ms-16' type="text" placeholder='Price' name='Price' />
                    </div>
                    <div>
                        <label className='text-xl font-bold p-2'>Ratings: </label>
                        <input className='bg-gray-200 w-9/12 p-2 rounded-md ms-10' type="text" placeholder='Ratings' name='Ratings' />
                    </div>
                    <div>
                        <label className='text-xl font-bold p-2'>Quantity: </label>
                        <input className='bg-gray-200 w-9/12 p-2 rounded-md ms-8' type="text" placeholder='Toy Quantity' name='Quantity' />
                    </div>
                    <div className='flex items-center'>
                        <label className='text-xl font-bold p-2'>Description: </label>
                        <textarea className='bg-gray-200 rounded-md p-2' name="Description" placeholder='Description' id="" cols="87" rows="5"></textarea>

                
                    </div>


                </div>
            <div className='text-center my-8'>
                <button className='btn'>Submit</button>
            </div>
            </form>
        </div>
    );
};

export default AddAToys;