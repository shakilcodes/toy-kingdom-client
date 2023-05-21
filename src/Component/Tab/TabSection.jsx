import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import FireTruck from './FireTruck';
import Police from './Police';
import RegularCar from './RegularCar';


const TabSection = () => {
    const {loading} = useContext(AuthContext)
    const [data, setdata] = useState([])
    const [police, setPolice] = useState([])
    const [regular, setregular] = useState([])
    const [fireTruck, setFiretruck] = useState([])
    useEffect(() => {
        fetch('https://toy-kingdom-server.vercel.app/allToys')
            .then(res => res.json())
            .then(datas => setdata(datas))
        const policeCar = data.filter(d => d.sub_category == 'Police Car')
        setPolice(policeCar)
        const regularCar = data.filter(d => d.sub_category == "regular car")
        setregular(regularCar)
        const fireTrucks = data.filter(d => d.sub_category == "Fire Truck")
        setFiretruck(fireTrucks)
    }, [data])
    // console.log(police, regular, fireTruck)

    // console.log(data.filter(d => console.log(d.sub_category == 'Police Car')))
    if(loading){
        return
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-16'></h1>
            <div className='text-center'>
                <Tabs >
                    <h1 className='text-4xl font-semibold mt-28 mb-10'>Car Sub-Category</h1>
                    <TabList>
                        <Tab>
                            <img className='h-24 w-24 rounded-full' src="https://i.postimg.cc/hGThXQRd/Shutterstock-z5rli-Mn-L1-B.jpg" alt="" />
                            <h1 className='text-xl font-semibold'>Fire Truck</h1>
                        </Tab>
                        <Tab>
                            <img className='h-24 w-24 rounded-full' src="https://i.postimg.cc/QN0MvbdC/Shutterstock-ysa-G9-Kj-VPW.jpg" alt="" />
                            <h1 className='text-xl font-semibold'>Regular Car</h1>
                        </Tab>
                        <Tab>
                            <img className='h-24 w-24 rounded-full' src="https://i.postimg.cc/fRCVMkpK/Shutterstock-Fqw-Ledn8vr.jpg" alt="" />
                            <h1 className='text-xl font-semibold'>Police Car</h1>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className='md:mx-32 md:flex justify-center mt-10 gap-20'>
                            {
                                fireTruck.map(d => <FireTruck key={d._id} fireTruck={d}></FireTruck>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='md:mx-32 md:flex justify-center mt-10 gap-20'>
                            {
                                regular.map(d => <RegularCar key={d._id} regular={d}></RegularCar>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='md:mx-32 md:flex justify-center mt-10 gap-20'>
                            {
                                police.map(d => <Police key={d._id} police={d}></Police>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TabSection;