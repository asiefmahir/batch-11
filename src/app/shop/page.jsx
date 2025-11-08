import ProductCard from "@/app/components/ProductCard";
import { getBaseUrl } from "@/app/utils/api";
import Pagination from "../components/Pagination";

const getProduct = async (searchParams) => {
	const searchQuery = new URLSearchParams({
		page: searchParams.page,
	}).toString();
	console.log(searchQuery, "searchQuery");

	const baseUrl = getBaseUrl();
	const res = await fetch(`${baseUrl}/api/product?${searchQuery}`);

	if (!res.ok) {
		throw new Error(`Failed to Fetch Products`);
	}
	// some.com/api?page=2
	const data = await res.json();
	return {
		products: data?.products,
		totalPages: data?.totalPages,
		currentPage: data?.currentPage,
	};
};

const Shop = async ({ searchParams }) => {
	const params = await searchParams;
	console.log("I am being re-rendered");
	const data = await getProduct(params);

	// console.log("I am being regenerated");
	// const res = await fetch(`http://localhost:3000/api/product`, {
	// 	next: { tags: ["products"] },
	// });
	// // fullstack project -> Backend -> Frontend
	// // Backend -> DB
	// // project
	// const data = await res.json();
	// console.log(data);

	return (
		<main>
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
								{data?.products?.map((product) => (
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
			<Pagination totalPages={data.totalPages} pathname={"/shop"} />
		</main>
	);
};
// pre-rendered html page -> static generated shop html page
// ssg -> static site generation
// isr -> incrementally static re-generation

export default Shop;

// server side rendering
// request time rendering
