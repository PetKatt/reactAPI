import React from "react";

import Post from "./Post/Post";

const posts = (props) => {
	let posts = props.postsContent.map((post, index) => {
		return(
			<Post key={index} post={post} />
		);
	});

	return(
		<div>
			{posts}
		</div>
	);
};

export default posts;