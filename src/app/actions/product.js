"use server";
import { revalidatePath, revalidateTag } from "next/cache";

export const addProduct = async (formData) => {
	console.log(formData.get("title"), "Product Title");
	console.log(formData.get("price"), "Product Price");

	const product = {
		title: formData.get("title"),
		price: Number(formData.get("price")),
		image: formData.get("image"),
	};

	console.log("product", product);
	await fetch(`http://localhost:4000/products`, {
		method: "POST",
		body: JSON.stringify(product),
		headers: {
			"Content-Type": "application/json",
		},
	});
	// revalidateTag("products");
	revalidatePath("/shop");
	// revalidatePath('/admin/products')
	// regeneration
};
