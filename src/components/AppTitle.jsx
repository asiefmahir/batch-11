import { memo } from "react";
import Dummy from "./Dummy";

// memo -> complex
const AppTitle = memo(() => {
	// data layer
	// state
	// props
	console.log("AppTitle is rendering");

	return (
		<>
			<h2>Our App</h2>
			{/* <Dummy /> */}
		</>
	);
});

export default AppTitle;
