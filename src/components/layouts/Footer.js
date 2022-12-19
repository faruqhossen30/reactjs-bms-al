import { Menu } from '@material-tailwind/react'
import React from 'react'
import { FaHome, FaList, FaMoneyBill, FaMoneyBillAlt, FaWallet } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='grid grid-cols-5 border-t-2 text-sm text-purple-800 bg-red-100 inset-x-0 bottom-0 fixed pt-1'>
            <div className='col-span-1 flex flex-col items-center'>
                <FaHome />
                <span>Home</span>
            </div>
            <div className='col-span-1 flex flex-col items-center'>
                <FaWallet />
                <span>Wallet</span>
            </div>
            <div className='col-span-1 flex flex-col items-center'>
                <FaMoneyBill />
                <span>Deposite</span>
            </div>
            <div className='col-span-1 flex flex-col items-center'>
                <FaMoneyBillAlt />
                <span>Statement</span>
            </div>
            <div className='col-span-1 flex flex-col items-center'>
                <FaList />
                <span>Account</span>
                
            </div>

        </footer>
    )
}

export default Footer