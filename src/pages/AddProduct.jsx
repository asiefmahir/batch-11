import { useState } from "react";
import { useAddProductMutation } from "../store/services/product";

const initProduct = {
	title: "",
	price: "",
	image: "",
};

const AddProduct = () => {
	const [product, setProduct] = useState(initProduct);

	const handleChange = (e) => {
		console.log(e.target.name);
		// console.log(typeof e.target.value);
		const value =
			e.target.name === "price" ? Number(e.target.value) : e.target.value;
		// '658'
		setProduct({ ...product, [e.target.name]: value });
		// setProduct({...product, })
		// setProduct({...product, price: 45})
	};

	const [createProduct] = useAddProductMutation();

	const submitHandler = (e) => {
		e.preventDefault();
		createProduct(product);
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
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<br />
				<p>Price</p>
				<input
					value={product.price}
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<br />
				<p>Image</p>

				<input
					value={product.image}
					type="text"
					name="image"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<br />
				<br />

				<input type="submit" />
			</form>
		</>
	);
};

export default AddProduct;
