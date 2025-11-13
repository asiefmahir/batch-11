"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Nav = () => {
	const { data, status } = useSession();
	console.log(data, "data");
	console.log(status, "status");

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
					<Link href="/cart">Cart</Link>
				</li>
				{status === "authenticated" && data?.user?.role === "admin" && (
					<li>
						<Link href="/dashboard/admin/add-product">
							Add product
						</Link>
					</li>
				)}

				{status !== "authenticated" && (
					<li>
						<Link href="/register">Sign Up</Link>
					</li>
				)}
				{status !== "authenticated" && (
					<li>
						<Link href="/login">Sign In</Link>
					</li>
				)}
				{status === "authenticated" && (
					<li>
						<button onClick={() => signOut()}>SignOut</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
