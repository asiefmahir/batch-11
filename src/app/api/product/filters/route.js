import { NextResponse } from "next/server";
import connectDb from "@/app/utils/db";
import Product from "@/app/models/product";

export async function GET(req) {
	await connectDb();
	const { searchParams } = new URL(req.url);
	console.log(searchParams, "srrr");

	const page = searchParams.get("page") || {};
	const minPrice = searchParams.get("minPrice") || "";
	const maxPrice = searchParams.get("maxPrice") || "";
	const category = searchParams.get("category") || "";

	console.log(page, "pg");

	const pageSize = 2;

	const filter = {};

	if (category && category.trim()) {
		filter.category = category.trim();
	}

	if (minPrice && maxPrice) {
		filter.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
	}

	console.log(filter, "fflll");

	try {
		const currentPage = Number(page) || 1;
		const skip = (currentPage - 1) * pageSize;
		const filteredProducts = await Product.find(filter)
			.skip(skip)
			.limit(pageSize)
			.sort({ createdAt: -1 });

		const totalFilteredProducts = await Product.countDocuments(filter);
		const totalPages = Math.ceil(totalFilteredProducts / pageSize);
		return NextResponse.json(
			{
				success: true,
				products: filteredProducts,
				currentPage,
				totalPages: totalPages,
			},
			{ status: 200 },
		);
	} catch (err) {
		console.log(err);
		return NextResponse.json(
			{
				success: false,
				err: err.message,
			},
			{
				status: 500,
			},
		);
	}
}
