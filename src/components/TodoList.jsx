// import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../contexts/Todo";

const TodoList = () => {
	const { filteredTodoList, dispatch } = useContext(TodoContext);

	return (
		<ul>
			{filteredTodoList.map((todo) => (
				<li key={todo.id}>
					<input
						type="checkbox"
						checked={todo.isCompleted}
						onChange={() =>
							dispatch({
								type: "UPDATE_TODO_COMPLETE_STATUS",
								payload: todo.id,
							})
						}
					/>
					<span>{todo.title}</span>
					<button
						onClick={() =>
							dispatch({ type: "EDIT_TODO", payload: todo })
						}
					>
						Edit
					</button>
					<button
						onClick={() =>
							dispatch({ type: "REMOVE_TODO", payload: todo.id })
						}
					>
						Remove Todo
					</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
