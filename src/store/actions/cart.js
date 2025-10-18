export const modifyQuantityOfAnItem = (obj) => {
	return {
		type: "cart/modifyQuantityOfAnItem",
		payload: obj,
	};
};

export const addToCart = (product) => {
	return {
		type: "cart/addToCart",
		payload: product,
	};
};

export const removeProductFromCart = (prodId) => {
	return {
		type: "cart/removeProductFromCart",
		payload: prodId,
	};
};

export const clearCart = () => {
	return {
		type: "cart/clearCart",
	};
};

// modifyQuantityOfAnItem({ id: "p-1", quantity: 5 });

// {type: "cart/modifyQuantityOfAnItem", payload:  { id: "p-1", quantity: 5 }}

// import { createAction } from "@reduxjs/toolkit";

// export const addToCart = createAction("cart/addToCart");
// export const removeProductFromCart = createAction("cart/removeProductFromCart");
// export const modifyQuantityOfAnItem = createAction(
// 	"cart/modifyQuantityOfAnItem",
// );

// {}
// export const clearCart = createAction("cart/clearCart");
// import {
// 	addToCart,
// 	removeProductFromCart,
// 	modifyQuantityOfAnItem,
// 	clearCart,
// } from "../reducers/cart";

// export { addToCart, modifyQuantityOfAnItem, clearCart, removeProductFromCart };
