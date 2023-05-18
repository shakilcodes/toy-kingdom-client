import React from 'react';
import { Outlet } from 'react-router-dom';
import { Tab } from 'react-tabs';
import Banner from '../Home/Banner/Banner';
import Header from '../Shared/Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;