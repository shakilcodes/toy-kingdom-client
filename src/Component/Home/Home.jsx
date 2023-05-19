import React from 'react';
import GallaryPhoto from '../GallaryPhoto/GallaryPhoto';
import TabSection from '../Tab/TabSection';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallaryPhoto></GallaryPhoto>
            <TabSection></TabSection>
        </div>
    );
};

export default Home;