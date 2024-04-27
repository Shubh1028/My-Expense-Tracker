import { Routes, Route } from "react-router-dom"
import { useState } from 'react';
import './App.css';
import MyExpenses from './components/MyExpenses';
import AddExpenses from './components/AddExpenses';
import { ExpensesContext } from "./ExpensesContext";
const initialState = [
		// { id: 12, type: 'food', amount: 40, date: '' },
		// { id: 13, type: 'transport', amount: 400 , date: '' },
		// { id: 14, type: 'travel', amount: 50 , date: '' },
	]

function App() {
  const [expense, setExpenses] = useState(initialState);
  const addExpense = (item) => setExpenses((items) => [...items, item]);
  const deleteExpesne = (id) =>
  setExpenses((items) => items.filter((item) => item.id !== id));
  const editExpense = (item) => {
    console.log(item)
  //  setExpenses(expense.map((list)=>{
  //   if(list.id == item.id){
  //     list.amount = item.amount;
  //     list.type = item.type;
  //     list.date = item.date;
  //   }
  // }))
  }
  const value = {
    expense,
    addExpense,
    deleteExpesne,
    editExpense
  };

  return (
    <div className="App">
      <ExpensesContext.Provider value={value}>
     <Routes>
        <Route path="/" element={ <MyExpenses/> } />
        <Route path="myExpenses" element={ <MyExpenses/> } />
        <Route path="addExpenses" element={ <AddExpenses/> } />
      </Routes>
      </ExpensesContext.Provider>
    </div>
  );
}

export default App;
