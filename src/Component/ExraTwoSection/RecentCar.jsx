import React from 'react';

const RecentCar = () => {
    return (
        <div className='md:mx-28 md:pb-20 mx-3'>
            <h1 className='text-3xl md:text-5xl text-center font-bold py-10 md:pt-20'>Recent Car</h1>
            <section className='md:flex gap-10 justify-center items-center'>
                <div className="card card-compact md:w-[300px] bg-base-100 shadow-xl">
                    <figure><img src="https://i.postimg.cc/kgQDRHCS/Shutterstock-S3luig-TOFZ.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Regular car!</h2>
                        <p>
                            Price: $500
                            ratings: 5
                        </p>
                    </div>
                </div>
                <div className="card card-compact md:w-[300px] bg-base-100 shadow-xl my-5 md:my-0">
                    <figure><img src="https://i.postimg.cc/nLfR0CN5/Shutterstock-8-FXN1-D62b-U.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Regular car!</h2>
                        <p>
                            Price: $400
                            ratings: 3.7
                        </p>
                    </div>
                </div>
                <div className="card card-compact md:w-[300px] bg-base-100 shadow-xl">
                    <figure><img src="https://i.postimg.cc/xjXZjDG6/Shutterstock-Kt-Bkg-H9-GMN.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Regular car!</h2>
                        <p className=''>
                            Price: $100
                            ratings: 4.5
                        </p>
                    </div>
                </div>
            </section>
            <span id='offer'></span>
        </div>
    );
};

export default RecentCar;