import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HelloWorldApp from './components/HelloWorld';
import { helloWordStore } from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './assets/common.css';

const helloWorldAppElement = document.getElementById('helloWorldApp');

ReactDOM.render(
	<Provider store={helloWordStore}>
		<HelloWorldApp />
	</Provider>,
	helloWorldAppElement
);

registerServiceWorker();
