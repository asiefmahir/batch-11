import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const Todo = () => {
	const { data, isLoading, errorMessage } = useFetch(
		`https://jsonplaceholder.typicode.com/todos?_limit=5`,
		[],
	);

	if (isLoading) {
		return <h2>Loading........</h2>;
	}
	if (errorMessage) {
		return <p style={{ color: "red" }}>{errorMessage}</p>;
	}
	return (
		<div>
			<h1>Todo Page</h1>
			<ul>
				{data.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Todo;
