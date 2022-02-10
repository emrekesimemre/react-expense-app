import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  // yeni girilen verileri Newexpense comp'a attık
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
    console.log(expenseData);

    //NewExpense comp.'den id oluşturup veri ekleme işlemi yapıyoruz 
    props.onSaveExpenseData(expenseData)
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.1"
            step="0.1"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={enteredDate} onChange={dateChangeHandler} type="date" />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button>Add New Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
