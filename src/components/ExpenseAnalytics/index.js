import { Chart, ArcElement } from "chart.js/auto";
import "../ExpenseAnalytics/styles.css";
import { useContext } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { ExpensesContext } from "../../ExpensesContext";

const ExpenseAnalytics = () => {
  const { expense } = useContext(ExpensesContext);
  const aggregateExpensesByType = () => {
    const aggregatedData = {};
    expense.forEach((item) => {
      if (aggregatedData[item.type]) {
        aggregatedData[item.type] += Number(item.amount);
      } else {
        aggregatedData[item.type] = Number(item.amount);
      }
    });
    const dataArray = Object.entries(aggregatedData).map(([type, amount]) => ({
      type,
      amount,
    }));
    return dataArray;
  };
  const dataVal = aggregateExpensesByType();
  return (
    <>
      <div>
        <div className="chartWrapper">
          <div>
            <Doughnut
              data={{
                labels: dataVal.map((item) => item.type),
                datasets: [
                  {
                    label: "Amount",
                    data: dataVal.map((item) => item.amount),
                    backgroundColor: [
                      "rgba(132, 71, 254,1)",
                      "rgba(132, 71, 254,0.5)",
                      "rgba(132, 71, 254,0.1)",
                    ],
                  },
                ],
              }}
            />
          </div>
          <div>
            <Bar
              data={{
                labels: dataVal.map((item) => item.type),
                datasets: [
                  {
                    label: "Amount",
                    data: dataVal.map((item) => item.amount),
                    backgroundColor: [
                      "rgba(132, 71, 254,1)",
                      "rgba(132, 71, 254,0.5)",
                      "rgba(132, 71, 254,0.1)",
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ExpenseAnalytics;
