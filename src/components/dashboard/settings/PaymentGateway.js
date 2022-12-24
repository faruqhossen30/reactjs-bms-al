import { Tab } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaCross, FaEdit, FaSave } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import axios from '../../../util/axios'
import { Link, useNavigate } from 'react-router-dom'

const PaymentGateway = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [erros, setErrors] = useState([]);
    const [gatewayList, setGatewayList] = useState([]);
    const onSubmit = data => {
        axios.post('http://localhost:5000/api/payment-gateways', data)
            .then((res) => {
                console.log(res);
                navigate('/admin/dashboard')
            })
            .catch((err) => {
                console.log('this is error', err);
                setErrors(err.response.data.errors)
            })
    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/payment-gateways')
            .then((res) => {
                console.log('gateway', res);
                setGatewayList(res.data)
            })
            .catch((err) => {
                console.log('this is error', err);
            })
    }, []);
    return (
        <>
            <Tab.Panel>
                {/* <PaymentGateway/> */}
                <div className='border border-b-2 p-4'>
                    <h4>Payent Gateway</h4>
                    <span className='text-xs text-gray-500'>PaymentGateway</span>
                </div>
                <Tab.Group>
                    <Tab.List className='border-b-2'>
                        <Tab className='bg-gray-200 border m-1 py-1 px-3 rounded'>List</Tab>
                        <Tab className='bg-gray-200 border m-1 py-1 px-3 rounded'>Create</Tab>
                    </Tab.List>

                    <Tab.Panels>
                        <Tab.Panel>
                            <table className="border-collapse border border-slate-400 w-full">
                                <thead>
                                    <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
                                        <th className="border border-slate-300">S.N</th>
                                        <th className="border border-slate-300">Number</th>
                                        <th className="border border-slate-300">Method</th>
                                        <th className="border border-slate-300">Status</th>
                                        <th className="border border-slate-300">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gatewayList &&
                                        gatewayList.map((item, index) => {
                                            return (
                                                <tr className='p-1 text-sm' key={index}>
                                                    <td className="p-2 border border-slate-300 text-center">{index + 1}</td>
                                                    <td className="p-2 border border-slate-300">{item.accountNumber}</td>
                                                    <td className="p-2 border border-slate-300">{item.method}</td>
                                                    <td className="p-2 border border-slate-300 text-center">
                                                        {
                                                            item.status ?
                                                                <FaCheckCircle className='text-green-700' />
                                                                :
                                                                <FaCross className='text-green-700' />
                                                        }
                                                    </td>
                                                    <td className="p-2 border border-slate-300 text-center">
                                                        <Link to={`/admin/deposit/${item._id}`} className="inline-flex items-center justify-center w-5 h-5 text-green-700 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-pink-800">
                                                            <FaEdit />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }


                                </tbody>
                            </table>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='py-2'>
                                {
                                    erros &&
                                    <ul className='p-4'>
                                        {
                                            erros.map((item, index) => {
                                                return <li className='text-red-600 text-sm' key={index}>* {item.msg}</li>
                                            })
                                        }
                                    </ul>
                                }

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="px-4 py-1">
                                        <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 pb-1">Account Number</label>
                                        <input type="text" {...register("accountNumber", { required: 'Account Number is required.' })} name="accountNumber" id="accountNumber" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
                                        <span className='text-red-600 text-sm'>{errors.accountNumber?.message}</span>
                                    </div>
                                    <div className="px-4 py-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Method</label>
                                        <select name="method" id="" className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'
                                            {...register("method", { required: 'Banking method  is required. Example: BKash' })}>
                                            <option value="">Select</option>
                                            <option value="bkash">Bkash</option>
                                            <option value="nogod">nogod</option>
                                            <option value="rocket">rocket</option>
                                            <option value="mkash">mkash</option>
                                        </select>
                                        <span className='text-red-600 text-sm'>{errors.method?.message}</span>
                                    </div>
                                    <div className="px-4 py-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Method</label>
                                        <select name="type" id="" className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'
                                            {...register("type", { required: 'Banking type  is required. Example: Personal, Agent' })}>
                                            <option value="">Select</option>
                                            <option value="personal">personal</option>
                                            <option value="agent">agent</option>
                                        </select>
                                        <span className='text-red-600 text-sm'>{errors.type?.message}</span>
                                    </div>
                                    <div className="px-4 py-1">
                                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Method</label>
                                        <select name="status" id="" className='border w-full py-1 px-2 rounded-md focus:outline-none text-sm'
                                            {...register("status", { required: 'Status is requred.' })}>
                                            <option value="">Select</option>
                                            <option value="1">Active</option>
                                            <option value="0">Deactive</option>
                                        </select>
                                        <span className='text-red-600 text-sm'>{errors.status?.message}</span>
                                    </div>

                                    <div className='px-2 py-1'>
                                        <button className="inline-flex items-center px-3 py-2 space-x-1 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md mx-2">
                                            <FaSave />
                                            <span>Save </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </Tab.Panel>
        </>
    )
}

export default PaymentGateway