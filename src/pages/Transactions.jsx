import React, { useState } from 'react'
import TransactionForm from '../components/TransactionForm'
import TransactionsHero from '../components/TransactionsHero'
import TransactionsSummary from '../components/TransactionsSummary'
import Modal from "../components/Modal";

const Transactions = ({transactions, addTransaction, deleteTransaction}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#1a1a1a] h-450 w-full px-20 flex flex-col gap-4 mt-10'>
        
        <div className='w-full'>
          <TransactionsHero />
        </div>

        <div className='flex'>
          <div className='w-2/3'>
            <TransactionForm onAddClick={() => setIsOpen(true)} transactions={transactions} onDelete={deleteTransaction}/>
          </div>
          <div className='w-1/3'>
            <TransactionsSummary transactions={transactions} />
          </div>
        </div>
          
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onAdd={addTransaction}/>
    </div>
  )
}

export default Transactions