export const counterReducer = (state = 10, action) => {
	console.log(action, "action");

	// action === { type: "counter/increment", payload: 1 }
	switch (action.type) {
		case "counter/increment": {
			return state + action.payload;
		}
		case "counter/decrement": {
			return state - action.payload;
		}
		default: {
			return state;
		}
	}
};
