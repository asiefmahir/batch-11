// import { useState } from "react";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const TodoListSection = () => {
	return (
		<>
			<TodoFilter />
			<TodoList />
		</>
	);
};

export default TodoListSection;
