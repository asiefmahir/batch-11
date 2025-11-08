"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>

				<li>
					<Link href="/shop">Shop</Link>
				</li>
				<li>
					<Link href="/dashboard/admin/add-product">Add product</Link>
				</li>

				<li>
					<Link href="/register">Sign Up</Link>
				</li>
				<li>
					<button onClick={() => signOut()}>SignOut</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
