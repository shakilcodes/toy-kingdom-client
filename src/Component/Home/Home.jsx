import React from 'react';
import OffSection from '../ExraTwoSection/OffSection/OffSection';
import RecentCar from '../ExraTwoSection/RecentCar';
import GallaryPhoto from '../GallaryPhoto/GallaryPhoto';
import useTitle from '../Hooks/useTitle';
import TabSection from '../Tab/TabSection';
import Banner from './Banner/Banner';
import HowToBuy from '../HowToBuy/HowToBuy';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <div>
                <HowToBuy></HowToBuy>
                <div className='bg-[#e2e2ce]'> 
                    <TabSection></TabSection>
                </div>
                <div className='bg-[#EEEEE6]'>
                <GallaryPhoto></GallaryPhoto>
                </div>
                <div className='bg-[#e2e2ce]'>
                <RecentCar></RecentCar>
                </div>
               <div className='bg-[#EEEEE6]'>
               <OffSection></OffSection>
               </div>
            </div>
        </div>
    );
};

export default Home; 