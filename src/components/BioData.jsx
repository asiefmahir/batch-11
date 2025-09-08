// BioData()

// component has 2 layers
// 1) Presentation Layer (Html, Css)
// 2) Data/Logic Layer
// i) Props (Another Component will pass me the data as argument)
// ii) State (Dynamic Data -> Changeable Data -> User Interaction)
const BioData = (props) => {
	// console.log(props, "props");
	const { name, phone, email, linkedIn, skills, interests } = props;

	return (
		<div className="bio-data">
			<h2>Bio Data of {name}</h2>
			<div className="personal-info">
				<p>Mobile No: {phone}</p>
				<p>email: {email}</p>
				<p>linkedIn: {linkedIn}</p>
			</div>
			<br />
			<div className="skills">
				<h2>My Skills:</h2>
				<ul>
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="interests">
				<h2>My Interests:</h2>
				<ul>
					{interests.map((interest) => (
						<li key={interest}>{interest}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

// function add(a, b) {
// 	return a + b;
// }

// add(10, 20); // 30
// add(100, 300); // 400

export default BioData;
