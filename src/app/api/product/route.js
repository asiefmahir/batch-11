import connectDb from "@/app/utils/db";
import Product from "@/app/models/product";
import { NextResponse } from "next/server";

export async function GET(req) {
	await connectDb();
	// retrieving the query params
	const { searchParams } = new URL(req.url);
	// console.log(req.url, "url");

	const page = searchParams.get("page") || {};
	console.log(page, "page");

	//api/product
	// {page: 5}

	const pageSize = 2;
	try {
		const currentPage = Number(page) || 1;
		// calculating the skip number
		const skip = (currentPage - 1) * pageSize;
		// skip    = (5 - 1) * 5
		// skip = 20
		// 24        (5 - 1) * 6
		// = 4 * 6
		// 24
		// total number of documents in product collection
		const totalProducts = await Product.countDocuments();
		// 25 -> 26 -> 27 -> 28 -> 29 -> 30
		// db_product_count -> 100
		// apple -> 30
		// page ->

		const products = await Product.find({})
			.skip(skip)
			// the number of documents returned by mongodb after implementing the skip
			.limit(pageSize)
			.sort({ createdAt: -1 });

		// response back to your react app
		return NextResponse.json({
			success: true,
			products,
			currentPage,
			totalPages: Math.ceil(totalProducts / pageSize),
		});
	} catch (err) {
		return NextResponse.json(
			{
				success: false,
				err: err.message,
			},
			{ status: 500 },
		);
	}
}

export async function POST(request) {
	// database product create
	await connectDb();
	const body = await request.json();
	try {
		const newProduct = await Product.create(body);
		return Response.json(newProduct, { status: 201 });
	} catch (error) {
		return Response.json({ error: "Failed To Create Product" });
	}
}
