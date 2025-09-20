// import { useState } from "react";
// component ->
//1) presentation
//2) data/logic layer
// 1) State
// 2) props
import { useContext } from "react";
import { TodoContext } from "../contexts/Todo";

const TodoForm = () => {
	// retreiving value from Todo Context
	const { todoTitle, editMode, setTodoTitle, submitHandler } =
		useContext(TodoContext);

	return (
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
	);
};

export default TodoForm;
