import { Disclosure } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye, FaGamepad, FaPlusCircle, FaRegCalendarAlt, FaRegClock, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import axios from '../../../util/axios'

const BetPanel = () => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/matches')
      .then((res) => {
        setMatches(res.data.docs)
        // console.log(res);
      })
      .catch(err => console.log(err))
  }, []);
  return (
    <DashboardLayout>
      <Breadcrumb>
        <li className="inline-flex items-center">
          <Link to="/admin/bet-panel" className="text-gray-600 hover:text-blue-500">
            Bet Panel
          </Link>
          {/* <span class="mx-4 h-auto text-gray-400 font-medium">/</span> */}
        </li>
      </Breadcrumb>

      <div className='bg-white p-2'>
        <button className='bg-gray-800 p-1 mb-3 border shadow-md'>
          <Link to='/admin/bet/create' className='flex items-center space-x-1 text-gray-100'>
            <FaPlusCircle />
            <span className=' text-sm font-semibold'>Add Match</span>
          </Link>
        </button>


        <Disclosure as='div' className='shadow-md mb-1 border border-purple-300 text-sm' defaultOpen>
          <Disclosure.Button as='div' className='cursor-pointer py-2' >
            <div className='flex items-center justify-between'>
              <div className='flex'>
                <FaGamepad className="border rounded-full h-12 w-12 p-1 text-lg" />
                <div className='flex flex-col ml-2 text-left'>
                  <span className='text-xs text-gray-500'>Bangladesh VS India</span>
                  <span>1st ODI International</span>
                  <span className='flex items-center text-sm space-x-1'> <FaRegCalendarAlt /> <span> Decenmber 2022</span> <FaRegClock /> 12:00 PM</span>
                </div>
              </div>
              <div className='space-x-2'>
                <Link class="inline-flex items-center px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                  <FaTrash />
                  Delete
                </Link>
                <Link class="inline-flex items-center px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                  <FaTrash />
                  Delete
                </Link>
                <Link class="inline-flex items-center px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                  <FaTrash />
                  Delete
                </Link>
              </div>
            </div>
          </Disclosure.Button>

          <Disclosure.Panel className="">
            <div>
              <div className="text-white bg-purple-800 border px-2 py-1">
                <h4 className="text-white font-bold">Who win the match</h4>
                <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
              </div>
              <div>
                <table className="border-collapse border border-slate-400 w-full">
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className="border border-slate-300">S.N</th>
                      <th className="border border-slate-300">Anser</th>
                      <th className="border border-slate-300">Rate</th>
                      <th className="border border-slate-300">Place</th>
                      <th className="border border-slate-300">Amount</th>
                      <th className="border border-slate-300">Limit</th>
                      <th className="border border-slate-300">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='p-1' >
                      <td className="p-2 border border-slate-300 text-center">1</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="border border-slate-300 space-x-1 text-right">
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                      </td>
                    </tr>
                    <tr className='p-1' >
                      <td className="p-2 border border-slate-300 text-center">1</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="border border-slate-300 space-x-1 text-right">
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                      </td>
                    </tr>
                    <tr className='p-1' >
                      <td className="p-2 border border-slate-300 text-right" colspan="3">Total Bet:</td>
                      <td className="p-2 border border-slate-300 text-center">1200</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="p-2 border border-slate-300 text-center">sdfsdf</td>
                      <td className="border border-slate-300 space-x-1 text-right">
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                        <Link class="inline-flex items-center px-2 py-1 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded">
                          <FaTrash />
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Disclosure.Panel>
        </Disclosure>


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

export default BetPanel