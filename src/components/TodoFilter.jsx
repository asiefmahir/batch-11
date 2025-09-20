// import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../contexts/Todo";

const TodoFilter = () => {
	const { filterTerm, setFilterTerm } = useContext(TodoContext);

	return (
		<select
			onChange={(event) => setFilterTerm(event.target.value)}
			// "completed"
			style={{ marginTop: "2rem" }}
			value={filterTerm}
		>
			<option value="all">All</option>
			<option value="active">Active</option>
			<option value="completed">Completed</option>
		</select>
	);
};

export default TodoFilter;
