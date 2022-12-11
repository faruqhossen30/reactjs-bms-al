import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'

const BetPanel = () => {
  return (
    <DashboardLayout>
      <form action="#" method="POST">
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
      </form>
    </DashboardLayout>
  )
}

export default BetPanel