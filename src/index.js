import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HelloWorldApp from './HelloWorldApp';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './assets/common.css';

const helloWorldAppElement = document.getElementById('helloWorldApp');

const render = () =>
	ReactDOM.render(
		<Provider store={store}>
			<HelloWorldApp />
		</Provider>,
		helloWorldAppElement
	);
render();

registerServiceWorker();

export default render;
