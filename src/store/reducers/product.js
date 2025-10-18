const initState = {
	products: [],
	isLoading: true,
	errorMessage: "",
};

// reducer must be a pure function
// fetch()

export const productReducer = (state = initState, action) => {
	switch (action.type) {
		case "product/fetchPending": {
			return {
				...state,
				isLoading: true,
			};
		}
		case "product/fetchSucceeded": {
			return {
				...state,
				isLoading: false,
				products: action.payload,
				errorMessage: "",
			};
		}
		case "product/fetchFailed": {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
				products: [],
			};
		}
		default: {
			return state;
		}
	}
};
