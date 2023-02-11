import './NewExpense.css';

function NewExpense(props) {
	const submitHandler = (event) => {
		event.preventDefault();
		let expenseData = {};

		const formdata = new FormData(event.target);

		for(const key of formdata.keys()) {
			expenseData[key] = formdata.get(key);
		}

		console.log( expenseData );
		event.target.reset();

		props.addExpense(expenseData);

	}


	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label>Title</label>
					<input type="text" name="expense_title"/>
				</div>
				<div>
					<label>Amount</label>
					<input type="number" name="expense_amount"/>
				</div>
				<div>
					<label>Date</label>
					<input type="date" name="expense_date"/>
				</div>
				<div>
					<button>Add Item</button>
				</div>
			</form>
		</div>
	)
}

export default NewExpense;