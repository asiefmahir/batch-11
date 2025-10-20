// const initState = {
// 	products: [],
// 	isLoading: true,
// 	errorMessage: "",
// };

// // reducer must be a pure function
// // fetch()

// export const productReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case "product/fetchPending": {
// 			return {
// 				...state,
// 				isLoading: true,
// 			};
// 		}
// 		case "product/fetchSucceeded": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				products: action.payload,
// 				errorMessage: "",
// 			};
// 		}
// 		case "product/fetchFailed": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				errorMessage: action.payload,
// 				products: [],
// 			};
// 		}
// 		default: {
// 			return state;
// 		}
// 	}
// };

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchShopProducts = createAsyncThunk(
	"product/fetchProducts",
	async () => {
		const res = await fetch(`http://localhost:3000/products`);
		const products = await res.json();
		return products;
		// .then((res))
	},
);

// fetchShopProducts()

// fetchShopProducts.

const initState = {
	products: [],
	isLoading: true,
	errorMessage: "",
};

export const productSlice = createSlice({
	name: "product",
	initialState: initState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchShopProducts.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchShopProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(fetchShopProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.errorMessage = action.error.message;
			});
	},
});
