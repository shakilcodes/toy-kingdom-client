import React from 'react';
import OffSection from '../ExraTwoSection/OffSection/OffSection';
import RecentCar from '../ExraTwoSection/RecentCar';
import GallaryPhoto from '../GallaryPhoto/GallaryPhoto';
import useTitle from '../Hooks/useTitle';
import TabSection from '../Tab/TabSection';
import Banner from './Banner/Banner';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <GallaryPhoto></GallaryPhoto>
            <TabSection></TabSection>
            <RecentCar></RecentCar>
            <OffSection></OffSection>
        </div>
    );
};

export default Home;