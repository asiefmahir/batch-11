const API = "http://localhost:3000/todos";

const todoList = document.getElementById("todo-list");

const todoForm = document.getElementById("todo-form");

const todoInput = document.getElementById("todo-input");

const filterAllBtn = document.getElementById("filter-all");
const filterActiveBtn = document.getElementById("filter-active");
const filterCompletedBtn = document.getElementById("filter-completed");

let currentFilter = "all"; // all / active / completed

// Load Todos with Fetch API with filtering

// single responsibility theory
const loadTodos = () => {
	let url = API;

	if (currentFilter === "completed") {
		url += `?isCompleted=true`;
		// http://localhost:3000/todos?isCompleted=true
	} else if (currentFilter === "active") {
		url += "?isCompleted=false";
		// http://localhost:3000/todos?isCompleted=false
	}

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			renderTodos(data);
		})
		.catch((err) => {
			console.error("Error fetching todos:", err);
			todoList.innerHTML = `<li class="text-red-600">Failed to Load The Todos</li>`;
		});
};

const renderTodos = (todos) => {
	todoList.innerHTML = "";

	if (todos.length === 0) {
		todoList.innerHTML = `<li class="text-gray-600">No Todos Found with the Current Filter</li>`;
		return;
	}

	todos.forEach((todo) => {
		const li = document.createElement("li");
		li.className = "flex items-center gap-3";

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = todo.isCompleted;
		checkbox.className = "w-5 h-5 cursor-pointer";

		checkbox.addEventListener("change", () => {
			toggleIsCompleted(todo.id, checkbox.checked);
		});
		// Title

		const leftDiv = document.createElement("div");
		leftDiv.className = "flex items-center gap-3";

		const title = document.createElement("span");
		title.textContent = todo.title;
		title.className =
			todo.isCompleted === true ? "line-through text-gray-400" : "";
		leftDiv.appendChild(checkbox);
		leftDiv.appendChild(title);

		const delBtn = document.createElement("button");
		delBtn.textContent = "DELETE TODO";
		delBtn.className =
			"bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600";

		delBtn.addEventListener("click", () => {
			deleteTodo(todo.id);
		});

		li.appendChild(leftDiv);
		li.appendChild(delBtn);

		todoList.appendChild(li);
	});
};

// TODO
const toggleIsCompleted = (todoId, isCompleted) => {
	// http://localhost:3000/todos/1
	fetch(`${API}/${todoId}`, {
		method: "PATCH",
		body: JSON.stringify({ isCompleted: isCompleted }),
		headers: {
			"Content-type": "application/json",
		},
	}).then(() => {
		loadTodos();
	});
};

const deleteTodo = (todoId) => {
	// http://localhost:3000/todos/1
	fetch(`${API}/${todoId}`, {
		method: "DELETE",
	}).then(() => {
		// refetch
		loadTodos();
	});
};

todoForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const title = todoInput.value.trim();

	if (!title) {
		return alert(`Title must be a valid value`);
	}

	// REST API VERB/METHOD

	// get -> GET
	// create -> POST
	// update -> PUT/PATCH
	// delete -> DELETE

	// create todo then refetch the uptodate api data
	fetch(API, {
		method: "POST",
		body: JSON.stringify({ title: title, isCompleted: false }),
		headers: {
			"Content-type": "application/json",
		},
	}).then(() => {
		// refetch
		loadTodos();
		todoInput.value = "";
		todoInput.focus();
	});
});

filterAllBtn.addEventListener("click", () => {
	currentFilter = "all";
	loadTodos();
});

filterActiveBtn.addEventListener("click", () => {
	currentFilter = "active";
	loadTodos();
});

filterCompletedBtn.addEventListener("click", () => {
	currentFilter = "completed";
	loadTodos();
});

loadTodos();

// const setActiveFilter
