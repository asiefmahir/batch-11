import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoProvider from "./contexts/Todo.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<TodoProvider>
			<App />
		</TodoProvider>
	</StrictMode>,
);
// react dom -> DOM -> React Code (Component)
// <img />

// "use strict"
