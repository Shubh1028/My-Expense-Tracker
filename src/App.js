import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import MyExpenses from "./components/MyExpenses";
import AddExpenses from "./components/AddExpenses";
import { ExpensesContext } from "./ExpensesContext";
import ExpenseAnalytics from "./components/ExpenseAnalytics";
import Header from "./components/Header";
import Footer from "./components/Footer";
const initialState = [];

function App() {
  const [expense, setExpenses] = useState(initialState);
  const addExpense = (item) => setExpenses((items) => [...items, item]);
  const deleteExpesne = (id) =>
    setExpenses((items) => items.filter((item) => item.id !== id));
  const editExpense = (editedItem) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.map((item) => {
        if (item.id === editedItem.id) {
          return {
            ...item,
            amount: editedItem.amount,
            type: editedItem.type,
            date: editedItem.date,
          };
        } else {
          return item;
        }
      });
    });
  };
  const value = {
    expense,
    addExpense,
    deleteExpesne,
    editExpense,
  };

  return (
    <div className="App">
      <Header/>
      <ExpensesContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<MyExpenses />} />
          <Route path="myExpenses" element={<MyExpenses />} />
          <Route path="addExpenses" element={<AddExpenses />} />
          <Route path="expenseAnalyze" element={<ExpenseAnalytics />} />
        </Routes>
      </ExpensesContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
