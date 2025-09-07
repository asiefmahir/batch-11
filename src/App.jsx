import "./App.css";
import BioData from "./components/BioData";

// App()
// BioData("Mahir Asief", "")
// <App></App>
// <App />

function App() {
	console.log("I am being called");
	// props

	return (
		<>
			<BioData
				name="Asief Mahir"
				phone="+884242544"
				email="asiefmahir@gmail.com"
				linkedIn="linkedIn/asiefmahir"
				skills={["JS", "REACT", "Node"]}
				interests={["Chess", "Football"]}
			/>
			<hr />
			<BioData
				name="Sr Setu"
				phone="+881545425425454"
				email="srsetu@gmail.com"
				linkedIn="linkedIn/srsetu"
				skills={["WP", "PHP", "JS", "REACT", "Node"]}
				interests={["Chess", "Football", "Gadgets"]}
			/>
		</>
	);
}

// class

// export const arr = [1, 2, 3]; // named export

export default App; // default export
// A component must contain 3 virtue

// 1) A component must be a function
// 2) That function should return "something"
// 3) That "something" must be some html-ish code (JSX)
