import React from 'react'
import { TiTick } from 'react-icons/ti'

const WebHostingPlan = () => {
  return (
    <div className='flex flex-col items-center justify-center w-3/4 rounded p-4 bg-gray-200 mb-7 md:w-2/4 lg:w-1/4'>
      <h3 className='text-3xl font-bold text-purple-900 '>
      Premium
      </h3>
      <strong className='text-3xl font-bold text-gray-900 my-5'>$4.99/mo</strong>
      <span className='bg-red-200 text-red-900 rounded-full px-2 py-1 font-semibold'>10% off</span>
      <div>
        <h5 className='text-2xl mb-1 font-semibold text-purple-700'>Top features</h5>
        <div className='flex items-center text-green-700 mb-1 ps-3'>
          <TiTick /> 100 website
        </div>
        <div className='flex items-center text-green-700 mb-1 ps-3'>
          <TiTick /> 100 GB 550 Stoarge
        </div>
        <div className='flex items-center text-green-700 mb-1 ps-3'>
          <TiTick /> Weekly Backups
        </div>
        <div className='flex items-center text-green-700 mb-1 ps-3'>
          <TiTick /> Unlimited BandWidth
        </div>
        <div className='flex items-center text-green-700 mb-1 ps-3'>
          <TiTick /> Free SLL
        </div>
        <div className='flex items-center text-green-700 mb-1 ps-3'>
          <TiTick /> Free Email
        </div>
      </div>
      <button className='mt-4 border-6 border-gray-900 text-gray-900 text-2xl font-bold p-1 rounded-full hover:text-white hover:bg-gray-900 transition w-full'>BUY NOW</button>
    </div>
  )
}

export default WebHostingPlan