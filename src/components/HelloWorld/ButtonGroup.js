import React from 'react';
import shortId from 'shortid';
import { helloWordStore } from '../../redux/store';
import { setTechnology } from '../../redux/actions';

const ButtonGroup = ({ technologies }) => (
	<div className="App-intro">
		<div>
			{technologies.map(tech => (
				<button
					type="button"
					data-tech={tech}
					key={shortId.generate()}
					className="btn-success group-btn"
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
	helloWordStore.dispatch(setTechnology(tech));
}

export default ButtonGroup;
