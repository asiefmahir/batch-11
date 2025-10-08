const initThemeState = {
	bgColor: "#fff",
	color: "#000",
};

export const themeReducer = (state = initThemeState, action) => {
	switch (action.type) {
		case "theme/changeBgColor": {
			return {
				...state,
				bgColor: action.payload,
			};
		}
		case "theme/changeFontColor": {
			return {
				...state,
				color: action.payload,
			};
		}
		case "theme/reset": {
			return initThemeState;
		}
		default: {
			return state;
		}
	}
};
