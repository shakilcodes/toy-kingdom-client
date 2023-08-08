import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from './../../../../public/toys logo.png'
import { Tooltip } from 'react-tooltip'


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
        <section className='bg-[#BEC6A5]'>
            <div className=' drop-shadow-lg fixed top-0 right-0 left-0 buttom-0 z-10'>
                <div className='md:mx-28 text-black font-bold'>
                    <div className="navbar max-w-[1280px] mx-auto">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to='allToys'>All Toys</Link></li>
                                    <li><Link to='myToys'>My Toys</Link></li>
                                    <li><Link to='addAToys'>Add A Toys</Link></li>
                                    <li><Link to='blogs'>Blogs</Link></li>
                                </ul>
                            </div>
                            <div>
                                <Link to='/'><img className='w-25 h-14' src={logo} alt="" />
                                    <h1 className='text-black font-bold'></h1></Link>
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="flex gap-5  text-xl">
                                <li><Link to="/">Home</Link></li>

                                <li><Link to='/allToys'>All Toys</Link></li>
                                <li><a href='#category'>Category</a></li>
                                <li><a href='#offer'>Offer</a></li>
                                <li><Link to='/aboutus'>About us</Link></li>
                                {
                                    user ? <li><Link to='/myToys'>My Toys</Link></li> : ""
                                }
                                {
                                    user ? <li><Link to='/addAToys'>Add A Toys</Link></li> : ""
                                }
                                <li><Link to='/blogs'>Blogs</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end  flex gap-2">
                            <div>
                                {
                                    user ? <div><a className="my-anchor-element" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                                        <img className='h-12 w-12 rounded-full' src={user?.photoURL} alt="" />
                                    </a></div> : ""


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
                        <Tooltip id="my-tooltip" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;