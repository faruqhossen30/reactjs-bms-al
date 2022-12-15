import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaBullhorn, FaCog, FaHome, FaIdCard, FaMoneyBill, FaSave } from 'react-icons/fa';

const Settings = () => {
    return (
        <DashboardLayout>
            <Tabs>
                <div className='grid grid-cols-12 bg-white min-h-screen shadow-md'>
                    <div className='col-span-3 border-r-2 text-gray-500  font-medium'>
                        <div className='flex items-center shadow-md p-2 space-x-2'>
                            <FaCog />
                            <h2 className='font-semibold'>Settings</h2>
                        </div>
                        <TabList className="p-2">
                            <Tab className="text-sm cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                                <FaIdCard />
                                <span>Header & Footer</span>
                            </Tab>
                            <Tab className="text-sm cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                                <FaBullhorn />
                                <span>Notice</span>
                            </Tab>
                            <Tab className="text-sm cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                                <FaMoneyBill />
                                <span>Payment Gateway</span>
                            </Tab>
                        </TabList>
                    </div>
                    <div className=' col-span-9'>
                        <TabPanel>
                            <div className='border border-b-2 p-4'>
                                <h4>Website Name</h4>
                                <span className='text-xs text-gray-500'>Set your website name</span>
                            </div>
                            <div className='py-2'>
                                <form action="#" method="POST">
                                    <div className="px-4 mb-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1 mb-1">Website Name</label>
                                        <input type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                    </div>
                                    <div className="px-4 mb-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1 mb-1">Club Commision*</label>
                                        <input type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                    </div>
                                    <div className="px-4 mb-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1 mb-1">Sponsor Commission*</label>
                                        <input type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='border border-b-2 p-4'>
                                <h4>Website Notice</h4>
                                <span className='text-xs text-gray-500'>Website Notice</span>
                            </div>
                            <div className='py-2'>
                                <form action="#" method="POST">
                                    <div className="px-4">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Header Notice</label>
                                        <textarea type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" ></textarea>
                                    </div>
                                    <div className="px-4">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Footer Notice</label>
                                        <textarea type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" ></textarea>
                                    </div>

                                </form>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='border border-b-2 p-4'>
                                <h4>Payent Gateway Notice</h4>
                                <span className='text-xs text-gray-500'>Website Notice</span>
                            </div>
                            <div className='py-2'>
                                <form action="#" method="POST">
                                    <div className="px-4 py-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Account Number</label>
                                        <input type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                    </div>
                                    <div className="px-4 py-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Method</label>
                                        <select name="" id="" className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                            <option value="">One</option>
                                        </select>
                                    </div>
                                    <div className="px-4 py-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Type</label>
                                        <select name="" id="" className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                            <option value="">One</option>
                                        </select>
                                    </div>
                                    <div className="px-4 py-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Status</label>
                                        <select name="" id="" className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'>
                                            <option value="">One</option>
                                        </select>
                                    </div>
                                    <div className='px-2 py-1'>
                                        <button class="inline-flex items-center px-3 py-2 space-x-1 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md mx-2">
                                            <FaSave />
                                            <span>Save </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        </DashboardLayout>
    )
}

export default Settings