import React from 'react'
import DoughnutChart from './DoughnutChart'

const GoalTracking = () => {
  return (
    <div className='bg-[#222222] w-full h-full rounded-3xl p-5 text-[#eaeaea] flex justify-between shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all border border-white/5 bg-linear-to-br from-[#222] to-[#1d1d1d]'>
        <div className='flex flex-col'>
            <h1 className='font-mono'>Buy a new phone</h1>
            <div className='flex flex-col mt-10'>
                <p className='text-4xl font-stretch-expanded font-mono'>₹2,00,000<span className='text-xs font-mono'>required</span></p>
                <p className='text-4xl font-stretch-expanded font-mono'>₹1,64,000<span className='text-xs font-mono'>collected</span></p>
            </div>
        </div>
        <DoughnutChart collected={164000} required={200000} />
    </div>
  )
}

export default GoalTracking
