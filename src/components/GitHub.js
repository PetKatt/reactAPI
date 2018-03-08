import React, { Component } from 'react';

const urlForUsername = username => 
	`https://api.github.com/users/${username}`

class GitHub extends Component {
  render() {
    return (
  		<div>
  			<p>Loading...</p>
  		</div>      
    );
  }
}

export default GitHub;
