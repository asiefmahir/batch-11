// import {useEffect} from "react";
// server-only component

import Counter from "../components/Counter";

// will never render on client/browser
const PostList = async () => {
	console.log("PostList is being rendered");

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	);
	const posts = await res.json();
	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			<Counter />
		</div>
	);
};
// build time / server only render
// pre-generated html
// faster response to user
// seo-friendly
// next -> 80%
// react -> 20%
export default PostList;
