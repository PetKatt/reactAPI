import React from "react";

const user = (props) => {
	return(
		<div>
			<ul>
				<li>ID: {props.user.id}</li>
				<li>Name: {props.user.name}</li>
				<li>Email: {props.user.email}</li>
			</ul>
		</div>
	);
};

export default user;