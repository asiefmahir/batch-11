import { api } from "./index";

export const productApi = api.injectEndpoints({
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
// problem solving -> thinking capability -> code
// chunk wise problem division
// codeforces
// 2 year -> income shuru korar age
// 1 year -> problem solving
// 1 year -> development

export const { useGetShopProductsQuery, useAddProductMutation } = productApi;
