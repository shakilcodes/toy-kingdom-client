import React from 'react';
import OffSection from '../ExraTwoSection/OffSection/OffSection';
import RecentCar from '../ExraTwoSection/RecentCar';
import GallaryPhoto from '../GallaryPhoto/GallaryPhoto';
import useTitle from '../Hooks/useTitle';
import TabSection from '../Tab/TabSection';
import Banner from './Banner/Banner';
import HowToBuy from '../HowToBuy/HowToBuy';
import Subscribe from '../Subscribe/Subscribe';
import BiggerToys from '../BiggerToys/BiggerToys';
import KeepDistance from '../KeepDistance/KeepDistance';

const Home = () => {
    useTitle('Home')
    return (
        <div className='bg-white'>
            <Banner></Banner>
            <div className='bg-[#EEEEE6] max-w-[1580px] mx-auto'>
                <HowToBuy></HowToBuy>
                <div className='b-[#e2e2ce]'>
                    <TabSection></TabSection>
                </div>
                <div className='b-[#EEEEE6] pt-20'>
                    <BiggerToys></BiggerToys>
                </div>
                <div className='b-[#E2E2CE]'>
                    <RecentCar></RecentCar>
                </div>
                <div className='b-[#BEC6A5]'>
                    <KeepDistance></KeepDistance>
                </div>
                <div className='b-[#E2E2CE]'>
                    <OffSection></OffSection>
                </div>
                <div className='b-[#EEEEE6]'>
                    <GallaryPhoto></GallaryPhoto>
                </div>


                <div className='b-[#e2e2ce]'>
                    
                </div>
            </div>
        </div>
    );
};

export default Home; 