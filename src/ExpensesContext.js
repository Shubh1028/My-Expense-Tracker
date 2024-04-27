import { createContext } from 'react';


export const ExpensesContext = createContext({expenses: [],
    addExpense: () => {},
    deleteExpense: () => {},
    editExpense: () => {}
});