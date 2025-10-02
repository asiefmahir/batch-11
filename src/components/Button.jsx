import { memo } from "react";

const Button = memo(({ clickHandler }) => {
	console.log("Button is rendering");

	return <button onClick={clickHandler}>Increase By 1</button>;
});

export default Button;
