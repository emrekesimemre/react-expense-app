import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.12,
    date: new Date(2021, 2, 5),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.97,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450.12,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //newExpense comp'a gönderiyoruz
  const addExpenseHander = (expense) => {
    // setExpenses([expense, ...expenses])
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHander} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
