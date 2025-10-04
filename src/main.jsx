import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ourRouter } from "./router/router";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={ourRouter} />
	</StrictMode>,
);
// react dom -> DOM -> React Code (Component)
// <img />

// "use strict"
