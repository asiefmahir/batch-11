/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const TodoContext = createContext();

// context ->
const TodoProvider = ({ children }) => {
	const [todoList, setTodoList] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableTodo, setEditableTodo] = useState(null);
	const [todoTitle, setTodoTitle] = useState("");
	const [filterTerm, setFilterTerm] = useState("all");

	const submitHandler = (event) => {
		event.preventDefault();
		if (!todoTitle.trim()) return alert(`Please provide a valid title`);

		editMode === true ? updateTitleHandler() : createTodo();
	};
	const createTodo = () => {
		const newTodo = {
			id: Date.now() + "",
			title: todoTitle,
			isCompleted: false,
		};
		// State
		// invalid
		// todoList.push(newTodo)
		setTodoList([...todoList, newTodo]);
		// [{}, {}, newTodo]
		setTodoTitle("");
	};
	const updateTitleHandler = () => {
		const newList = todoList.map((todo) => {
			if (todo.id === editableTodo.id) {
				return { ...todo, title: todoTitle };
			}
			return { ...todo };
		});

		setTodoList(newList);
		setEditMode(false);
		setTodoTitle("");
	};

	const filteredTodoList = todoList.filter((todo) => {
		if (filterTerm === "completed") {
			return todo.isCompleted === true;
			// false === true
		} else if (filterTerm === "active") {
			return todo.isCompleted === false;
			// false === false
			// true === false
		} else {
			return true;
		}
	});

	const removeHandler = (todoId) => {
		// todoId = "2"
		//
		// todoList.filter((todo) => true)
		const newList = todoList.filter((todo) => todo.id !== todoId);
		//                            ((todo) => "2" !== "2")
		setTodoList(newList);
		//
	};

	const updateHandler = (todoId) => {
		const newList = todoList.map((todo) => {
			if (todo.id === todoId) {
				// todo.isCompleted = !todo.isCompleted;
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return { ...todo };
		});

		setTodoList(newList);
	};

	const editHandler = (todo) => {
		setEditMode(true);
		setEditableTodo(todo);
		setTodoTitle(todo.title);
	};

	const ctxValue = {
		todoList,
		setTodoList,
		editMode,
		todoTitle,
		editableTodo,
		setEditMode,
		setEditableTodo,
		setTodoTitle,
		filterTerm,
		setFilterTerm,
		submitHandler,
		editHandler,
		filteredTodoList,
		removeHandler,
		updateHandler,
	};

	return (
		<TodoContext.Provider value={ctxValue}>{children}</TodoContext.Provider>
	);
};

export default TodoProvider;
