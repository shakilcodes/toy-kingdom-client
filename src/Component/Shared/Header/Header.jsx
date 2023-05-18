import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from './../../../../public/toys logo.png'

const Header = () => {
    const { logOut, user } = useContext(AuthContext)

    const signOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="navbar bg-gray-200">
                <div className="navbar-start md:mx-28">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to='allToys'>All Toys</Link></li>
                            <li><Link to='myToys'>My Toys</Link></li>
                            <li><Link to='addAToys'>Add A Toys</Link></li>
                            <li><Link to='blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <img className='w-24 h-15' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-3 font-semibold text-xl">
                        <li><Link to="/">Home</Link></li>

                        <li><Link to='/allToys'>All Toys</Link></li>
                        {
                            user ? <li><Link to='/myToys'>My Toys</Link></li> : ""
                        }
                        {
                            user ? <li><Link to='/addAToys'>Add A Toys</Link></li> : ""
                        }
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end md:mx-28 flex gap-2">
                    <div>
                        {
                            user ? <img className='h-12 w-12 rounded-full' src={user?.photoURL} alt="" /> : ""
                        }
                    </div>
                    <div className='text-xl font-semibold'>
                        {
                            user ? <div>
                                <button onClick={signOut}>LogOut</button>
                            </div> : <li><Link to='/login'>LogIn</Link></li>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;