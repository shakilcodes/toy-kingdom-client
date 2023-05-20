import React from 'react';
import { Outlet } from 'react-router-dom';
import { Tab } from 'react-tabs';
import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;