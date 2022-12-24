import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tab } from '@headlessui/react'
import { FaBullhorn, FaCog, FaHome, FaIdCard, FaMoneyBill, FaSave } from 'react-icons/fa';
import NoticeComponent from '../../components/dashboard/settings/NoticeComponent';
import PaymentGateway from '../../components/dashboard/settings/PaymentGateway';

const Settings = () => {
    return (
        <DashboardLayout>
            <Tab.Group>
                <div className='grid grid-cols-12 bg-white min-h-screen shadow-md'>
                    <div className='col-span-3 border-r-2 text-gray-500  font-medium'>
                        <div className='flex items-center shadow-md p-2 space-x-2'>
                            <FaCog />
                            <h2 className='font-semibold'>Settings</h2>
                        </div>
                        <Tab.List className="p-2 divide-y divide-slate-200">
                            <Tab className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                                <FaIdCard />
                                <span>Header & Footer</span>
                            </Tab>
                            <Tab className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                                <FaBullhorn />
                                <span>Notice</span>
                            </Tab>
                            <Tab className="text-sm w-full cursor-pointer flex items-center p-1 space-x-2 hover:bg-gray-200 hover:text-gray-700">
                                <FaMoneyBill />
                                <span>Payment Gateway</span>
                            </Tab>
                        </Tab.List>
                    </div>
                    <div className=' col-span-9'>
                        <Tab.Panels>
                            <Tab.Panel>
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
                            </Tab.Panel>
                            <NoticeComponent />
                            <PaymentGateway />
                        </Tab.Panels>
                    </div>
                </div>
            </Tab.Group>
        </DashboardLayout>
    )
}

export default Settings