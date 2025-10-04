import React from "react";
import { Link } from "react-router";
import Nav from "../components/Nav";

const Home = () => {
	console.log("I am home component");

	return (
		<div>
			<h2>I am Home page</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Ratione eligendi vitae repellendus consequatur beatae
				repudiandae itaque fugiat commodi sit possimus.
			</p>
		</div>
	);
};

export default Home;
