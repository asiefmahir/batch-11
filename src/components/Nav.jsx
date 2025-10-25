import { Link } from "react-router";

function Nav() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link to="/">Shop</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
						<li>
							<Link to="/add-product">Add Product</Link>
						</li>
						<li>
							<Link to="/todo-app">Todo app</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;
