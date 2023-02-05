import ExpenseItem from './components/ExpenseItem'

function App() {

  const expenses = [
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
  ]

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  )
}

export default App