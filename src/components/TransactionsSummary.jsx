import React from 'react'
import SummaryCard from '../components/SummaryCard'
import TopSpendings from './TopSpendings';
import MiniBarChartContainer from './MiniBarChartContainer';
import { useState } from 'react';


const TransactionsSummary = ({ transactions }) => {
    const monthlyBudget = 90000;
    
    const totalExpenses = transactions
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    
    const remaining = Math.max(0, monthlyBudget - totalExpenses);
    

  return (
    <div className='flex flex-col w-full h-300 rounded-3xl justify-center items-center p-5 gap-4'>
        <div className='w-full flex gap-4 flex-col'>
            <h1 className='text-[#eaeaea] font-mono text-2xl'>This Month's Overview</h1>
           <SummaryCard title="Expenses" amount={totalExpenses} change={10000} />
            <SummaryCard title="Monthly Budget" amount={monthlyBudget} change={10000} />
            <SummaryCard title="Remaining" amount={remaining} change={10000} />
        </div>
        <div>
            <TopSpendings />
        </div>
    </div>
  )
}

export default TransactionsSummary
