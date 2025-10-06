import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
	const { counter, increaseHandler, decreaseHandler } = useCounter();
	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button onClick={increaseHandler}>Increase By 1</button>
			<button onClick={decreaseHandler}>Decrease By 2</button>
		</div>
	);
};

export default Counter;
