import React, { Component } from 'react';
import Header from './Header';
import ButtonGroup from './ButtonGroup';
import '../../assets/helloWorldApp.css';

class HelloWorldApp extends Component {
	render() {
		return (
			<div className="App">
				<Header tech={this.props.tech} />
				<ButtonGroup technologies={['React', 'Elm', 'React-Redux']} />
			</div>
		);
	}
}

export default HelloWorldApp;
