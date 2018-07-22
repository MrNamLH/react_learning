import React, { Component } from 'react';
import shortId from 'shortid';
import Header from './components/HelloWorld/Header';
import ButtonGroup from './components/HelloWorld/ButtonGroup';
import store from './redux/store';
import './assets/helloWorldApp.css';

class HelloWorldApp extends Component {
	render() {
		return (
			<div className="App">
				<Header key={shortId.generate()} tech={store.getState().tech} />
				<ButtonGroup
					key={shortId.generate()}
					technologies={['React', 'Elm', 'React-Redux']}
				/>
			</div>
		);
	}
}

export default HelloWorldApp;
