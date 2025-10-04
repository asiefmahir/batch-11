import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../pages/Root";
import Team from "../pages/Team";
import PostList from "../pages/PostList";

// dynamic Routing
// 404 Route
// Error Element

// focus()

// useMemo()
// memo()
// useCallback()

// map()

// system design

export const ourRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/about", element: <About /> },
			{ path: "/", element: <Home /> },
			{ path: "/team", element: <Team /> },
			{ path: "/posts", element: <PostList /> },
		],
	},
]);
