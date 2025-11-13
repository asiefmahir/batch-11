"use client";

import { createContext, useContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		const exist = cart.find((item) => item._id === product._id);
		if (exist) {
			const updatedCart = cart.map((item) => {
				if (item._id === exist._id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return { ...item };
			});
			setCart(updatedCart);
		} else {
			setCart([...cart, { ...product, quantity: 1 }]);
		}
	};

	const updateQuantity = (id, quantity) => {
		const updatedCart = cart.map((item) => {
			if (item._id === id) {
				return { ...item, quantity: quantity };
			}
			return { ...item };
		});
		setCart(updatedCart);
	};
	const removeFromCart = (id) => {
		// 2 !== 2
		const updatedCart = cart.filter((item) => item._id !== id);
		setCart(updatedCart);
	};

	const clearCart = () => {
		setCart([]);
	};

	const ctxValue = {
		cart,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
	};
	return (
		<CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
