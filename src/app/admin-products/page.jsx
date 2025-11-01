import React from "react";

const AdminProducts = async () => {
	const res = await fetch(`http://localhost:4000/products`, {
		next: { tags: ["products"] },
	});
	const data = await res.json();
	return (
		<div>
			<h2>All Products</h2>
			<ul>
				{data.map((product) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</div>
	);
};

export default AdminProducts;
