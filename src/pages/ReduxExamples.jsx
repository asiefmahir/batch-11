import { useSelector, useDispatch } from "react-redux";

const ReduxExamples = () => {
	const counter = useSelector((reduxStates) => reduxStates.counter);
	const theme = useSelector((storeState) => storeState.theme);
	console.log(counter, "counter");
	const dispatch = useDispatch();
	// dispatch({})

	return (
		<div style={{ backgroundColor: theme.bgColor, color: theme.color }}>
			<div>
				<div className="theme">
					<h2>Change Theme</h2>
					<div className="bg-group">
						<button
							onClick={() =>
								dispatch({
									type: "theme/changeBgColor",
									payload: "tomato",
								})
							}
						>
							Change BG color to Tomato
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "theme/changeBgColor",
									payload: "aqua",
								})
							}
						>
							Change BG color to Aqua
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "theme/changeBgColor",
									payload: "blue",
								})
							}
						>
							Change BG color to Blue
						</button>
					</div>
					<div className="font-group">
						<button
							onClick={() =>
								dispatch({
									type: "theme/changeFontColor",
									payload: "red",
								})
							}
						>
							Change Font Color to Red
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "theme/changeFontColor",
									payload: "green",
								})
							}
						>
							Change Font Color to Green
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "theme/changeFontColor",
									payload: "purple",
								})
							}
						>
							Change Font Color to Purple
						</button>
					</div>
					<button onClick={() => dispatch({ type: "theme/reset" })}>
						Reset Theme
					</button>
				</div>
			</div>
			<div>
				<h2>Counter App</h2>
				<p>The value of the counter is {counter}</p>
				<button
					onClick={() =>
						dispatch({ type: "counter/increment", payload: 1 })
					}
				>
					Increase By 1
				</button>
				<button
					onClick={() =>
						dispatch({ type: "counter/increment", payload: 5 })
					}
				>
					Increase By 5
				</button>
				<button
					onClick={() =>
						dispatch({ type: "counter/decrement", payload: 1 })
					}
				>
					Decrease By 1
				</button>
				<button
					onClick={() =>
						dispatch({ type: "counter/decrement", payload: 3 })
					}
				>
					Decrease By 3
				</button>
			</div>
		</div>
	);
};

export default ReduxExamples;
