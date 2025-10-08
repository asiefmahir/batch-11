import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ourRouter } from "./router/router";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { ourStore } from "./store";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={ourStore}>
			<RouterProvider router={ourRouter} />
		</Provider>
	</StrictMode>,
);
// react dom -> DOM -> React Code (Component)
// <img />

// "use strict"
