import React from "react";
import "../MyExpenses/styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ExpensesContext } from "../../ExpensesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const MyExpenses = () => {
  const { expense, deleteExpesne } = useContext(ExpensesContext);
  const iconStyle = {
    color: "rgba(132, 71, 254, 1)",
    fontSize: "1.25rem",
    cursor: "pointer",
  };

  const calculateTotalExpense = () => {
    let totalExpense = 0;
    if (expense.length === 0) {
      return 0;
    }
    for (let i = 0; i < expense.length; i++) {
      totalExpense += +expense[i].amount;
    }
    return totalExpense;
  };

  return (
    <>
      <div className="expenseWrapper">
        <div className="totalExpense">
          <div>Total Expense</div>
          <div>Rs. {calculateTotalExpense()}</div>
        </div>
        <div className="expenseHeader">
          <div>Amount</div>
          <div>Type</div>
          <div>Time</div>
          <div>Delete</div>
          <div>Edit</div>
        </div>
        <div className="expeseDivider"></div>
        {expense.map((item) => {
          return (
            <div className="expenseBody" key={item.id}>
              <div>Rs. {item.amount}</div>
              <div>{item.type}</div>
              <div>{item.date}</div>
              <div>
                <FontAwesomeIcon
                  style={iconStyle}
                  onClick={() => deleteExpesne(item.id)}
                  icon={faTrashCan}
                />
              </div>
              <div>
                <Link to="/addExpenses" state={{ val: item.id }}>
                  <FontAwesomeIcon icon={faPenToSquare} style={iconStyle} />
                </Link>
              </div>
            </div>
          );
        })}
        <Link to="/addExpenses">
          <button className="expenseWrapperButton">Add Expense</button>
        </Link>
        {expense.length > 0 && (
          <Link to="/expenseAnalyze">
            <button className="expenseWrapperButton">Analyze Expense</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default MyExpenses;
