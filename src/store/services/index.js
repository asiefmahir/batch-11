import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/` }),
	refetchOnFocus: false,
	refetchOnMountOrArgChange: false,
	refetchOnReconnect: false,
	tagTypes: ["products", "todos"],
	endpoints: () => ({}),
});

// e.com/products
// e.com/orders
// e.com/user
// e.

// API VERB
// GET
// POST
// PUT
// PATCH
// DELETE

// server state

// export const productApi = createApi({
// 	reducerPath: "api",
// 	baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000` }),
// 	refetchOnFocus: false,
// 	refetchOnMountOrArgChange: false,
// 	refetchOnReconnect: false,
// 	tagTypes: ["products", "todos"],
// 	endpoints: (build) => ({
// 		getShopProducts: build.query({
// 			query: () => `/products`,
// 			providesTags: ["products"],
// 			// query -> http://localhost:3000/products
// 		}),
// 		addProduct: build.mutation({
// 			query: (productObj) => ({
// 				url: `/products`,
// 				// url -> http://localhost:3000/products
// 				method: "POST",
// 				body: productObj,
// 			}),
// 			invalidatesTags: ["products"],
// 		}),
// 		getAllTodos: build.query({
// 			query: () => `/todos`,
// 			// baseUrl -> http://localhost:3000/todos
// 			providesTags: ["todos"],
// 		}),
// 		createTodo: build.mutation({
// 			query: (obj) => ({
// 				url: "/todos",
// 				method: "POST",
// 				body: obj,
// 			}),
// 			invalidatesTags: ["todos"],
// 		}),
// 		removeTodo: build.mutation({
// 			query: (todoId) => ({
// 				url: `/todos/${todoId}`,
// 				method: "DELETE",
// 				// url -> http://localhost:3000/todos/1
// 			}),
// 			invalidatesTags: ["todos"],
// 		}),
// 		updateTodo: build.mutation({
// 			query: (todo) => ({
// 				url: `/todos/${todo.id}`,
// 				method: "PUT",
// 				body: todo,
// 			}),
// 			invalidatesTags: ["todos"],
// 		}),
// 	}),
// });

// fetch(url, {
// 	method: "POST",
// 	bod
// })

// export const {
// 	useGetShopProductsQuery,
// 	useAddProductMutation,
// 	useGetAllTodosQuery,
// 	useCreateTodoMutation,
// 	useRemoveTodoMutation,
// 	useUpdateTodoMutation,
// } = productApi;
