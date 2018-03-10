import React from "react";

import User from "./User/User";

const users = (props) => {
	let users = props.usersContent.map((user, index) => {
		return(
			<User key={index} user={user} />
		);
	});

	return(
		<div>
			{users}
		</div>
	);
};

export default users;