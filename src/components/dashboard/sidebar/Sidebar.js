import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegBell, FaBars, FaPlus, FaHome, FaPlusCircle, FaGreaterThan, FaRegCircle, FaRegArrowAltCircleDown } from "react-icons/fa";
import Collapsible from 'react-collapsible';
import CollapsItem from './CollapsItem';


const Sidebar = () => {

    const collapesHandaller = (val)=>{
        console.log(val);
        console.log('welcome');
    }

    return (
        <aside className='bg-gray-800 hidden md:block md:col-span-3'>
            <div className='bg-gray-100 py-2 text-center'>
                <Link className='font-semibold' to='/'>Net T20</Link>
            </div>
            <div className='py-4 text-gray-300 font-semibold'>
                <ul className=''>
                    <li className=''>
                        <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaHome />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                            <FaHome />
                            <span>Chat</span>
                        </Link>
                    </li>
                    <li className=''>                        
                        <CollapsItem title="On Test" items={[
                            {
                                'id':1,
                                'title':'all',
                                'link':'/Create',
                            },
                            {
                                'id':2,
                                'title':'Create',
                                'link':'/Create',
                            },
                            {
                                'id':3,
                                'title':'List',
                                'link':'/Create',
                            }
                        ]} />
                    </li>
                    <li className=''>                        
                        <CollapsItem title="Category" items={[
                            {
                                'id':1,
                                'title':'all',
                                'link':'/Create',
                            },
                            {
                                'id':2,
                                'title':'Create',
                                'link':'/Create',
                            },
                            {
                                'id':3,
                                'title':'List',
                                'link':'/Create',
                            }
                        ]} />
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar