import { useState } from "react";

const App = () => {
	// Filter Logic Implementation
	const [todoTitle, setTodoTitle] = useState("");
	const [todoList, setTodoList] = useState([]);
	// todoList = newList

	// oracle ->
	// phd
	// class 1, class 2

	const submitHandler = (event) => {
		event.preventDefault();
		if (!todoTitle.trim()) return alert(`Please provide a valid title`);

		const newTodo = {
			id: Date.now() + "",
			title: todoTitle,
			isCompleted: false,
		};
		// State
		// invalid
		// todoList.push(newTodo)
		setTodoList([...todoList, newTodo]);
		// [{}, {}, newTodo]
		setTodoTitle("");
	};

	const removeHandler = (todoId) => {
		// todoId = "2"
		//
		// todoList.filter((todo) => true)
		const newList = todoList.filter((todo) => todo.id !== todoId);
		//                            ((todo) => "2" !== "2")
		setTodoList(newList);
		//
	};

	const updateHandler = (todoId) => {
		const newList = todoList.map((todo) => {
			if (todo.id === todoId) {
				// todo.isCompleted = !todo.isCompleted;
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return { ...todo };
		});

		setTodoList(newList);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h2>Our Todo App</h2>
			{/* <select name="" id="">
				<option value=""></option>
			</select> */}
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={todoTitle}
					onChange={(event) => setTodoTitle(event.target.value)}
				/>
				<button type="submit">Add Todo</button>
			</form>
			<ul>
				{todoList.map((todo) => (
					<li key={todo.id}>
						<input
							type="checkbox"
							checked={todo.isCompleted}
							onChange={() => updateHandler(todo.id)}
						/>
						<span>{todo.title}</span>
						<button onClick={() => removeHandler(todo.id)}>
							Remove Todo
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
