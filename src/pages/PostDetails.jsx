import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";

const PostDetails = () => {
	const { postId } = useParams();

	const {
		data: post,
		isLoading,
		errorMessage,
	} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, null);

	// new Error()

	if (isLoading) {
		return <h2>Loading........</h2>;
	}

	if (errorMessage) {
		return <p style={{ color: "red" }}>{errorMessage}</p>;
	}

	return (
		<div>
			<h1>Post Details Page page of {post?.id}</h1>
			<hr />
			<h2>Post Title - {post?.title}</h2>
			<p>Post Description - {post?.body}</p>
		</div>
	);
};

export default PostDetails;
