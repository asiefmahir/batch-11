import "./App.css";
import BioData from "./components/BioData";

import { useState } from "react";

// App()
// BioData("Mahir Asief", "")
// <App></App>
// <App />

function App() {
	// diff algorithm
	// App is being re-called/re-invoked
	// Re-render
	console.log("I am being called");
	// let counter = 0;

	// dynamic variable, changeable data, state
	// State -> Dynamic Data
	const [counter, setCounter] = useState(5);
	// counter = 7
	const [counter2, setCounter2] = useState(10);

	// counter = 6

	// let a = 7
	// a + 2
	// console.log(janiNah);

	const increaseHandler = (value) => {
		// console.log("I am being triggered");
		setCounter(counter + value);
		// 7
		// setCounter(5 + 1)
		// setCounter(6)
		// counter = 50
		// duita jinish argument akare
		// 1) Direct Value
		// 2) Expression -> value te convert hobe
		// counter++;
		// 1
		// console.log(counter, "counter");
	};

	const decreaseHandler = (value) => {
		// console.log("I am being triggered");
		setCounter(counter - value);
		// counter--;
		// console.log(counter, "counter");
	};
	// todo -> crud -> state

	const increaseHandler2 = () => {
		// console.log("I am being triggered");
		setCounter2(counter2 + 3);
		// 6
		// setCounter(5 + 1)
		// setCounter(6)
		// counter = 50
		// duita jinish argument akare
		// 1) Direct Value
		// 2) Expression -> value te convert hobe
		// counter++;
		// 1
		// console.log(counter, "counter");
	};

	const decreaseHandler2 = () => {
		// console.log("I am being triggered");
		setCounter(counter2 - 3);
		// counter--;
		// console.log(counter, "counter");
	};
	// props

	return (
		<>
			<div>
				<p>The value of the counter is {counter}</p>
				<button onClick={() => increaseHandler(1)}>
					Increase By 1
				</button>
				<button onClick={() => decreaseHandler(1)}>
					Decrease By 1
				</button>
				<button onClick={() => increaseHandler(5)}>
					Increase By 5
				</button>
				<button onClick={() => decreaseHandler(2)}>
					Decrease By 2
				</button>
			</div>
			<hr />
			<p>The value of the counter is {counter2}</p>
			<button onClick={increaseHandler2}>Increase By 1</button>
			<button onClick={decreaseHandler2}>Decrease By 1</button>
		</>
	);
}

// class

// export const arr = [1, 2, 3]; // named export

export default App; // default export
// A component must contain 3 virtue

// 1) A component must be a function
// 2) That function should return "something"
// 3) That "something" must be some html-ish code (JSX)
