import { useState } from "react";

export const useCounter = () => {
	const [counter, setCounter] = useState(10);
	const increaseHandler = () => {
		setCounter(counter + 1);
	};
	const decreaseHandler = () => {
		setCounter(counter - 2);
	};

	return {
		counter,
		increaseHandler,
		decreaseHandler,
	};
};
