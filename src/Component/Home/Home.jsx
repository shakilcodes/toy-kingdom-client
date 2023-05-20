import React from 'react';
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
        </div>
    );
};

export default Home;