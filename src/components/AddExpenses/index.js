import "../AddExpenses/styles.css";
import { useState, useContext, useEffect } from "react";
import { ExpensesContext } from "../../ExpensesContext";
import { useLocation, useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const AddExpenses = () => {
  const { addExpense, expense, editExpense } = useContext(ExpensesContext);
  let navigate = useNavigate();
  let { state } = useLocation();
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    if (state) {
      const editExpenses = expense.filter((item) => item.id == state.val);
      setAmount(editExpenses[0]?.amount);
      setType(editExpenses[0]?.type);
      setDate(editExpenses[0]?.date);
      setEdit(true);
    }
  }, [state]);

  function handleSubmit(event) {
    event.preventDefault();
    if (isEdit) {
      const editExpenses = expense.filter((item) => item.id == state.val);
      editExpense({
        amount: amount,
        date: date,
        type: type,
        id: editExpenses[0]?.id,
      });
      setEdit(false);
    } else {
      addExpense({
        amount: amount,
        date: date,
        type: type,
        id: uuid(),
      });
    }
    navigate("/myExpenses", { replace: true });
  }

  return (
    <>
      <div className="addExpenseWrapper">
        <h2>Add Your Expense Here</h2>
        <form className="expenseFormContainer" onSubmit={handleSubmit}>
          <div>
            <label>Amount</label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              defaultValue={amount}
              type="number"
              placeholder="Enter Your Amount"
            ></input>
          </div>
          <div>
            <label>Type</label>
            <select
              onChange={(e) => setType(e.target.value)}
              defaultValue={type}
            >
              <option value="">Select...</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Travel">Travel</option>
            </select>
          </div>
          <div>
            <label>Creation Date</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              defaultValue={date}
            ></input>
          </div>
          <button className="expenseWrapperButton" type="submit">
            {isEdit ? "Edit Expense" : "Add Expense"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddExpenses;
