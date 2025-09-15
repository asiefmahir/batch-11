import { useState } from "react";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const TodoListSection = (props) => {
	const [filterTerm, setFilterTerm] = useState("all");
	return (
		<>
			<TodoFilter filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
			<TodoList {...props} filterTerm={filterTerm} />
		</>
	);
};

export default TodoListSection;
