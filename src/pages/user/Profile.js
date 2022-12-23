import React, { useContext } from 'react'
import { FaAddressCard, FaMailBulk, FaMobileAlt, FaPhone, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa'
import AppLayout from '../../components/layouts/AppLayout'
import AuthContext from '../../contexts/authContext'

const Profile = () => {
    const user = useContext(AuthContext);
    console.log(user);
    return (
        <AppLayout>
            <div className='p-4 text-center max-w-xl mx-auto text-purple-800'>
                {/* <div className='mx-auto'>
                    <FaUser className=''/>
                </div> */}
                <div className='divide-y divide-gray-200 border'>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaAddressCard />
                        <span>Name: {user.name}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaUser />
                        <span>Username: {user.username}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaMailBulk />
                        <span>Email: {user.email}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaMobileAlt />
                        <span>Mobile: {user.mobile}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaUsers />
                        <span>CLub: 23234</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <FaUserPlus />
                        <span>Sponser: 23234</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Profile