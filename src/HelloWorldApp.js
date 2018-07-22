import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/HelloWorld/Header';
import ButtonGroup from './components/HelloWorld/ButtonGroup';
import './assets/helloWorldApp.css';

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

const mapStateToProps = state => ({
	tech: state.tech,
});

export default connect(mapStateToProps)(HelloWorldApp);
