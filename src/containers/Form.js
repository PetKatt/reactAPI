import React, { Component } from "react";

import classes from "./Form.css"

class Form extends Component {
	addPost = (e) => {
		e.preventDefault();

	/* Add post to JSONplaceholder fake server */
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			body: JSON.stringify({
				title: this.refs.title.value,
				body: this.refs.body.value
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
			.then(res => res.json())
			.then(d => console.log(d))
			.catch(err => console.log(err));
	}

	render() {
		return(
			<div>
				<form className={classes.Form} onSubmit={this.addPost}>
					<input type="text" placeholder="Title" ref="title" />
					<textarea type="text" placeholder="Body" ref="body" />
					<button type="submit">Add Post</button>
				</form>
			</div>
		);
	}
}

export default Form;