import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
    useTitle('LogIn')
    const [error, setError] = useState('')
    const { logIn, googleSignUp } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        logIn(email, password)

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                //    setPassword('')
                event.target.reset();

            })
            .catch(error => {
                const errorFind = error.message;
                // setPassword(error.message)
                console.log(error.message)
                setError(errorFind)

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
        <div className='py-16 bg-[#EEEEE6] max-w-[1580px] mx-auto'>
            <h1 className='text-5xl text-center mt-10 text-black font-semibold mb-16'>Please Login</h1>
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
            
            <form onSubmit={handleLogin} className=''>
                <div className=" pt-10">
                    <div className=" ">
                        <div className="">
                            <div className="grid  ">
                                <h1 className='text-red-500 text-center mb-3'>{error}</h1>
                                <div className=" text-center">
                                    <p className='text-warning text-center '></p>
                                   
                                    <input type="text" placeholder="email" name='email' className="w-[350px] h-10 px-3 rounded-2xl border-[2px] border-black bg-[#eeeee6]" required />
                                </div>
                                <div className="mx-auto">
                                    
                                    <input type="password" name='password' placeholder="password" className="w-[350px] h-10 mt-6 px-3 rounded-2xl border-[2px] border-black bg-[#eeeee6]" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="mx-auto mt-6">
                                    <button className="btn bg-black w-[350px] rounded-2xl">Login</button>
                                    <label className="label">
                                        <a href="/signUp" className="label-text-alt link link-hover">First time this website? <span className='text-primary'>SignUp</span></a>
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

export default Login;