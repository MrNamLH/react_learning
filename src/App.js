import React, { Component } from 'react';
import shortId from 'shortid';
import HelloWord from './components/HelloWorld';
import ButtonGroup from './components/ButtonGroup';
import store from './redux/store';
import './assets/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<HelloWord
					key={shortId.generate()}
					tech={store.getState().tech}
				/>
				<ButtonGroup
					key={shortId.generate()}
					technologies={['React', 'Elm', 'React-Redux']}
				/>
			</div>
		);
	}
}

export default App;
