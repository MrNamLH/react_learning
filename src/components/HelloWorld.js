import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';

class HelloWorld extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tech: props.tech,
		};
	}

	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">{this.state.tech}</h1>
			</header>
		);
		// return <div>Hello {this.state.tech}</div>;
	}
}

HelloWorld.propTypes = {
	tech: PropTypes.string,
};

HelloWorld.defaultProps = {
	tech: 'default Tech',
};

export default HelloWorld;
