"use server";
import { revalidatePath, updateTag } from "next/cache";

// backend, db, auth

export const addProduct = async (data) => {
	console.log("product", data);
	await fetch(`http://localhost:3000/api/product`, {
		method: "POST",
		body: JSON.stringify({ ...data }),
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
