import React from 'react';
import './Footer.css'

// done
const Footer = () => {
    return (
        <div className='footer-main mt-32 footer-main'>
            <div className='footer-main'>
                <div className='footer-container'>
                    <div className='md:flex justify-around gap-12 footer-info md:mx-32 text-center pt-20 pb-10'>
                        <div>
                            <img className='mx-auto w-36 h-28' src="https://i.postimg.cc/fLm9yNRX/toys-logo.png" alt="" />
                            <h1 className='text-3xl font-bold mb-5'>Toy Kingdom</h1>
                            <p className='mb-5'>Toy Kingdom website: A magical <br /> online store for kids and <br /> kids-at-heart, offering a wide <br /> selection of toys, games, and more.</p>
                            <div className='flex justify-center items-center'>
                               <a href="https://www.facebook.com/shakilopenar"> <img className='h-10 w-10' src="https://i.postimg.cc/zfX9LgJn/Pngtree-facebook-social-media-icon-8704814.png" target="_blank" alt="" /></a>
                                <a href="https://www.instagram.com/"><img className='h-10 w-10' src="https://i.postimg.cc/SRqLsW44/pngwing-com.png" alt="" /></a>
                                <a href="https://twitter.com/"><img className='h-10 w-10' src="https://i.postimg.cc/7YS69pSK/pngwing-com-1.png" alt="" /></a>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl mb-5'>Company</h1>
                            <p>About</p>
                            <p></p>
                            <p>Latest News</p>

                        </div>

                        <div>
                            <h1 className='text-2xl mb-5'>Support</h1>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>Developers</p>
                        </div>
                        <div>
                            <h1 className='text-2xl mb-5'>Contact</h1>
                            <p className='mb-5'>524 BroadWay, NYC</p>
                            <p>+1 777 - 978 - 5570</p>
                        </div>
                    </div>
                    <hr className='mx-32' />
                </div>
                <div className=' flex justify-between mx-32 py-10'>
                    <h1>@2023 Toy Kingdom. All Rights Reserved</h1>
                    <h1>Powered by Toy Kingdom</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;