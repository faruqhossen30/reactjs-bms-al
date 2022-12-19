import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/authContext'

const Header = () => {
  const user = useContext(AuthContext);
  // console.log('header ', user);
  return (
    <header className='flex items-center justify-between px-2 bg-white shadow-md py-2'>
      <div>
        <Link to='/'><img src="./logo.png" alt="" className='h-6' /></Link>
      </div>
      <div className=' space-x-1'>
        {
          user
            ? (
              <>
              <div className='hidden lg:block space-x-2'>
                <Link to='/register' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1'>Wallet</Link>
                <Link to='/register' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1'>Statement</Link>
                <Link to='/register' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1'>Deposit</Link>
                <Link to='/register' className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1'>Logout</Link>
                <span className='text-purple-800 font-bold'>$500</span>
              </div>
              <span className='lg:hidden text-purple-800 font-bold '>$500</span>
              </>
            )
            : (
              <>
                <Link to='/register' className=' font-normal text-sm bg-purple-800 rounded-sm text-white px-3 py-1'>Register</Link>
                <Link to='/login' className=' font-normal text-sm bg-purple-800 rounded-sm text-white px-3 py-1'>Login</Link>
              </>
            )
        }

      </div>
    </header>
  )
}

export default Header