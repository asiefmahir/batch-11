import { useState, useEffect } from "react";
// hook
// useState -> use State
// useFetch -> use Fetch

// custom hook
export const useFetch = (url, initData) => {
	// url = `https://jsonplaceholder.typicode.com/posts/2`
	// initData = null
	const [data, setData] = useState(initData);
	// const [data, setData] = useState([]);
	//
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetch(url)
			// fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5)
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				setErrorMessage("");
			})
			.catch(() => {
				setErrorMessage("Something Went Wrong");
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return {
		data,
		isLoading,
		errorMessage,
		// setData
	};
};

// function add(a, b) {
// 	return a + b;
// }

// add(10, 20);
// add(100, 200);
