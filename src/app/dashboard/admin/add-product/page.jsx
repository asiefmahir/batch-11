/* eslint-disable @next/next/no-img-element */
"use client";

import { addProduct } from "@/app/actions/product";
import { useEffect, useState } from "react";

const AddProduct = () => {
	const [product, setProduct] = useState({
		title: "",
		price: "",
		image: "",
		category: "",
	});
	const [categories, setCategories] = useState([]);
	const [imageUrl, setImageUrl] = useState("");
	useEffect(() => {
		const getAllCategories = async () => {
			const res = await fetch(`/api/category`);
			const data = await res.json();
			setCategories(data);
			setProduct({ ...product, category: data[0]._id });
		};
		getAllCategories();
	}, []);
	const handleChange = (e) => {
		setProduct({
			...product,
			[e.target.name]:
				e.target.name === "price"
					? Number(e.target.value)
					: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		addProduct(product);
		setProduct({
			title: "",
			price: "",
			image: "",
			category: "",
		});
	};

	const handleImageChange = async (e) => {
		console.log(e.target.files[0]);
		const file = e.target.files[0];

		const data = new FormData();

		data.append("file", file);
		data.append("upload_preset", "batch-11-project");
		data.append("cloud_name", "dcdga3gke");

		const res = await fetch(
			`https://api.cloudinary.com/v1_1/dcdga3gke/image/upload`,
			{
				method: "POST",
				body: data,
			},
		);

		const result = await res.json();
		console.log(result, "result");
		setImageUrl(result.secure_url);
		setProduct({ ...product, image: result.secure_url });
	};
	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
				onSubmit={submitHandler}
			>
				<p>Title</p>
				<input
					value={product.title}
					onChange={handleChange}
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Price</p>
				<input
					value={product.price}
					onChange={handleChange}
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<select name="category" id="" onChange={handleChange}>
					{categories.map((cat) => (
						<option key={cat._id} value={cat._id}>
							{cat.title}
						</option>
					))}
				</select>
				<br />
				<p>Image</p>

				<input
					onChange={handleImageChange}
					type="file"
					name="image"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<br />
				<p>Image Preview:</p>
				{imageUrl && (
					<img
						src={imageUrl}
						style={{ width: "100px", height: "100px" }}
						alt=""
					/>
				)}

				{imageUrl && <input type="submit" />}
			</form>
		</>
	);
};

export default AddProduct;
