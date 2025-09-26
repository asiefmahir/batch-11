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
	const {
		todoStates: { todoTitle, editMode },
		submitHandler,
		dispatch,
	} = useContext(TodoContext);

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={todoTitle}
				onChange={(event) =>
					dispatch({
						type: "CHANGE_INPUT_VALUE",
						payload: event.target.value,
					})
				}
			/>
			<button type="submit">
				{editMode === true ? "Update Todo" : "Add Todo"}
			</button>
		</form>
	);
};

export default TodoForm;
