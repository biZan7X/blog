import react, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

import UserHeader from "./UserHeader";

const PostList = (props) => {
	useEffect(() => {
		props.fetchPosts();
	}, []);

	//& helper array
	const renderList = props.posts.map((post) => {
		return (
			<div className="item" key={post.id}>
				<i className="large middle aligned icon user" />

				<div className="content">
					<div className="description">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
					<UserHeader userId={post.userId} />
				</div>
			</div>
		);
	});

	return <div>{renderList}</div>;
};

const mapStateToProps = (state) => {
	return { posts: state.posts, users: state.users };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
