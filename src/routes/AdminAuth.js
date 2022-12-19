import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../contexts/authContext'

const AdminAuth = () => {
  const user = useContext(AuthContext);
  return (
    user
    ?<Outlet/>
    :<Navigate to='/login' />
  )
}

export default AdminAuth