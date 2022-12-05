import React, { useState } from 'react'
import { FaHome, FaRegArrowAltCircleDown, FaRegCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CollapsItem = ({ title, items }) => {
    const [show, setShow] = useState(true)
    return (
        <>
            <Link className='w-full py-2 flex items-center justify-between space-x-2 pl-2 hover:bg-gray-900' onClick={() => setShow(!show)}>
                <div className='flex items-center space-x-2'>
                    <FaHome />
                    <span>{title}</span>
                </div>
                <span className='pr-2'><FaRegArrowAltCircleDown /></span>
            </Link>
            <div className={`${show && 'hidden'} pl-4 text-xs bg-gray-600`}>
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to='/' className='w-full py-2 flex items-center space-x-2 pl-2 hover:bg-gray-900'>
                                    <FaRegCircle />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </>
    )
}

export default CollapsItem