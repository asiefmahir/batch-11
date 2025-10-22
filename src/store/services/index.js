import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const productApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000` }),
	refetchOnFocus: false,
	refetchOnMountOrArgChange: false,
	refetchOnReconnect: false,
	tagTypes: ["products", "notes"],
	endpoints: (build) => ({
		getShopProducts: build.query({
			query: () => `/products`,
			providesTags: ["products"],
			// query -> http://localhost:3000/products
		}),
		addProduct: build.mutation({
			query: (productObj) => ({
				url: `/products`,
				// url -> http://localhost:3000/products
				method: "POST",
				body: productObj,
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

// fetch(url, {
// 	method: "POST",
// 	bod
// })

export const { useGetShopProductsQuery, useAddProductMutation } = productApi;
