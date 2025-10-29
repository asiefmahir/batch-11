import { addProduct } from "../actions/product";

const AddProduct = () => {
	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
				action={addProduct}
			>
				<p>Title</p>
				<input
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Price</p>
				<input
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Image</p>

				<input
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
