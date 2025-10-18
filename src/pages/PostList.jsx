import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { fetchPosts } from "../store/middlewares";

const PostList = () => {
	const { posts } = useSelector((storeState) => storeState.post);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts);
	}, []);
	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
