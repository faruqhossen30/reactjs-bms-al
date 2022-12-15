import React from 'react'
import { FaEdit, FaEye, FaPlusCircle, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/dashboard/Breadcrumb'
import DashboardLayout from '../../components/layouts/DashboardLayout'

const BetPanel = () => {
  return (
    <DashboardLayout>
      <Breadcrumb>
        <li className="inline-flex items-center">
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Team List
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
            <tr className='bg-gray-100'>
              <th className="border border-slate-300">S.N</th>
              <th className="border border-slate-300">Nae</th>
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Action</th>
              <th className="border border-slate-300">Action</th>
              <th className="border border-slate-300">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='p-1' >
              <td className="p-2 border border-slate-300 text-center">sdf</td>
              <td className="p-2 border border-slate-300">
              sdf
              </td>
              <td className="p-2 border border-slate-300">sdf</td>
              <td className="p-2 border border-slate-300 ">
                <div className='flex space-x-2 text-right'>
                  <Link to='/'> <FaEye /> </Link>
                  <Link to='/'> <FaEdit /> </Link>
                  <Link to='/'> <FaTrash /> </Link>
                </div>
              </td>
            </tr>

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

      {/* <form action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="team_one" className="block text-sm font-medium text-gray-700"> Team One </label>
                <input type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="team_one" className="block text-sm font-medium text-gray-700"> Team One </label>
                <input type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" />
              </div>
            </div>
          </div>
        </div>
      </form> */}
    </DashboardLayout>
  )
}

export default BetPanel