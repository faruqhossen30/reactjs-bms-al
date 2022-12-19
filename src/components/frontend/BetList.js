import { Disclosure } from '@headlessui/react';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FaCalendar, FaCalendarAlt } from 'react-icons/fa';
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

            <Disclosure as='div' className='shadow-md p-2 mb-1 border border-purple-300 text-sm'>
                <Disclosure.Button as='div' className="cursor-pointer">
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
                        <span>First ODI-12 </span>
                        <span className='flex items-center text-sm space-x-2'> -<FaCalendarAlt/> Decenmber 2022 12:00 PM</span>
                    </div>
                </Disclosure.Button>

                <Disclosure.Panel className="">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
            </Disclosure>

        </div>
    )
}

export default BetList