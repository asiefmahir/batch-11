import { useState } from "react";

const App = () => {
	// Filter Logic Implementation
	const [todoTitle, setTodoTitle] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [filterTerm, setFilterTerm] = useState("all");
	const [editMode, setEditMode] = useState(false);
	const [editableTodo, setEditableTodo] = useState(null);
	//typeof null
	// filterTerm = "all"

	// calculated States === derived State

	const filteredTodoList = todoList.filter((todo) => {
		if (filterTerm === "completed") {
			return todo.isCompleted === true;
			// false === true
		} else if (filterTerm === "active") {
			return todo.isCompleted === false;
			// false === false
			// true === false
		} else {
			return true;
		}
	});

	// derived state
	// completedTodoList
	// activeTodoList

	// "all" "active" "completed"
	// todoList = newList

	// oracle ->
	// phd
	// class 1, class 2

	const submitHandler = (event) => {
		event.preventDefault();
		if (!todoTitle.trim()) return alert(`Please provide a valid title`);

		editMode === true ? updateTitleHandler() : createTodo();
	};

	const createTodo = () => {
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

	const editHandler = (todo) => {
		setEditMode(true);
		setEditableTodo(todo);
		setTodoTitle(todo.title);
	};

	const updateTitleHandler = () => {
		const newList = todoList.map((todo) => {
			if (todo.id === editableTodo.id) {
				return { ...todo, title: todoTitle };
			}
			return { ...todo };
		});

		setTodoList(newList);
		setEditMode(false);
		setTodoTitle("");
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
				<button type="submit">
					{editMode === true ? "Update Todo" : "Add Todo"}
				</button>
			</form>
			<select
				onChange={(event) => setFilterTerm(event.target.value)}
				// "completed"
				style={{ marginTop: "2rem" }}
				value={filterTerm}
			>
				<option value="all">All</option>
				<option value="active">Active</option>
				<option value="completed">Completed</option>
			</select>
			<br />
			{/* <input type="text" /> */}
			<ul>
				{filteredTodoList.map((todo) => (
					<li key={todo.id}>
						<input
							type="checkbox"
							checked={todo.isCompleted}
							onChange={() => updateHandler(todo.id)}
						/>
						<span>{todo.title}</span>
						<button onClick={() => editHandler(todo)}>Edit</button>
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
