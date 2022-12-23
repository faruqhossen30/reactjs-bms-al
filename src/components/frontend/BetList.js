import { Disclosure } from '@headlessui/react';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FaCalendar, FaCalendarAlt, FaClock, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import InputInnerLabel from './form/InputInnerLabel';
import Sidebar from './Sidebar';

const BetList = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <div className='col-span-12 lg:col-span-6 bg-white'>
            {/* <div class="flex items-center bg-purple-800 text-white text-sm overflow-x-auto">
                <a href="#" class="flex items-center space-x-2 px-2 py-1 border-b-4 border-yellow-400">
                    <img src="./img/footbal.png" class="h-4" alt="" />
                    <span>All</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1 ">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Cricket</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/footbal.png" class="h-4" alt="" />
                    <span>Football</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Basketball</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Hocky</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Tenis</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Voliball</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Table Tanis</span>
                </a>
                <a href="#" class="flex items-center space-x-2 px-2 py-1">
                    <img src="./img/cricket.png" class="h-4" alt="" />
                    <span>Badminton</span>
                </a>
            </div> */}

            <Disclosure as='div' className='shadow-md mb-1 border border-purple-300 text-sm'>
                <Disclosure.Button as='div' className="cursor-pointer p-2">
                    <div className='flex items-center justify-between space-x-2 w-full'>
                        <div className='flex items-center space-x-1'>
                            <img src="https://flagcdn.com/w320/bd.png" className='h-8 w-8 object-contain' alt="" />
                            <span>Bangladesh</span>
                        </div>
                        <div className='flex items-center'>
                            <img src="./img/cricket-logo.png" className='h-10 w-10 rounded-full ring ring-purple-800 ring-1' alt="" />
                        </div>
                        <div className='flex items-center space-x-1'>
                            <img src="https://flagcdn.com/w320/in.png" className='h-8 w-8 object-contain' alt="" />
                            <span>India</span>
                        </div>
                    </div>
                    <div className='text-center py-1 flex justify-center font-normal text-purple-800'>
                        <span className='px-1'>First ODI-12 </span>
                        <span className='flex items-center text-sm space-x-1'> <FaRegCalendarAlt /> <span> Decenmber 2022</span> <FaRegClock /> 12:00 PM</span>
                    </div>
                    <div className='text-center'>
                        <span className='px-3 bg-purple-800 text-white rounded-full text-xs'>Bangladesh option to bat</span>
                    </div>
                </Disclosure.Button>

                <Disclosure.Panel className="">
                    <div>
                        <div className="text-white bg-purple-800 border px-2 py-1">
                            <h4 className="text-white font-bold">Who win the match</h4>
                        </div>
                        <div className="grid grid-cols-4">
                            <div className="col-span-2 border border-gray-300 flex justify-between m-1">
                                <span className="font-bold p-1">Bangladesh</span>
                                <span className="bg-gray-300 font-bold p-1 px-4">2.50</span>
                            </div>
                            <div className="col-span-2 border border-gray-300 flex justify-between m-1">
                                <span className="font-bold p-1">Bangladesh</span>
                                <span className="bg-gray-300 font-bold p-1 px-4">2.50</span>
                            </div>
                            <div className="col-span-2 border border-gray-300 flex justify-between m-1">
                                <span className="font-bold p-1">Bangladesh</span>
                                <span className="bg-gray-300 font-bold p-1 px-4">2.50</span>
                            </div>
                            <div className="col-span-2 border border-gray-300 flex justify-between m-1">
                                <span className="font-bold p-1">Bangladesh</span>
                                <span className="bg-gray-300 font-bold p-1 px-4">2.50</span>
                            </div>
                            <div className="col-span-2 border border-gray-300 flex justify-between m-1">
                                <span className="font-bold p-1">Bangladesh</span>
                                <span className="bg-gray-300 font-bold p-1 px-4">2.50</span>
                            </div>
                            <div className="col-span-2 border border-gray-300 flex justify-between m-1">
                                <span className="font-bold p-1">Bangladesh</span>
                                <span className="bg-gray-300 font-bold p-1 px-4">2.50</span>
                            </div>
                        </div>
                    </div>
                </Disclosure.Panel>
            </Disclosure>

        </div>
    )
}

export default BetList