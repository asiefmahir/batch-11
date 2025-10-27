"use client";

import { useState } from "react";
// Client Component
// not a client-only component

const Counter = () => {
	console.log("Counter is rendering");

	const [counter, setCounter] = useState(10);
	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>
				Increase by 1
			</button>
			<button onClick={() => setCounter(counter - 1)}>
				Decrease by 1
			</button>
		</div>
	);
};

export default Counter;

// useState, useReducer, useContext,
// user interactivity // onClick, onChange
