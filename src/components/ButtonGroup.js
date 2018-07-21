import React from 'react';
// import { Button } from 'react-bootstrap';
import shortId from 'shortid';
import store from '../redux/store';
import setTechnology from '../redux/actions';
// import * as actions from './actions';
// import render from './index';

const ButtonGroup = ({ technologies }) => (
	<div className="App-intro">
		<div>
			{technologies.map((tech, i) => (
				<button
					type="button"
					data-tech={tech}
					key={shortId.generate()}
					className="btn-success"
					onClick={dispatchBtnAction}
				>
					{tech}
				</button>
			))}
		</div>
	</div>
);

function dispatchBtnAction(e) {
	const { tech } = e.target.dataset;
	store.dispatch(setTechnology(tech));
	// store.subscribe(render);
}

export default ButtonGroup;
