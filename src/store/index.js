// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";
// import { cartReducer } from "./reducers/cart";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartReducer,
// });

// export const ourStore = createStore(rootReducer, composeWithDevTools());

import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducers/cart";
import { themeReducer } from "./reducers/theme";
import { counterReducer } from "./reducers/counter";

const rootReducer = {
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
};

export const ourStore = configureStore({
	reducer: rootReducer,
});
