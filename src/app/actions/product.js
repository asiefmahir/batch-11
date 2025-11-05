"use server";
import { revalidatePath, updateTag } from "next/cache";

// backend, db, auth

export const addProduct = async (formData) => {
	console.log(formData.get("title"), "Product Title");
	console.log(formData.get("price"), "Product Price");

	const product = {
		title: formData.get("title"),
		price: Number(formData.get("price")),
		image: formData.get("image"),
	};

	console.log("product", product);
	await fetch(`http://localhost:3000/api/product`, {
		method: "POST",
		body: JSON.stringify(product),
		headers: {
			"Content-Type": "application/json",
		},
	});
	// revalidateTag("products");
	// revalidatePath("/shop");
	updateTag("products");
	// revalidatePath('/admin/products')
	// regeneration
};

// isr -> incremental static re-generation
// ssg -> static site generation
