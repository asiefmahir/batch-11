import { useState, useEffect } from "react";

const PostList = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);
	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
