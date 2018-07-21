import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

const render = () => ReactDOM.render(<App />, rootElement);
render();

registerServiceWorker();

export default render;
