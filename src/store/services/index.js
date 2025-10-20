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
	tagTypes: ["products"],
	endpoints: (build) => ({
		getShopProducts: build.query({
			query: () => `/products`,
			// query -> http://localhost:3000/products
		}),
	}),
});

export const { useGetShopProductsQuery } = productApi;
