import React, { useState } from 'react'
import SummaryCard from '../components/SummaryCard'
import SpendingChartContainer from '../components/SpendingChartContainer'
import TopSpendings from '../components/TopSpendings'
import RecentTransactions from '../components/RecentTransactions'
import DashboardHero from '../components/DashboardHero'
import GoalTracking from '../components/GoalTracking'
import Subscriptions from '../components/Subscriptions'
import Modal from '../components/Modal'

const Dashboard = ({ transactions, onDelete, addTransaction }) => {

  const monthlyBudget = 90000;

  const totalExpenses = transactions
  .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const remaining = Math.max(0, monthlyBudget - totalExpenses);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#1a1a1a] min-h-screen w-full px-20 flex flex-col gap-4'>
      <div className='w-full h-20 mt-10'><DashboardHero /></div>
      <div className='flex w-full h-40 gap-4 mt-15'>
        <SummaryCard title="Expenses" amount={totalExpenses} change={10000} />
        <SummaryCard title="Monthly Budget" amount={monthlyBudget} change={10000} />
        <SummaryCard title="Remaining" amount={remaining} change={10000} />
      </div>
      <div className='flex gap-4'>
        <div className='w-[70%] h-165'>
          <SpendingChartContainer />
        </div>
        <div className='w-3/10 h-165 flex flex-col gap-4'>
          <div className='w-full h-[25.2]'>
            <GoalTracking />
          </div>
          <div className='w-full h-[100.8]'>
            <TopSpendings />
          </div>
        </div>
      </div>
      <div className='flex gap-4'>
         <div className='w-1/2 h-130 mb-20'><RecentTransactions
                                              transactions={transactions} 
                                              onDelete={onDelete} 
                                              onAddClick={() => setIsOpen(true)}
                                            />
          </div>
          <div className='w-1/2 h-130 mb-20'><Subscriptions /></div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onAdd={addTransaction}/>
    </div>
  )
}

export default Dashboard
