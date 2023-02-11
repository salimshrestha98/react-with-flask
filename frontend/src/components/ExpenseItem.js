import React, {useState} from 'react';

import './ExpenseItem.css';
import Card from './Card';

function ExpenseItem(props) {
	const month = props.date.toLocaleString('en-US', {month: 'long'});
	const day = props.date.toLocaleString('en-US', {day: '2-digit'});
	const year = props.date.getFullYear();

	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		console.log('clicked');
		setTitle("Updated title");
	}

  return (
    <Card className="expense-item">
      <div>
		<div>{month}</div>
		<div>{day}</div>
		<div>{year}</div>
	  </div>
	  <div className="expense-item__description">
		<h2>{title}</h2>
		<div className="expense-item__price">{props.amount}</div>
		<button onClick={clickHandler}>Change Title </button>
	  </div>
    </Card>
  );
}

export default ExpenseItem;
