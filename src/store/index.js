import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
import { cartReducer } from "./reducers/cart";
import { productReducer } from "./reducers/product";

import { ourMiddleWare } from "./middlewares";
// import { thunk } from "redux-thunk";
import { postReducer } from "./reducers/post";

const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
	product: productReducer,
	post: postReducer,
});

export const ourStore = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(ourMiddleWare)),
);

// import { configureStore } from "@reduxjs/toolkit";

// import { cartSlice } from "./reducers/cart";
// import { themeReducer } from "./reducers/theme";
// import { counterReducer } from "./reducers/counter";

// const rootReducer = {
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartSlice.reducer,
// };

// export const ourStore = configureStore({
// 	reducer: rootReducer,
// });
