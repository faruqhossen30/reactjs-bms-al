import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaHome } from 'react-icons/fa';

const Settings = () => {
    return (
        <DashboardLayout>
            <Tabs>
                <div className='grid grid-cols-12 bg-white min-h-screen shadow-md'>
                    <div className='col-span-3 border-r-2 text-gray-500  font-medium'>
                        <h2 className='font-semibold p-2 shadow-md'>Settings</h2>
                        <TabList className="p-2">
                            <Tab className="cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                                <FaHome />
                                <span>Inbox</span>
                            </Tab>
                            <Tab className="cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                                <FaHome />
                                <span>Inbox</span>
                            </Tab>
                        </TabList>
                    </div>
                    <div className=' col-span-9'>
                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        </DashboardLayout>
    )
}

export default Settings