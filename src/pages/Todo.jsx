import { useState, useRef, useEffect } from "react";
import {
	useCreateTodoMutation,
	useGetAllTodosQuery,
	useRemoveTodoMutation,
	useUpdateTodoMutation,
} from "../store/services/todo";

const Todo = () => {
	console.log("re-rendered");

	// const [todoTitle, setTodoTitle] = useState("");
	const { data } = useGetAllTodosQuery();
	const [addTodo] = useCreateTodoMutation();
	const [deleteTodo] = useRemoveTodoMutation();
	const [updateTodo] = useUpdateTodoMutation();

	// escape hatches
	const ref = useRef(null);

	useEffect(() => {
		console.log(ref.current, "ref");
		console.log(ref.current.value);
	}, [ref?.current?.value]);

	const submitHandler = (e) => {
		e.preventDefault();
		const todoObj = {
			title: ref?.current?.value,
			isCompleted: false,
		};
		addTodo(todoObj);
		ref.current.value = "";
	};
	return (
		<div style={{ textAlign: "center" }}>
			<h2>Our Todo App</h2>
			<form onSubmit={submitHandler}>
				<input
					ref={ref}
					type="text"
					// value={todoTitle}
					// onChange={(e) => setTodoTitle(e.target.value)}
				/>
				<button type="submit">Create Todo</button>
			</form>
			{data?.map((todo) => (
				<li key={todo.id}>
					<input
						type="checkbox"
						checked={todo.isCompleted}
						onChange={() =>
							updateTodo({
								...todo,
								isCompleted: !todo.isCompleted,
							})
						}
					/>
					<span>{todo.title}</span>
					<button onClick={() => deleteTodo(todo.id)}>
						Remove Todo
					</button>
				</li>
			))}
		</div>
	);
};

export default Todo;
