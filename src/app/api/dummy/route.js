export async function GET() {
	const data = [
		{ id: 1, name: "Dummy Item 1" },
		{ id: 2, name: "Dummy Item 2" },
	];
	return Response.json(data);
}
