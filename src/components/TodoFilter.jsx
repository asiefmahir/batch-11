// import { useState } from "react";

const TodoFilter = (props) => {
	return (
		<select
			onChange={(event) => props.setFilterTerm(event.target.value)}
			// "completed"
			style={{ marginTop: "2rem" }}
			value={props.filterTerm}
		>
			<option value="all">All</option>
			<option value="active">Active</option>
			<option value="completed">Completed</option>
		</select>
	);
};

export default TodoFilter;
