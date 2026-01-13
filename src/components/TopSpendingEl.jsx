import React from 'react'
import { Triangle } from 'lucide-react'

const TopSpendingEl = ({idx, category, amt, change}) => {
  return (
    <div className='bg-[#2a2a2a] px-4 py-2 flex justify-between items-center rounded-xl font-mono text-[#eaeaea] shadow-[0_0_20px_rgba(0,0,0,0.2)]'>
      <div className='flex justify-between items-center gap-4 w-89'>
        <div className='flex gap-3 text-xl'>
            <h1>{idx}.</h1>
            <h1>{category}</h1>
        </div>
        <div className='flex gap-1 items-center justify-between text-[#dadada] text-'>
            <h2>₹{amt}</h2>
        </div>
      </div>
      <div className='flex items-center justify-end w-10 gap-0.5'>
        <Triangle fill='#4ABF73' strokeWidth={0} size={10}/>
        <p className='text-[#4ABF73] text-xs'>{change}%</p>    
      </div>
    </div>
  )
}

export default TopSpendingEl
