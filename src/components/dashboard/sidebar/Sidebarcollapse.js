import React from 'react'
import { FaRegBell, FaBars, FaPlus, FaHome, FaRegWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebarcollapse = ({sidebarToggle, toggleSidebar}) => {    
    return (
        <>
            <aside className={ `${sidebarToggle && "hidden"} bg-gray-800 w-72 fixed top-0 left-0 z-10 shadow-md`}>
                <div className='bg-white py-2 text-center flex justify-between px-2' >
                    <Link className='font-semibold' to='/'>Net T20</Link>
                    <button className='text-red-900' onClick={toggleSidebar}><FaRegWindowClose /></button>
                </div>
                <div className='py-4 text-gray-300 font-semibold'>
                    <ul className=''>
                        <li className='flex items-center space-x-2 pl-2 bg-gray-800'>
                            <FaHome />
                            <Link to='/' className='w-full py-2'>Dashboard</Link>
                        </li>
                        <li className='flex items-center space-x-2 pl-2 hover:bg-gray-800'>
                            <FaHome />
                            <Link to='/' className='w-full py-2'>Dashboard</Link>
                        </li>
                        <li className='flex items-center space-x-2 pl-2 hover:bg-gray-800'>
                            <FaHome />
                            <Link to='/' className='w-full py-2'>Dashboard</Link>
                        </li>
                        <li className='flex items-center space-x-2 pl-2 hover:bg-gray-800'>
                            <FaHome />
                            <Link to='/' className='w-full py-2'>Dashboard</Link>
                        </li>
                        <li className='flex items-center space-x-2 pl-2 hover:bg-gray-800'>
                            <FaHome />
                            <Link to='/' className='w-full py-2'>Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebarcollapse