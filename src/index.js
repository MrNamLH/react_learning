import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldApp from './HelloWorldApp';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './assets/common.css';

const helloWorldAppElement = document.getElementById('helloWorldApp');

const render = () => ReactDOM.render(<HelloWorldApp />, helloWorldAppElement);
render();

store.subscribe(render);

registerServiceWorker();

export default render;
