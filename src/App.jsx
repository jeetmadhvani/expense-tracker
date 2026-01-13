import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Subscriptions from "./pages/Subscriptions";
import Goals from "./pages/Goals";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import { useState } from "react";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Amazon Purchase",
      amount: 1299,
      category: "Shopping",
      date: "21st November, 2025",
      description: "Purchased a new sweater for christmas"
    },
    {
      id: 2,
      title: "PS5",
      amount: 45000,
      category: "Others",
      date: "20th November, 2025",
      description: "new addition to the collection 🔥"
    },
  ]);

  const addTransaction = (tx) => {
    setTransactions(prev => [{ id: Date.now(), ...tx }, ...prev]);
    console.log({transactions})
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
    console.log({transactions})
  };

  return (
    <div className="bg-[#1a1a1a]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard 
                                    transactions={transactions} 
                                    onDelete={deleteTransaction}
                                    addTransaction={addTransaction} 
                                    deleteTransaction={deleteTransaction}
                                    setTransactions={setTransactions} />} />
        <Route path="/transactions" element={<Transactions 
                                                transactions={transactions} 
                                                addTransaction={addTransaction} 
                                                deleteTransaction={deleteTransaction}
                                                setTransactions={setTransactions} />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;