import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  //Expense forma id oluşturup veri yolluyoruz propsla
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEdit(true);
  };

  const stopEditingHandler = () => {
    setIsEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEdit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
