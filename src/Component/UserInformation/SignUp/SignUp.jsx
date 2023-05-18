import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {

    const {signUp} = useContext(AuthContext)

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

        .then(result=>{
            const loggedUser = result.user;
            // displayName(name, photo, loggedUser)
            console.log(loggedUser)
            // setError("")
            event.target.reset();
            alert('success')
            // navigate('/')
            // console.log(loggedUser)
        })
        .catch(error => {
            // setError(error.message)
            console.log(error)
        })


    }
    return (
        <div>
            <h1 className='text-7xl mt-10 text-center font-bold text-orange-500'>SignUp Please</h1>

            <form onSubmit={hanleSignUp}>
                <div className="hero pt-10">
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-300">
                            <div className="card-body">
                                <div className="form-control">
                                    <p className='text-warning'></p>
                                    <label className="label">
                                        <span className="label-text">Full Name (Optional)</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL (Optional)</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email (Requred)</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password (Requred)</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-500">SignUp</button>
                                    <label className="label">
                                        <a href="/login" className="label-text-alt link link-hover">Already have account? <span className='text-primary'>Login</span></a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


        </div>

    );
};

export default SignUp;