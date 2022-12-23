import React, { useContext, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import InputInnerLabel from '../components/frontend/form/InputInnerLabel';
import AuthContext from '../contexts/authContext';

const Register = () => {
    const user = useContext(AuthContext);
    const [error, setError] = useState();

    const email = useRef();
    const password = useRef();

    if(user){
        return <Navigate to='/' />
    }else{
        return (
            <div className='bg-gray-100 min-h-full py-12 pb-20'>
                <div>
                    <Link to='/'>
                    <img className="mx-auto h-12 w-auto rounded-full mt-3" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    </Link>
                    <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500"> Login Now !</Link>
                    </p>
                </div>
                <form className="mt-6 space-y-4 max-w-lg mx-auto px-2" method="POST">
                    <div className="flex items-center space-x-2">
                        <InputInnerLabel name="name" placeholder="Full Name*" />                   
                        <InputInnerLabel name="username" placeholder="username*" />                   
                    </div>
                    <div className="flex items-center space-x-2">
                        <InputInnerLabel name="email" placeholder="Email*" />                   
                        <InputInnerLabel name="mobile" placeholder="Mobile no*" />                   
                    </div>
                    <div className="flex items-center space-x-2">
                        <InputInnerLabel name="email" placeholder="Email*" />                   
                        <InputInnerLabel name="sponsername" placeholder="Sponser Name*" />                   
                    </div>
                    <div className="flex items-center space-x-2">
                        <InputInnerLabel name="password" type='password' placeholder="Password*" />                   
                        <InputInnerLabel name="confirm_password" type='password' placeholder="Confirm Password*" />                   
                    </div>
    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
    
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>
    
                    <div>
                        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Register Now !
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register