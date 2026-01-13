import MiniBarChart from './MiniBarChart'
import React from 'react'

const SpendingChartContainer = () => {
  return (
    <div className='bg-[#222222] w-full h-full rounded-3xl p-5 text-[#eaeaea] shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all border border-white/5 bg-linear-to-br from-[#222] to-[#1d1d1d]'>
        <div>
            <h1 className='font-mono text-[#eaeaea]'>Weekly Spendings</h1>
            <MiniBarChart />
        </div>
    </div>
  )
}

export default SpendingChartContainer
