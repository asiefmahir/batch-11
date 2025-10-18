const initState = {
	posts: [],
	isLoading: true,
	errorMessage: "",
};

// reducer must be a pure function
// fetch()

export const postReducer = (state = initState, action) => {
	switch (action.type) {
		case "post/fetchPending": {
			return {
				...state,
				isLoading: true,
			};
		}
		case "post/fetchSucceeded": {
			return {
				...state,
				isLoading: false,
				posts: action.payload,
				errorMessage: "",
			};
		}
		case "post/fetchFailed": {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
				posts: [],
			};
		}
		default: {
			return state;
		}
	}
};
