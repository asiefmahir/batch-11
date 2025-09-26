const initState = {
	todoTitle: "",
	todoList: [],
	editMode: false,
	editableTodo: null,
	filterTerm: "all",
};

export const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case "CHANGE_INPUT_VALUE": {
			// dispatch({type: "CHANGE_INPUT_VALUE", payload: e.target.value})
			return {
				...state,
				todoTitle: action.payload,
			};
		}
		case "CREATE_TODO": {
			const newTodo = {
				id: Date.now() + "",
				title: state.todoTitle,
				isCompleted: false,
			};
			return {
				...state,
				todoTitle: "",
				todoList: [...state.todoList, newTodo],
			};
		}
		case "REMOVE_TODO": {
			// dispatch({type: "REMOVE_TODO", payload: todo.id })
			// 2 !== 2
			const newList = state.todoList.filter(
				(todo) => todo.id !== action.payload,
			);

			return {
				...state,
				todoList: newList,
			};
		}
		case "EDIT_TODO": {
			// dispatch({type: "EDIT_TODO", payload: todo})
			return {
				...state,
				editMode: true,
				editableTodo: action.payload,
				todoTitle: action.payload.title,
			};
		}
		case "UPDATE_TODO_TITLE": {
			const newList = state.todoList.map((todo) => {
				if (todo.id === state.editableTodo.id) {
					return { ...todo, title: state.todoTitle };
				}
				return { ...todo };
			});

			return {
				...state,
				todoList: newList,
				editMode: false,
				todoTitle: "",
			};
		}
		case "UPDATE_TODO_COMPLETE_STATUS": {
			// dispatch({type: "UPDATE_TODO_COMPLETE_STATUS", payload: todo.id})
			const newList = state.todoList.map((todo) => {
				if (todo.id === action.payload) {
					// todo.isCompleted = !todo.isCompleted;
					return { ...todo, isCompleted: !todo.isCompleted };
				}
				return { ...todo };
			});

			return {
				...state,
				todoList: newList,
			};
		}

		case "CHANGE_FILTER_TERM": {
			// dispatch({type: "CHANGE_FILTER_TERM", payload: "complete"})
			return {
				...state,
				filterTerm: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
