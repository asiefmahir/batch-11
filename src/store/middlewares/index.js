export const ourMiddleWare = (store) => (next) => (action) => {
	console.log(store, "store");
	console.log(action, "action");

	if (typeof action === "function") {
		// action === fetchPosts
		action(store.dispatch);
		return;
	}
	next(action);
};
// thunk -> delay
// redux thunk

export const fetchProducts = (dispatch) => {
	dispatch({ type: "product/fetchPending" });
	fetch(`http://localhost:3000/products`)
		.then((res) => res.json())
		.then((data) => {
			dispatch({
				type: "product/fetchSucceeded",
				payload: data,
			});
		})
		.catch((err) => {
			dispatch({
				type: "product/fetchFailed",
				payload: err.message,
			});
		});
};

export const fetchPosts = (dispatch) => {
	dispatch({ type: "post/fetchPending" });
	fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
		.then((res) => res.json())
		.then((data) => {
			dispatch({ type: "post/fetchSucceeded", payload: data });
		})
		.catch((err) => {
			dispatch({
				type: "post/fetchFailed",
				payload: err.message,
			});
		});
};
