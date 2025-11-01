import connectDb from "@/app/utils/db";
import Product from "@/app/models/product";

export async function GET() {
	console.log("I am being hit as a rest api endpoint");
	await connectDb();
	const products = await Product.find();
	return Response.json({ data: products });
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
