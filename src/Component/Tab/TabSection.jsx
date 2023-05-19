import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const TabSection = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-16'></h1>
            <div className='text-center'>
                <Tabs>
                    <h1 className='text-4xl font-semibold mt-28 mb-10'>Car Sub-Category</h1>
                    <TabList>
                        <Tab><h1 className='text-xl font-semibold'>Fire Truck</h1></Tab>
                        <Tab><h1 className='text-xl font-semibold'>Regular Car</h1></Tab>
                        <Tab><h1 className='text-xl font-semibold'>Police Car</h1></Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TabSection;