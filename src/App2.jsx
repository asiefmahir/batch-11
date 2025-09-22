import { useReducer, useState } from "react";
// import { ourReducer } from "./reducers/counter";

// reduce

// parameter must be 2

// component level theke logic/data layer
// useState, useReducer
const ourReducer = (state, action) => {
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

const App2 = () => {
	console.log("I am being rendered");

	// const [count, setCount] = useState(10)
	const [counter, dispatch] = useReducer(ourReducer, 10);
	// counter = 25
	// array / object

	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 1 })
				}
			>
				Increase By 1
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 10 })
				}
			>
				Increase By 10
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 5 })
				}
			>
				Increase By 5
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 25 })
				}
			>
				Increase By 25
			</button>
			<button
				onClick={() =>
					dispatch({ type: "decrease_counter", payload: 1 })
				}
			>
				Decrease By 1
			</button>
			<button
				onClick={() =>
					dispatch({ type: "decrease_counter", payload: 3 })
				}
			>
				Decrease By 3
			</button>
		</div>
	);
};

export default App2;
