import { useState, useEffect } from "react";

const App = () => {
	// const [counter, setCounter] = useState(20);
	// const [counter2, setCounter2] = useState(10);
	// const [counter3, setCounter3] = useState(25);
	const [todos, setTodos] = useState([]);
	// todos = data
	const [todoTitle, setTodoTitle] = useState("");
	// todos = data

	const getAllTodos = () => {
		fetch(`http://localhost:3000/todos`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "data");
				setTodos(data);
				// data
			});
	};

	useEffect(() => {
		console.log("I am inside SideEffect");
		getAllTodos();
	}, []);

	console.log("I am being rendered");

	const submitHandler = (e) => {
		e.preventDefault();
		if (!todoTitle.trim()) return alert(`Please provide a valid title`);

		const newTodo = {
			title: todoTitle,
			isCompleted: false,
		};

		// REST VERB
		// GET
		// POST
		// PATCH/PUT
		// DELETE
		fetch(`http://localhost:3000/todos`, {
			method: "POST",
			body: JSON.stringify(newTodo),
			headers: {
				"Content-type": "application/json",
			},
		}).then(() => {
			getAllTodos();
			setTodoTitle("");
		});
	};

	//
	const removeHandler = (todoId) => {
		fetch(`http://localhost:3000/todos/${todoId}`, {
			method: "DELETE",
		}).then(() => {
			getAllTodos();
		});
	};

	// update handler with api
	// filtering
	return (
		<div style={{ textAlign: "center" }}>
			<h2>Connecting APIS with our components</h2>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={todoTitle}
					onChange={(e) => setTodoTitle(e.target.value)}
				/>
				<button type="submit">Create Todo</button>
			</form>

			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input type="checkbox" checked={todo.isCompleted} />
						<span>{todo.title}</span>
						<button onClick={() => removeHandler(todo.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
