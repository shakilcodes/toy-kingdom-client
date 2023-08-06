import React from 'react';
import { Outlet } from 'react-router-dom';
import { Tab } from 'react-tabs';
import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Root = () => {
    return (
        <div>
            <div className=''>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;