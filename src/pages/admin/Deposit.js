import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaEdit, FaEye, FaPlusCircle, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import axios from '../../util/axios'

const Deposit = () => {
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/deposites')
      .then((res) => {
        setDeposits(res.data.docs)
        console.log(res);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <DashboardLayout>
      <Breadcrumb>
        <li className="inline-flex items-center">
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Deposites List
          </Link>
          {/* <span class="mx-4 h-auto text-gray-400 font-medium">/</span> */}
        </li>
      </Breadcrumb>

      <div className='bg-white p-2'>
        <button className='bg-gray-800 p-1 mb-3 border shadow-md'>
          <Link to='/' className='flex items-center space-x-1 text-gray-100'>
            <FaPlusCircle />
            <span className=' text-sm font-semibold'>Add Match</span>
          </Link>
        </button>
        <table className="border-collapse border border-slate-400 w-full">
          <thead>
            <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
              <th className="border border-slate-300">S.N</th>
              <th className="border border-slate-300">User</th>
              <th className="border border-slate-300">Amount</th>
              <th className="border border-slate-300">Method</th>
              <th className="border border-slate-300">From</th>
              <th className="border border-slate-300">To</th>
              <th className="border border-slate-300">Transaction</th>
              <th className="border border-slate-300">Status</th>
              <th className="border border-slate-300">Action</th>
              <th className="border border-slate-300">Time</th>
            </tr>
          </thead>
          <tbody>
            {
              deposits.map((deposit, index) => {
                return (
                  <tr className='p-1 text-sm' key={index}>
                    <td className="p-2 border border-slate-300 text-center">{index+1}</td>
                    <td className="p-2 border border-slate-300">Jamal Mia</td>
                    <td className="p-2 border border-slate-300">{deposit.amount}</td>
                    <td className="p-2 border border-slate-300">{deposit.method}</td>
                    <td className="p-2 border border-slate-300">{deposit.from_account}</td>
                    <td className="p-2 border border-slate-300">{deposit.to_account}</td>
                    <td className="p-2 border border-slate-300">{deposit.transactionId}</td>
                    <td className="p-2 border border-slate-300">
                      {
                        deposit.status ? (<span class="m-2 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-normal text-green-600">
                          Completed
                        </span>) :
                          (<span class="m-2 px-2 py-1 bg-red-200 hover:bg-green-300 rounded-full text-xs font-normal text-green-600">
                            Pending
                          </span>)
                      }
                    </td>
                    <td className="p-2 border border-slate-300 ">
                      <button class="inline-flex items-center justify-center w-5 h-5 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-full focus:shadow-outline hover:bg-pink-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      </button>

                      <button class="inline-flex items-center justify-center w-5 h-5 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-pink-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                    <td className="p-2 border border-slate-300">sdf</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>


        {/* <div className="bg-white p-4 flex items-center flex-wrap">
                    <nav aria-label="Page navigation">
                        <ul className="inline-flex space-x-2">
                            <li><button className="flex items-center justify-center w-10 h-10 text-green-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-green-100">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                            </li>
                            <li><button className="w-10 h-10 text-green-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-green-100">1</button></li>
                            <li><button className="w-10 h-10 text-white transition-colors duration-150 bg-green-600 border border-r-0 border-green-600 rounded-full focus:shadow-outline">2</button></li>
                            <li><button className="w-10 h-10 text-green-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-green-100">3</button></li>
                            <li><button className="flex items-center justify-center w-10 h-10 text-green-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-green-100">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                            </li>
                        </ul>
                    </nav>
                </div> */}
      </div>
    </DashboardLayout>
  )
}

export default Deposit