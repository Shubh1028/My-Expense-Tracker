import React from "react";
import '../MyExpenses/styles.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ExpensesContext } from "../../ExpensesContext";


const MyExpenses = () => {
    const { expense, deleteExpesne } = useContext(ExpensesContext);
    console.log(expense, 'expense')

    const calculateTotalExpense = () =>{
        let totalExpense =0
        if(expense.length === 0 ){
            return 0;
        }
        for(let i =0; i<expense.length; i++){
            totalExpense +=  +expense[i].amount
        }
        console.log(totalExpense, 'check-ecpense')
        return totalExpense
    }


    return (
        <>
       <div className="expenseWrapper">
        <div className="expenseHeader">
            <div>Amount</div>
            <div>Type</div>
            <div>Time</div>
            <div>Delete</div>
            <div>Edit</div>
        </div>
        {expense.map((item)=>{return (
             <div className="expenseBody" key={item.id}>
             <div>{item.amount}</div>
             <div>{item.type}</div>
             <div>{item.date}</div>
             <div><button onClick={()=>deleteExpesne(item.id)}>Delete</button></div>
             <div><Link to="/addExpenses" state={{val: item.id}}><button >Edit</button></Link></div>
         </div>
        )})}
        <div className="totalExpense">
            <div>Total Expense</div>
            <div>{calculateTotalExpense()}</div>
        </div>
        <button><Link to="/addExpenses">Add New Expense</Link></button>
       </div>
        </>
    )
}

export default MyExpenses;