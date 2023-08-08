import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignUp = () => {
    const { logIn, googleSignUp } = useContext(AuthContext)

    useTitle('SignUp')
    const [error, setError] = useState('')

    const { signUp } = useContext(AuthContext)
    const navigate = useNavigate()
    const hanleSignUp = (event) => {
        event.preventDefault()
        console.log(event.target)
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photo = form.photo.value
        console.log(name, email, password, photo)
        signUp(email, password)

            .then(result => {
                const user = result.user;

                updateName(name, photo, user)
                console.log(user)
                // setError("")
                event.target.reset();
                alert('success')
                navigate('/')
                // console.log(loggedUser)
            })
            .catch(error => {
                // setError(error.message)
                console.log(error.message)
                const gotedError = error.message;
                setError(gotedError)

            })
    }
    console.log(error)
    const updateName = (name, photo, user) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const provider = new GoogleAuthProvider();
    const googleLogIn = () => {
        googleSignUp(provider)
        navigate(from, { replace: true })
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='pb-20 bg-[#EEEEE6] max-w-[1580px] mx-auto'>
            <h1 className='text-5xl pt-20 text-center font-semibold text-black mb-10'>SignUp Please</h1>

            <div className='text-center mt-5 text-white font-bold'>
                <button onClick={googleLogIn} className='mx-auto text-black border-[2px] border-black p-1 px-[77px] rounded-2xl flex items-center gap-2'><FaApple className='text-2xl'></FaApple> Continue with Apple</button>
            </div>
            <div className='text-center mt-2 text-white font-bold'>
                <button onClick={googleLogIn} className='mx-auto text-black border-[2px] border-black p-1 px-[77px] rounded-2xl flex items-center gap-2'><FcGoogle className='text-2xl'></FcGoogle> Continue with Google</button>
            </div>

            <div className='flex gap-5 justify-center items-center mt-10'>
                <hr className='border-black  w-32  ' />
                <h1>Or</h1>
                <hr className='border-black  w-32  ' />
            </div>

            <form onSubmit={hanleSignUp} className=''>
                <div className=" pt-10">
                    <div className=" ">
                        <div className="">
                            <div className="grid  ">
                                <h1 className='text-red-500 text-center mb-3'>{error}</h1>
                                <div className='flex justify-center items-center gap-3 mb-5'>
                                    <div className=" text-center">
                                        <input type="text" placeholder="Name" name='name' className="w-[170px] h-10 px-3 rounded-l-2xl rounded-r-lg border-[2px] border-black bg-[#eeeee6]" required />
                                    </div>
                                    <div className=" text-center">
                                        <input type="text" placeholder="Photo URL" name='photo' className="w-[170px] h-10 px-3 rounded-r-2xl rounded-l-lg border-[2px] border-black bg-[#eeeee6]" required />
                                    </div>
                                </div>
                                <div className=" text-center">
                                    <input type="text" placeholder="email" name='email' className="w-[350px] h-10 px-3 rounded-2xl border-[2px] border-black bg-[#eeeee6]" required />
                                </div>
                                <div className="mx-auto">

                                    <input type="password" name='password' placeholder="password" className="w-[350px] h-10 mt-6 px-3 rounded-2xl border-[2px] border-black bg-[#eeeee6]" required />

                                </div>
                                <div className="mx-auto mt-6">
                                    <button className="btn bg-black w-[350px] rounded-2xl">Sign Up</button>
                                    <label className="label">
                                        <a href="/login" className="label-text-alt link link-hover">First time this website? <span className='text-primary'>LogIn</span></a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className=''>


            </div>


        </div>

    );
};

export default SignUp;