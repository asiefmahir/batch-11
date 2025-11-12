/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { priceRanges } from "@/app/utils/filteredData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductFilter() {
	const [categories, setCategories] = useState([]);
	const pathname = "/shop";
	const params = useSearchParams();
	const router = useRouter();

	const getCategories = async () => {
		const res = await fetch(`/api/category`, {
			method: "GET",
			next: { revalidate: 1 },
		});
		const data = await res.json();
		setCategories(data);
	};

	const createQueryString = (name, value) => {
		// createQueryString(["minPrice", "maxPrice"], [200, 250])
		// createQueryString("category", "1234234")
		let newParams = new URLSearchParams(params.toString());
		if (Array.isArray(name) && Array.isArray(value)) {
			name.forEach((n, index) => {
				newParams.set(n, value[index]);
			});
			newParams.set("page", 1);
			return newParams.toString();
		}

		newParams.set(name, value);
		newParams.set("page", 1);
		return newParams.toString();
	};

	const handleRemoveFilter = (filter) => {
		let newParams = new URLSearchParams(params.toString());
		if (typeof filter === "string") {
			newParams.delete(filter);
		}

		if (Array.isArray(filter)) {
			filter.forEach((name) => {
				newParams.delete(name);
			});
		}

		newParams.set("page", 1);

		const queryString = newParams.toString();
		const newUrl = `${pathname}?${queryString}`;
		// shop/page=1
		router.push(newUrl);
	};
	useEffect(() => {
		getCategories();
	}, []);

	const activeButton =
		"bg-blue-600 text-white font-semibold px-3 py-1 rounded-full mx-1 shadow";
	const button =
		"bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded-full mx-1 shadow hover:bg-gray-200 transition";

	return (
		<div className="mb-5 overflow-y-auto pr-2">
			<p className="text-lg font-semibold mb-2">Filter Products</p>

			<Link href="/shop" className="text-red-600 hover:underline">
				Clear Filters
			</Link>

			<p className="mt-6 mb-2 text-blue-700 bg-blue-100 px-3 py-2 rounded">
				Price
			</p>
			<div className="flex flex-wrap items-center gap-2">
				{priceRanges?.map((range) => {
					const isActive =
						params.get("minPrice") === String(range?.min) &&
						params.get("maxPrice") === String(range?.max);

					return (
						<div key={range?.label} className="flex items-center">
							<button
								className={isActive ? activeButton : button}
								onClick={() => {
									router.push(
										`${pathname}/?${createQueryString(
											["minPrice", "maxPrice"],
											[range.min, range.max],
										)}`,
									);
								}}
							>
								{range?.label}
							</button>
							{isActive && (
								<button
									onClick={() => {
										handleRemoveFilter([
											"minPrice",
											"maxPrice",
										]);
									}}
									className="ml-1 text-red-500 font-bold hover:text-red-700"
								>
									X
								</button>
							)}
						</div>
					);
				})}
			</div>

			<p className="mt-6 mb-2 text-blue-700 bg-blue-100 px-3 py-2 rounded">
				Categories
			</p>
			<div className="flex flex-wrap items-center gap-2">
				{categories?.map((c) => {
					const isActive = params.get("category") === c._id;

					return (
						<div key={c._id} className="flex items-center">
							<button
								className={isActive ? activeButton : button}
								onClick={() => {
									router.push(
										`${pathname}?${createQueryString(
											"category",
											c._id,
										)}`,
									);
								}}
							>
								{c?.title}
							</button>
							{isActive && (
								<button
									onClick={() =>
										handleRemoveFilter("category")
									}
									className="ml-1 text-red-500 font-bold hover:text-red-700"
								>
									X
								</button>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
