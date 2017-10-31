import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>Pending-Name</h1>
			</div>
		);
	}
}

export default createContainer(() => {
	return {};
}, App);
