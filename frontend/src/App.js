import React, {useState} from 'react';
import ExpenseItem from './components/ExpenseItem'
import Card from './components/Card';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 399.99,
      date: new Date(2023, 2, 5)
    },
    {
      id: 'e2',
      title: 'Shopping',
      amount: 999.99,
      date: new Date(2023, 1, 5)
    },
  ]);

  const addExpenseHandler = (newExpense) => {
    const data = {
      id : Math.random().toString(),
      title: newExpense.expense_title,
      amount: newExpense.expense_amount,
      date: new Date(newExpense.expense_date)
    }

    setExpenses([...expenses, data] );
  }

  return (
    <Card>
      {
        expenses.map( (expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
      <NewExpense addExpense={addExpenseHandler}/>
    </Card>
  )
}

export default App