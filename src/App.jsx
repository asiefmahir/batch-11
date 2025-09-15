import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoListSection from "./components/TodoListSection";

// one-way-data-flow

// parent -> child

const App = () => {
	const [todoList, setTodoList] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableTodo, setEditableTodo] = useState(null);
	const [todoTitle, setTodoTitle] = useState("");
	return (
		<div style={{ textAlign: "center" }}>
			<h2>Our Todo App</h2>

			<TodoForm
				todoTitle={todoTitle}
				setTodoTitle={setTodoTitle}
				setEditMode={setEditMode}
				editMode={editMode}
				todoList={todoList}
				setTodoList={setTodoList}
				editableTodo={editableTodo}
			/>
			<TodoListSection
				setTodoTitle={setTodoTitle}
				setEditMode={setEditMode}
				setEditableTodo={setEditableTodo}
				todoList={todoList}
				setTodoList={setTodoList}
			/>
		</div>
	);
};

export default App;
