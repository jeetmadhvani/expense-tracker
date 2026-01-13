import React from 'react'
import TransactionItem from './TransactionItem'
import { MoveRight, Plus } from 'lucide-react'

const Subscriptions = () => {
  return (
    <div className='bg-[#222222] w-full h-full rounded-3xl p-5 text-[#eaeaea] shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all border border-white/5 bg-linear-to-br from-[#222] to-[#1d1d1d]'>
        <div className='flex justify-between'>
          <h1 className='font-mono text-[#eaeaea]'>Bills & Subscriptions</h1>
          <div className='flex h-full gap-4 items-center '>
            <button className=' shadow-[0_0_20px_rgba(0,0,0,0.2)] flex gap-3 py-2 px-2 rounded-2xl bg-[rgba(var(--theme-color),0.8)] font-mono hover:bg-[rgba(var(--theme-color),1)] active:bg-[rgba(var(--theme-color),0.8)] mt-10 hover:scale-110 hover:-translate-y-1 transition-all ease-in-out duration-200 active:translate-y-1 active:scale-95'><Plus /></button>
            <button className=' shadow-[0_0_20px_rgba(0,0,0,0.2)] flex gap-3 py-2 px-6 rounded-2xl bg-[rgba(var(--theme-color),0.8)] font-mono hover:bg-[rgba(var(--theme-color),1)] active:bg-[rgba(var(--theme-color),0.8)] mt-10 hover:scale-110 hover:-translate-y-1 transition-all ease-in-out duration-200 active:translate-y-1 active:scale-95'>View All <MoveRight /></button>
          </div>
        </div>
        <div className='h-85 w-full mt-10 flex flex-col gap-2'>
            <TransactionItem idx={1} title={"Spotify Premium"} amt={"199"} category={""} date={"1st November, 2025"} />
            <TransactionItem idx={2} title={"YouTube Premium"} amt={"129"} category={""} date={"5th November, 2025"} />
            <TransactionItem idx={3} title={"Netflix Monthly"} amt={"649"} category={""} date={"7th November, 2025"} />
            <TransactionItem idx={4} title={"Apple iCloud Storage"} amt={"75"} category={""} date={"10th November, 2025"} />
        </div>
    </div>
  )
}

export default Subscriptions
