// import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../contexts/Todo";

const TodoFilter = () => {
	const {
		todoStates: { filterTerm },
		dispatch,
	} = useContext(TodoContext);

	return (
		<select
			onChange={(event) =>
				dispatch({
					type: "CHANGE_FILTER_TERM",
					payload: event.target.value,
				})
			}
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
