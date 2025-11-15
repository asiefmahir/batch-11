import { NextResponse } from "next/server";
import connectDb from "@/app/utils/db";
import Product from "@/app/models/product";
import { getToken } from "next-auth/jwt";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
	await connectDb();

	try {
		const { cartItems } = await req.json();

		// Validate input
		if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
			return NextResponse.json(
				{ error: "Invalid cart items" },
				{ status: 400 },
			);
		}

		// Authenticate user
		const token = await getToken({
			req,
			secret: process.env.NEXTAUTH_SECRET,
		});
		const user = token?.user;
		console.log(user, "email");

		if (!user || !user.id) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 },
			);
		}

		// Get all products in one query (more efficient)
		const productIds = cartItems.map((item) => item._id);
		const products = await Product.find({ _id: { $in: productIds } });

		if (products.length !== cartItems.length) {
			return NextResponse.json(
				{ error: "Some products not found" },
				{ status: 404 },
			);
		}

		// Create line items
		const lineItems = cartItems.map((item) => {
			const product = products.find((p) => p._id.toString() === item._id);

			if (!product) {
				throw new Error(`Product ${item._id} not found`);
			}

			// Validate price
			if (!product.price || product.price <= 0) {
				throw new Error(`Invalid price for product ${product.title}`);
			}

			// Limit quantity (prevent abuse)
			const quantity = Math.min(item.quantity, 99);

			return {
				price_data: {
					currency: "usd",
					product_data: {
						name: product.title,
						images: product.image ? [product.image] : [],
					},
					unit_amount: Math.round(product.price * 100), // Ensure integer
				},
				quantity: quantity,
			};
		});

		let success_url = process.env.NEXTAUTH_URL
			? process.env.NEXTAUTH_URL
			: "http://localhost:3000/";
		console.log(success_url, "iiii");

		const session = await stripe.checkout.sessions.create({
			line_items: lineItems,
			success_url: success_url,
			// cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cart`,
			client_reference_id: user.id.toString(),
			mode: "payment",
			payment_method_types: ["card"],
			payment_intent_data: {
				metadata: {
					cartItems: JSON.stringify(
						cartItems.map((item) => ({
							_id: item._id,
							quantity: Math.min(item.quantity, 99),
						})),
					),
					userId: user.id.toString(),
				},
			},
			shipping_address_collection: {
				allowed_countries: ["US"],
			},
			customer_email: user.email,
			billing_address_collection: "required",
			expires_at: Math.floor(Date.now() / 1000) + 30 * 60, // 30 minutes
		});

		// Only log session ID in production, not full session
		if (process.env.NODE_ENV === "development") {
			console.log("Stripe checkout session created:", session.id);
		}

		return NextResponse.json({
			sessionId: session.id,
			url: session.url,
		});
	} catch (err) {
		// Log error details for debugging (but not to client)
		if (process.env.NODE_ENV === "development") {
			console.error("Stripe checkout error:", err);
		}

		// Generic error message for client
		return NextResponse.json(
			{ error: "Failed to create checkout session" },
			{ status: 500 },
		);
	}
}
