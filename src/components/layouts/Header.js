import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/authContext'

const Header = () => {
  const user = useContext(AuthContext);
  console.log('from hader component', user);
  return (
    <div className='flex justify-between p-4'>
      <div>Welcome</div>
      <div>
        {user ? <Link to='/profile' className='p-2 bg-gray-200 m-2'>Profile</Link>:
        (<><Link to='/login' className='p-2 bg-gray-200 m-2'>Login</Link>
        <Link to='/register' className='p-2 bg-gray-200 m-2'>Register</Link></>)
        }
        
        
      </div>
    </div>
  )
}

export default Header