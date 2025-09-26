/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";
import { todoReducer } from "../reducers/todo";

export const TodoContext = createContext();

// context ->

// reducer function

const initState = {
	todoTitle: "",
	todoList: [],
	editMode: false,
	editableTodo: null,
	filterTerm: "all",
};

const TodoProvider = ({ children }) => {
	const [todoStates, dispatch] = useReducer(todoReducer, initState);

	const submitHandler = (event) => {
		event.preventDefault();
		if (!todoStates.todoTitle.trim())
			return alert(`Please provide a valid title`);

		todoStates.editMode === true
			? dispatch({ type: "UPDATE_TODO_TITLE" })
			: dispatch({ type: "CREATE_TODO" });
	};

	const filteredTodoList = todoStates.todoList.filter((todo) => {
		if (todoStates.filterTerm === "completed") {
			return todo.isCompleted === true;
			// false === true
		} else if (todoStates.filterTerm === "active") {
			return todo.isCompleted === false;
			// false === false
			// true === false
		} else {
			return true;
		}
	});

	const ctxValue = {
		todoStates,
		dispatch,
		submitHandler,
		filteredTodoList,
	};

	return (
		<TodoContext.Provider value={ctxValue}>{children}</TodoContext.Provider>
	);
};

export default TodoProvider;
