import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Feb 5, 2023</div>
	  <div className="expense-item__description">
		<h2>
			Car Insurance
		</h2>
		<div className="expense-item__price">$999.99</div>
	  </div>
    </div>
  );
}

export default ExpenseItem;
