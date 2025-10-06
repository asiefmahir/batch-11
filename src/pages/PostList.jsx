import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

const PostList = () => {
	const { data, isLoading, errorMessage } = useFetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=5`,
		[],
	);

	if (isLoading) {
		return <h3>Loading PostList Page..........</h3>;
	}
	if (errorMessage) {
		return <h4 style={{ color: "tomato" }}>{errorMessage}</h4>;
	}
	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{data.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
