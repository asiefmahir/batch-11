import { createBrowserRouter } from "react-router";

import Root from "../pages/Root";
import ReduxExamples from "../pages/ReduxExamples";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import AddProduct from "../pages/AddProduct";
// import PostList from "../pages/PostList";

export const ourRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/redux-example", element: <ReduxExamples /> },
			{ path: "/cart", element: <Cart /> },
			{ path: "/", element: <Shop /> },
			{ path: "/add-product", element: <AddProduct /> },
			// { path: "/posts", element: <PostList /> },
		],
	},
]);

// function add(a, b) {}

// add(10, 20);
