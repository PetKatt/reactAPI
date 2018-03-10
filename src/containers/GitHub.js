import React, { Component } from 'react';

const urlForUsername = username => 
	`https://api.github.com/users/${username}`

class GitHub extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	requestFailed: false
	  };
	}
	
	componentDidMount() {
		fetch(urlForUsername(this.props.username))
			.then(response => {
				if(!response.ok) throw new Error("Response failed");
				return response;
			})
			.then(d => d.json())
			.then(d => {
				this.setState({
					githubData: d
				})
			}, e => {
				this.setState({
					requestFailed: true
				});
				console.log(e);
			});
	}

  render() {
  	if (this.state.requestFailed) return <p>Request failed</p>
  	if (!this.state.githubData) return <p>Loading...</p>

    return (
  		<div>
  			<h2>{this.state.githubData.name}</h2>
  		</div>      
    );
  }
}

export default GitHub;
