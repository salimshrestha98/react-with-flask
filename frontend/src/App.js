import ExpenseItem from './components/ExpenseItem'
import Card from './components/Card';

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
    </Card>
  )
}

export default App