// import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoListSection from "./components/TodoListSection";

// one-way-data-flow

// parent -> child

const App = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h2>Our Todo App</h2>

			<TodoForm />
			<TodoListSection />
		</div>
	);
};

export default App;
