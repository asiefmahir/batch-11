// export const cartReducer = (state = [], action) => {
// 	// {type: "cart/addToCart", payload: product}
// 	switch (action.type) {
// 		case "cart/addToCart": {
// 			// return [...state, action.payload]
// 			const existingProduct = state.find(
// 				(item) => item.id === action.payload.id,
// 			);
// 			return existingProduct
// 				? state.map((item) => {
// 						if (item.id === existingProduct.id) {
// 							return { ...item, quantity: item.quantity + 1 };
// 						}
// 						return { ...item };
// 				  })
// 				: [...state, { ...action.payload, quantity: 1 }];
// 		}
// 		case "cart/removeProductFromCart": {
// 			// "2"
// 			// ["1", "2", "3"]
// 			return state.filter((item) => item.id !== action.payload);
// 			// return updatedCart;
// 			//                    2 !== 2
// 		}
// 		case "cart/modifyQuantityOfAnItem": {
// 			// {type: "cart/modifyQuantityOfAnItem", payload: {id: "p-2", quantity: 10}}

// 			// const targetedProduct = state.find(
// 			// 	(item) => item.id === action.payload.id,
// 			// );
// 			// targetedProduct.quantity = action.payload.quantity;

// 			const updatedCart = state.map((item) => {
// 				if (item.id === action.payload.id) {
// 					return { ...item, quantity: action.payload.quantity };
// 				}
// 				return { ...item };
// 			});

// 			return updatedCart;
// 		}
// 		case "cart/clearCart": {
// 			return [];
// 		}
// 		default: {
// 			return state;
// 		}
// 		// case ""
// 	}
// };

// import { createReducer } from "@reduxjs/toolkit";
// import {
// 	addToCart,
// 	removeProductFromCart,
// 	modifyQuantityOfAnItem,
// 	clearCart,
// } from "../actions/cart";

// export const cartReducer = createReducer([], (builder) => {
// 	builder
// 		.addCase(addToCart, (state, action) => {
// 			const existingProduct = state.find(
// 				(item) => item.id === action.payload.id,
// 			);

// 			existingProduct
// 				? existingProduct.quantity++
// 				: state.push({ ...action.payload, quantity: 1 });
// 		})
// 		.addCase(removeProductFromCart, (state, action) => {
// 			return state.filter((item) => item.id !== action.payload);
// 		})
// 		.addCase(modifyQuantityOfAnItem, (state, action) => {
// 			const targetedProductIndex = state.findIndex(
// 				(item) => item.id === action.payload.id,
// 			);
// 			state[targetedProductIndex].quantity = action.payload.quantity;
// 			// state[2]
// 		})
// 		.addCase(clearCart, () => {
// 			return [];
// 		});
// });

import { createSlice } from "@reduxjs/toolkit";
// // client state
// // server/asynchronous state

// // store update -> synchronous update

export const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart(state, action) {
			const existingProduct = state.find(
				(item) => item.id === action.payload.id,
			);

			existingProduct
				? existingProduct.quantity++
				: state.push({ ...action.payload, quantity: 1 });
		},
		removeProductFromCart(state, action) {
			return state.filter((item) => item.id !== action.payload);
		},
		modifyQuantityOfAnItem(state, action) {
			const targetedProductIndex = state.findIndex(
				(item) => item.id === action.payload.id,
			);
			state[targetedProductIndex].quantity = action.payload.quantity;
		},
		clearCart() {
			return [];
		},
	},
});

export const {
	addToCart,
	removeProductFromCart,
	clearCart,
	modifyQuantityOfAnItem,
} = cartSlice.actions;
// // cartSlice.reducer

// client state -> 15% -> 5% -> 10% -> context, useReducer
// server state -> 85% -> Tanstack Query
// you dont need redux
// 10% -> client state
// 10% -> client state
