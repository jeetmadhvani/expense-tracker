import React from 'react'
import TransactionFilters from './TransactionFilters'
import TransactionItem from './TransactionItem'
import { ChevronRight, ChevronLeft } from 'lucide-react'


const TransactionForm = ({onAddClick, transactions, onDelete}) => {

  return (
    <div className='bg-linear-to-br from-[#222] to-[#1d1d1d] shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all border border-white/5 h-300 rounded-3xl w-full p-5'>
        <div><TransactionFilters onAddClick={onAddClick} /></div>
        <div className='flex flex-col justify-between gap-3'>
            <div className='bg-[#222222] mt-5 rounded-3xl transition-all border border-white/5 h-9/10 flex flex-col gap-2 p-3'>
                {transactions.map((t, idx) => (
                  <TransactionItem key={t.id} idx={idx + 1} title={t.title} amt={t.amount.toLocaleString("en-IN")} category={t.category} date={t.date} desc={t.description} onDelete={() => onDelete(t.id)}/>
            ))}
            </div>
            <div className='w-full h-15 justify-center items-center flex gap-0 text-[#eaeaea]'>
                <ChevronLeft size={40}/>
                <ChevronRight size={40}/>
            </div>
        </div>
    </div>
  )
}

export default TransactionForm
