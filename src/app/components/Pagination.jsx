"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Pagination = ({ totalPages, pathname }) => {
	const params = useSearchParams();
	const router = useRouter();

	const createQueryString = (name, value) => {
		let newParams = new URLSearchParams(params.toString());

		newParams.set(name, value);

		return newParams.toString();
		// ?page=3
		// newParams.set("page", 2)
	};

	return (
		<div className="text-center">
			<div>
				<nav>
					<ul className="flex justify-center">
						{Array.from({ length: totalPages }, (_, index) => {
							const page = index + 1;

							return (
								<li
									style={{
										marginRight: "10px",
										padding: "5px",
									}}
									key={page}
									className="m-[10px] border-blue-300 p-[5px] bg-[aqua]"
								>
									<button
										onClick={() => {
											router.push(
												`${pathname}?${createQueryString(
													"page",
													page,
												)}`,
											);
										}}
									>
										{page}
									</button>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Pagination;
