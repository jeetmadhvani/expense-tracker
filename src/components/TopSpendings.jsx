import React from 'react'
import TopSpendingEl from './TopSpendingEl'
import { MoveRight } from "lucide-react";

const TopSpendings = () => {
  return (
    <div className='bg-[#222222] w-full h-full rounded-3xl p-5 text-[#eaeaea] shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all border border-white/5 bg-linear-to-br from-[#222] to-[#1d1d1d] font-mono'>
          <h1 className='text-[#eaeaea]'>Top categories this month</h1>
          <div className='flex flex-col gap-3 mt-10'>
            <TopSpendingEl idx={1} category={"Shopping"} amt={"3,500"} change={23}/>
            <TopSpendingEl idx={2} category={"Rent"} amt={"3,000"} change={0} />
            <TopSpendingEl idx={3} category={"Transport"} amt={"1,500"} change={10} />
            <TopSpendingEl idx={4} category={"Food"} amt={"1,000"} change={45} />
            <TopSpendingEl idx={5} category={"Entertainment"} amt={"600"} change={5} />
          </div>
          <div className='w-full flex items-center justify-center'>
            <button className=' shadow-[0_0_20px_rgba(0,0,0,0.2)] flex gap-3 py-2 px-6 rounded-2xl bg-[rgba(var(--theme-color),0.8)] font-mono hover:bg-[rgba(var(--theme-color),1)] active:bg-[rgba(var(--theme-color),0.8)] mt-10 hover:scale-110 hover:-translate-y-1 transition-all ease-in-out duration-200 active:translate-y-1 active:scale-95'>View All <MoveRight /></button>
          </div>
      </div>
  )
}

export default TopSpendings
