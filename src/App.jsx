import { useState, useCallback } from "react";
import AppTitle from "./components/AppTitle";
import CounterTitle from "./components/CounterTitle";
import Button from "./components/Button";

const App = () => {
	console.log("App is rendering");

	// data layer change
	// state
	// props
	const [counter, setCounter] = useState(10);
	// counter = 11
	const [counter2, setCounter2] = useState(73);

	// #X07589
	// increaseHandler -> #X07589

	const increaseHandler = useCallback(() => {
		setCounter((prevValue) => prevValue + 1);
		// setCounter(counter + 1)
	}, []);

	// increaseHandler2 -> #x825445

	const increaseHandler2 = useCallback(() => {
		setCounter2((prev) => prev + 3);
	}, []);

	return (
		<div style={{ textAlign: "center" }}>
			<AppTitle />

			<div className="counter-app">
				<CounterTitle counterValue={counter} />
				<Button clickHandler={increaseHandler} />
			</div>
			<div className="counter-app">
				<CounterTitle counterValue={counter2} />
				<Button clickHandler={increaseHandler2} />
			</div>
		</div>
	);
};

export default App;
