import Nav from "../components/Nav";
import { Outlet } from "react-router";

export default function Root() {
	console.log("I am Root Compo");

	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<div></div>
				<Nav />
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}

// function add(num1, num2) {
// 	return num1 + num2;
// }

// add(10, 15);
// add(25, 50);
