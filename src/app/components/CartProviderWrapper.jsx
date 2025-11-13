"use client";

import CartProvider from "../contexts/Cart";

const CartProviderWrapper = ({ children }) => {
	return <CartProvider>{children}</CartProvider>;
};

export default CartProviderWrapper;
