// import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../contexts/Todo";

const TodoList = () => {
	const { filteredTodoList, updateHandler, editHandler, removeHandler } =
		useContext(TodoContext);

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
