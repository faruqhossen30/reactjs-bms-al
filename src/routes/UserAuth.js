import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../contexts/authContext'

const UserAuth = () => {
  const user = useContext(AuthContext);
  return (
    user
    ?<Outlet/>
    :<Navigate to='/login' />
  )
}

export default UserAuth