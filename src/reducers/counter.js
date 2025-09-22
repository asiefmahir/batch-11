export const ourReducer = (state, action) => {
	// action === { type: "increase_counter", payload: 25}
	// action === "increase_counter"
	// action === { a: 10, bool: true }
	// console.log(state, "state"); // 10
	// console.log(action, "action"); //
	// if (action === "increase_counter") {
	// 	return state + 1;
	// 	// 10 + 1
	// } else if (action === "decrease_counter") {
	// 	return state - 1;
	// }

	switch (action.type) {
		case "increase_counter": {
			return state + action.payload;
		}

		case "decrease_counter": {
			return state - action.payload;
		}
		default: {
			return state;
		}
	}
};
