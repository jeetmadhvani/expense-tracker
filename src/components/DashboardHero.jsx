import React from 'react'

const DashboardHero = () => {
  return (
    <div className='w-full h-full flex justify-between'>
      <div className='flex flex-col'>
        <h1 className='text-[#eaeaea] font-mono text-5xl'>Welcome, Jeet!</h1>
        <p className='text-[#a0a0a0] text-1xl font-mono'>short message here</p>
      </div>
      <p className='text-[#a0a0a0] text-1xl font-mono'>21st November, 2025</p>
    </div>
  )
}

export default DashboardHero
