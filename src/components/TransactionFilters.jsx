import React from 'react'
import { Search, Plus } from 'lucide-react'
import { useState } from "react";
import Modal from "../components/Modal";

const TransactionFilters = ({onAddClick}) => {

  return (
    <div className='w-full h-full'>
        <div className='flex flex-col gap-4 items-end'>
            <div className='flex gap-3 w-full h-full justify-between items-center'>
                <div className='flex gap-3 w-1/2 h-full'>
                    <select className=' text-[#eaeaea] shadow-[0_0_20px_rgba(0,0,0,0.2)] flex py-2 px-4 rounded-2xl bg-[rgba(var(--theme-color),0.8)] font-mono hover:bg-[rgba(var(--theme-color),1)] active:bg-[rgba(var(--theme-color),0.8)] hover:scale-105 hover:-translate-y-1 transition-all ease-in-out duration-200 active:translate-y-0.5 active:scale-95'>
                        <option>All Categories</option>
                        <option>Food</option>
                        <option>Transport</option>
                        <option>Shopping</option>
                    </select>
                    <select className=' text-[#eaeaea] shadow-[0_0_20px_rgba(0,0,0,0.2)] flex py-2 px-4 rounded-2xl bg-[rgba(var(--theme-color),0.8)] font-mono hover:bg-[rgba(var(--theme-color),1)] active:bg-[rgba(var(--theme-color),0.8)] hover:scale-105 hover:-translate-y-1 transition-all ease-in-out duration-200 active:translate-y-0.5 active:scale-95'>
                        <option>Date</option>
                        <option>Food</option>
                        <option>Transport</option>
                        <option>Shopping</option>
                    </select>
                </div>
                <div className='h-full w-1/2 pointer-none bg-[#1a1a1a] gap-2 flex rounded-2xl items-center pl-3 justify-between'>
                    <div className='text-[#eaeaea]'><Search /></div>
                    <input className='text-[#eaeaea] bg-[#1a1a1a] w-full h-full rounded-2xl py-3 pr-6'  type="text" placeholder='Search Transactions..'/>
                </div>
            </div>
            <div className='text-[#eaeaea] '>
                <button className='shadow-[0_0_20px_rgba(0,0,0,0.2)] flex gap-1 py-2 px-2 rounded-2xl bg-[rgba(var(--theme-color),0.8)] font-mono hover:bg-[rgba(var(--theme-color),1)] active:bg-[rgba(var(--theme-color),0.8)] hover:scale-110 hover:-translate-y-1 transition-all ease-in-out duration-200 active:translate-y-1 active:scale-95' onClick={onAddClick}>Add Expense<Plus /></button>
            </div>
        </div>
    </div>
  )
}

export default TransactionFilters
