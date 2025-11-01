import Link from "next/link";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/about/dummy">Dummy Page</Link>
				</li>
				<li>
					<Link href="/post-list">Post List</Link>
				</li>
				<li>
					<Link href="/shop">Shop</Link>
				</li>
				<li>
					<Link href="/add-product">Add product</Link>
				</li>
				<li>
					<Link href="/admin-products">Admin Products</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
