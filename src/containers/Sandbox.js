import React, { Component } from "react";

import Text from "../components/Text";
import Users from "../components/Users/Users";
import Posts from "../components/Posts/Posts";
import Form from "./Form";

import classes from "./Sandbox.css";

class Sandbox extends Component {
	state = {}
	
	clickHandlerText = () => {
		fetch("./assets/sample.txt")
			.then(res => res.text())
			.then(d => this.setState({
				text: d
			}))
			.catch(err => console.log(err));
	}

	clickHandlerUsers = () => {
		fetch("./assets/users.json")
			.then(res => res.json())
			.then(d => this.setState({
				usersArray: d
			}))
			.catch(err => console.log(err));
	}

	clickHandlerPosts = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(d => this.setState({
				postsArray: d
			}))
			.catch(err => console.log(err));
	}

	render() {
		return(
			<div className={classes.Sandbox}>
				<button onClick={this.clickHandlerText}>Get Text</button>
				<button onClick={this.clickHandlerUsers}>Get JSON</button>
				<button onClick={this.clickHandlerPosts}>Get API DATA</button>
				
				{ (this.state.text) ? <Text textContent={this.state.text} /> : null }
				{ (this.state.usersArray) ? <Users usersContent={this.state.usersArray} /> : null }
				{ (this.state.postsArray) ? <Posts postsContent={this.state.postsArray} /> : null }

				<Form />
			</div>
		);
	}
}

export default Sandbox;