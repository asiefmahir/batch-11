import { api } from "./index";
// code splitting

const todoApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAllTodos: build.query({
			query: () => `/todos`,
			// baseUrl -> http://localhost:3000/todos
			providesTags: ["todos"],
		}),
		createTodo: build.mutation({
			query: (obj) => ({
				url: "/todos",
				method: "POST",
				body: obj,
			}),
			invalidatesTags: ["todos"],
		}),
		removeTodo: build.mutation({
			query: (todoId) => ({
				url: `/todos/${todoId}`,
				method: "DELETE",
				// url -> http://localhost:3000/todos/1
			}),
			invalidatesTags: ["todos"],
		}),
		updateTodo: build.mutation({
			query: (todo) => ({
				url: `/todos/${todo.id}`,
				method: "PUT",
				body: todo,
			}),
			invalidatesTags: ["todos"],
		}),
	}),
});

export const {
	useGetAllTodosQuery,
	useCreateTodoMutation,
	useUpdateTodoMutation,
	useRemoveTodoMutation,
} = todoApi;
