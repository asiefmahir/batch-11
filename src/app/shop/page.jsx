import ProductCard from "../components/ProductCard";

const Shop = async () => {
	console.log("I am being regenerated");
	const res = await fetch(`http://localhost:3000/api/product`, {
		next: { tags: ["products"] },
	});
	const data = await res.json();
	console.log(data);

	return (
		<div>
			<div className="page-banner">
				<div className="page-banner__details">
					<div className="page-banner__details__title">
						<h1>Our E-commerce Website</h1>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="section__head">
						<div className="product__details__title">
							<h2>All Products</h2>
						</div>
					</div>
					<div className="section__content">
						<div className="grid three">
							{data?.data.map((product) => (
								<ProductCard
									key={product._id}
									product={product}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// pre-rendered html page -> static generated shop html page
// ssg -> static site generation
// isr -> incrementally static re-generation

export default Shop;
