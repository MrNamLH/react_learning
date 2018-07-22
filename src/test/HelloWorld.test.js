import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldApp from '../HelloWorldApp';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HelloWorldApp />, div);
	ReactDOM.unmountComponentAtNode(div);
});
