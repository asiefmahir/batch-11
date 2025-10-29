import React from "react";

const PostDetails = async ({ params }) => {
	const { id } = await params;
	console.log(id);
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await res.json();

	return (
		<div>
			<h2>I am PostDetails page of {post?.id}</h2>
			<p>Title - {post.title}</p>
		</div>
	);
};

export const generateStaticParams = async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	);
	const posts = await res.json();

	return posts.slice(0, 3).map((post) => ({
		id: String(post.id),
	}));
};

//

// 1 billion
// multibilllion dollar

// 90/100/
// user experience

export default PostDetails;
