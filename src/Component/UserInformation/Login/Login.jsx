import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const {logIn, googleSignUp} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        logIn(email, password)
        
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        //    navigate(from, {replace: true})
        //    setPassword('')
           event.target.reset();
           
        })
        .catch(error => {
            const errorFind = error;
            // setPassword(error.message)
            console.log(error.message)
            
        })
    }
    const provider = new GoogleAuthProvider();
    const googleLogIn = () =>{
        googleSignUp(provider)
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h1 className='text-7xl text-center mt-10 text-orange-500 font-bold'>Please Login</h1>

            <form onSubmit={handleLogin}>
                <div className="hero pt-10">
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-300">
                            <div className="card-body">
                                <div className="form-control">
                                    <p className='text-warning text-center'></p>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-500">Login</button>
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
                <div className='text-center mt-5 text-white font-bold'>
                    <button onClick={googleLogIn} className='mx-auto bg-orange-400 p-4 px-10 rounded-md'>Login with Google</button>
                </div>
                
            </div>
        </div>
      
    );
};

export default Login;