import React from "react";
import { Link } from "react-router";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>

				<li>
					<Link to="/team">Team</Link>
				</li>
				<li>
					<Link to="/abc">ABC</Link>
				</li>
				<li>
					<Link to="/posts">PostList</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
