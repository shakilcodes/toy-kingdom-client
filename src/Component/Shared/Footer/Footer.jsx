import React from 'react';
import './Footer.css'
import Subscribe from '../../Subscribe/Subscribe';
import { Link } from 'react-router-dom';

// done
const Footer = () => {
    return (
        <footer className='bg-[#bec6a5]'>
            <section className='max-w-[1580px] mx-auto text-black '>
                <Subscribe></Subscribe>
                <div className='text-center md:text-start'>
                    <div className='footer-main'>
                        <div className='footer-container'>
                            <div className='md:flex justify-around gap-12 footer-info lg:mx-32 pb-4'>
                                <div>
                                    <img className='mx-auto w-36 h-28' src="https://i.postimg.cc/fLm9yNRX/toys-logo.png" alt="" />
                                    <h1 className='text-3xl font-bold mb-5'>Toy Kingdom</h1>

                                    <div className='flex justify-center items-center'>
                                        <a href="https://www.facebook.com/shakilopenar"> <img className='h-10 w-10' src="https://i.postimg.cc/zfX9LgJn/Pngtree-facebook-social-media-icon-8704814.png" target="_blank" alt="" /></a>
                                        <a href="https://www.instagram.com/"><img className='h-10 w-10' src="https://i.postimg.cc/SRqLsW44/pngwing-com.png" alt="" /></a>
                                        <a href="https://twitter.com/"><img className='h-10 w-10' src="https://i.postimg.cc/7YS69pSK/pngwing-com-1.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-2xl mb-5'>Company</h1>
                                    <Link><p>About</p></Link>
                                    <Link><p>Latest News</p></Link>

                                </div>
                                <div>
                                    <h1 className='text-2xl mb-5'>Quick Links</h1>
                                    <Link><p>Home</p></Link>
                                    <Link><p>All Toys</p></Link>
                                    <Link><p>Category</p></Link>
                                    <Link> <p>Offer</p></Link>
                                    <Link> <p>About Us</p></Link>
                                </div>

                                <div>
                                    <h1 className='text-2xl mb-5'>Support</h1>
                                    <Link> <p>Help Desk</p></Link>
                                    <Link><p>Sales</p></Link>
                                    <Link><p>Become a Partner</p></Link>
                                    <Link> <p>Developers</p></Link>




                                </div>
                                <div>
                                    <h1 className='text-2xl mb-5'>Contact</h1>
                                    <p className='mb-5'>524 BroadWay, NYC</p>
                                    <p>+1 777 - 978 - 5570</p>
                                </div>
                            </div>
                            <hr className='mx-32' />
                        </div>
                        <div className=' flex justify-between mx-32 py-1'>
                            <h1>@2023 Shakil Ahmed. All Rights Reserved</h1>
                            <h1>Powered by Toy Kingdom</h1>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;