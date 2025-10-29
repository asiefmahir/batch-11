// import {useEffect} from "react";
// server-only component

import Counter from "../components/Counter";
import Link from "next/link";

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
					<li key={post.id}>
						<Link href={`/post-list/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
			<Counter />
		</div>
	);
};
// pre-generated html pages -> Static Pages/ Pre-rendered Pages/ Static Site Generation (SSG)
// build time / server only render
// pre-generated html
// faster response to user
// seo-friendly
// next -> 80%
// react -> 20%
export default PostList;
