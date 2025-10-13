export const cartReducer = (state = [], action) => {
	// {type: "cart/addToCart", payload: product}
	switch (action.type) {
		case "cart/addToCart": {
			// return [...state, action.payload]
			const existingProduct = state.find(
				(item) => item.id === action.payload.id,
			);
			return existingProduct
				? state.map((item) => {
						if (item.id === existingProduct.id) {
							return { ...item, quantity: item.quantity + 1 };
						}
						return { ...item };
				  })
				: [...state, { ...action.payload, quantity: 1 }];
		}
		case "cart/removeProductFromCart": {
			// "2"
			// ["1", "2", "3"]
			return state.filter((item) => item.id !== action.payload);
			// return updatedCart;
			//                    2 !== 2
		}
		case "cart/modifyQuantityOfAnItem": {
			// {type: "cart/modifyQuantityOfAnItem", payload: {id: "p-2", quantity: 10}}

			// const targetedProduct = state.find(
			// 	(item) => item.id === action.payload.id,
			// );
			// targetedProduct.quantity = action.payload.quantity;

			const updatedCart = state.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, quantity: action.payload.quantity };
				}
				return { ...item };
			});

			return updatedCart;
		}
		case "cart/clearCart": {
			return [];
		}
		default: {
			return state;
		}
		// case ""
	}
};
