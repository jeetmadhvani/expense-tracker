import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [monthlyBudget, setMonthlyBudget] = useState(10000);

  // Load saved data
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    const savedBudget = JSON.parse(localStorage.getItem("monthlyBudget"));

    if (savedTransactions) setTransactions(savedTransactions);
    if (savedBudget) setMonthlyBudget(savedBudget);
  }, []);

  // Save to localStorage when updated
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("monthlyBudget", JSON.stringify(monthlyBudget));
  }, [monthlyBudget]);

  return (
    <DataContext.Provider
      value={{
        transactions,
        setTransactions,
        monthlyBudget,
        setMonthlyBudget,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);