import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
//logging

export default withAuth(
	// Middleware function
	async function middleware(req) {
		const url = req.nextUrl.pathname;
		const role =
			req.nextauth?.token?.role || req.nextauth?.token?.user?.role;

		console.log(role, "role");

		if (url.startsWith("/api/admin") && role !== "admin") {
			return NextResponse.json(
				{ error: "Unauthorized Request" },
				{ status: 403 },
			);
		}
		if (url.includes("/admin") && role !== "admin") {
			return NextResponse.redirect(new URL("/shop", req.url));
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => {
				return !!token;
			},
		},
	},
);

export const config = {
	matcher: [
		"/checkout",
		"/dashboard/:path*",
		"/api/user/:path*",
		"/api/admin/:path*",
	],
};

// Request -> Middleware ->
