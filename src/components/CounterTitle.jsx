import { memo } from "react";

const CounterTitle = memo(({ counterValue }) => {
	// counterValue = 10
	// counterValue = 11
	console.log("CounterTitle rendering");

	return <p>The value of the counter is {counterValue}</p>;
});

export default CounterTitle;
