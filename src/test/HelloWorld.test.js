import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldApp from '../HelloWorldApp';

describe('HellWorldApp testing...', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<HelloWorldApp />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
