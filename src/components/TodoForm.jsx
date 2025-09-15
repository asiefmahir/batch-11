// import { useState } from "react";
// component ->
//1) presentation
//2) data/logic layer
// 1) State
// 2) props

const TodoForm = (props) => {
	const submitHandler = (event) => {
		event.preventDefault();
		if (!props.todoTitle.trim())
			return alert(`Please provide a valid title`);

		props.editMode === true ? updateTitleHandler() : createTodo();
	};
	const createTodo = () => {
		const newTodo = {
			id: Date.now() + "",
			title: props.todoTitle,
			isCompleted: false,
		};
		// State
		// invalid
		// todoList.push(newTodo)
		props.setTodoList([...props.todoList, newTodo]);
		// [{}, {}, newTodo]
		props.setTodoTitle("");
	};
	const updateTitleHandler = () => {
		const newList = props.todoList.map((todo) => {
			if (todo.id === props.editableTodo.id) {
				return { ...todo, title: props.todoTitle };
			}
			return { ...todo };
		});

		props.setTodoList(newList);
		props.setEditMode(false);
		props.setTodoTitle("");
	};
	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={props.todoTitle}
				onChange={(event) => props.setTodoTitle(event.target.value)}
			/>
			<button type="submit">
				{props.editMode === true ? "Update Todo" : "Add Todo"}
			</button>
		</form>
	);
};

export default TodoForm;
