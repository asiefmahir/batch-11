// import { useState } from "react";

const TodoList = (props) => {
	const filteredTodoList = props.todoList.filter((todo) => {
		if (props.filterTerm === "completed") {
			return todo.isCompleted === true;
			// false === true
		} else if (props.filterTerm === "active") {
			return todo.isCompleted === false;
			// false === false
			// true === false
		} else {
			return true;
		}
	});

	const removeHandler = (todoId) => {
		// todoId = "2"
		//
		// todoList.filter((todo) => true)
		const newList = props.todoList.filter((todo) => todo.id !== todoId);
		//                            ((todo) => "2" !== "2")
		props.setTodoList(newList);
		//
	};

	const updateHandler = (todoId) => {
		const newList = props.todoList.map((todo) => {
			if (todo.id === todoId) {
				// todo.isCompleted = !todo.isCompleted;
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return { ...todo };
		});

		props.setTodoList(newList);
	};

	const editHandler = (todo) => {
		props.setEditMode(true);
		props.setEditableTodo(todo);
		props.setTodoTitle(todo.title);
	};
	return (
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
	);
};

export default TodoList;
