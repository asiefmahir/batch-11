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
	useEffect(() => {
		const getAllCategories = async () => {
			const res = await fetch(`http://localhost:3000/api/category`);
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
					value={product.image}
					onChange={handleChange}
					type="text"
					name="image"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<br />

				<input type="submit" />
			</form>
		</>
	);
};

export default AddProduct;
