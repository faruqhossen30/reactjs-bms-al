import React from 'react'
import { FaHome, FaList, FaMoneyBill, FaMoneyBillAlt, FaWallet } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='grid grid-cols-5'>
            <div className='col-span-1 flex flex-col items-center'>
                <FaHome/>
                <span>Home</span>
            </div>
            <div className='col-span-1 flex flex-col items-center'>
                <FaWallet/>
                <span>Wallet</span>
            </div>
            <div className='col-span-1 flex flex-col items-center'>
                <FaMoneyBill/>
                <span>Deposite</span>
            </div>
            <div className='col-span-1 flex flex-col items-center'>
                <FaMoneyBillAlt/>
                <span>Statement</span>
            </div>
            <div className='col-span-1 flex flex-col items-center'>
                <FaList/>
                <span>Account</span>
            </div>
        </footer>
    )
}

export default Footer