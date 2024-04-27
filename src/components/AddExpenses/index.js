import '../AddExpenses/styles.css'
import { useState, useContext, useEffect } from 'react';
import { ExpensesContext } from '../../ExpensesContext';
import { useLocation, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

const AddExpenses = () => {
    const { addExpense, expense, editExpense } = useContext(ExpensesContext);
    // const history = useHistory();
    let navigate = useNavigate();
    let { state } = useLocation();
const [type, setType] = useState('');
const [date, setDate] = useState('');
const [amount, setAmount] = useState('');
const [isEdit, setEdit] = useState(false);

useEffect(()=> {
   if(state?.val) {
    const editExpenses =  expense.filter((item)=> item.id == state.val)
    setAmount(editExpenses[0]?.amount)
    setType(editExpenses[0]?.type)
    setDate(editExpenses[0]?.date)
    }
    setEdit(true)
})

  function handleSubmit(event) {
    event.preventDefault();
    addExpense({
        amount: amount,
        date: date,
        type: type,
        id: uuid()
      });
    // }
      console.log(isEdit, 'isEdit');
    //   if(isEdit){
    //     const editExpenses =  expense.filter((item)=> item.id == state.val)
    //     editExpense({
    //         amount: amount,
    //         date: date,
    //         type: type,
    //         id: editExpenses[0]?.id
    //     })
    //   }
      navigate('/myExpenses', { replace: true });
  }

    return (<>
    <div className="addExpenseWrapper">
        <h3>Add Your Expense Here</h3>
        <form className='expenseFormContainer' onSubmit={handleSubmit}>
            <div>
            <label>
                Amount
            </label>
            <input onChange={(e)=>setAmount(e.target.value)} defaultValue={amount} type="number"></input>
            </div>
            <div>
            <label>
                Type
            </label>
           <select onChange={(e)=>setType(e.target.value)} defaultValue={type}>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="travel">Travel</option>
           </select>
            </div>
            <div>
            <label>
                Creation Date
            </label>
            <input onChange={(e)=>setDate(e.target.value)} type="date" defaultValue={date}></input>
            </div>
            <button type="submit">Add/Edit Expenses</button>
        </form>
    </div>
    </>)
}

export default AddExpenses;