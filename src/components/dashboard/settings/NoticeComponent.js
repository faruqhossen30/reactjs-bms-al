import { Tab } from '@headlessui/react'
import React from 'react'

const NoticeComponent = () => {
    return (
        <>
         <Tab.Panel>
            <div className='border border-b-2 p-4'>
                <h4>Website Notice</h4>
                <span className='text-xs text-gray-500'>Website Notice</span>
            </div>
            <div className='py-2'>
                <form action="#" method="POST">
                    <div className="px-4">
                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Header Notice</label>
                        <textarea type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" ></textarea>
                    </div>
                    <div className="px-4">
                        <label htmlFor="team_one" className="block text-sm font-medium text-gray-700 pb-1">Footer Notice</label>
                        <textarea type="text" name="team_one" id="team_one" autoComplete="given-name" className="border w-full py-1 px-2 rounded-md focus:outline-none text-sm" ></textarea>
                    </div>

                </form>
            </div>
            </Tab.Panel>
        </>
    )
}

export default NoticeComponent