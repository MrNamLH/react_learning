import React, { Component } from 'react';
// import { createStore } from 'redux';
// import logo from './logo.svg';
import './App.css';
import HelloWord from './HelloWorld';
import ButtonGroup from './ButtonGroup';
import store from './store';

class App extends Component {
	render() {
		return [
			<HelloWord key={1} tech={store.getState().tech} />,
			<ButtonGroup
				key={2}
				technologies={['React', 'Elm', 'React-Redux']}
			/>,
		];
		/* <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <HelloWord tech={store.getState().tech} />

                    <ButtonGroup
                        technologies={['React', 'Elm', 'React-Redux']}
                    />
                </p>
            </div> */
	}
}

export default App;
