import React from 'react';
// import { Button } from 'react-bootstrap';
import shortId from 'shortid';
import store from './store';
import setTechnology from './actions';
// import * as actions from './actions';
// import { render } from './index';

const ButtonGroup = ({ technologies }) => (
    <div>
        {technologies.map((tech, i) => (
            <button
                type="button"
                data-tech={tech}
                key={shortId.generate()}
                className="btn-success"
                onClick={dispathBtnAction}
            >
                {tech}
            </button>
        ))}
    </div>
);

function dispathBtnAction(e) {
    const { tech } = e.target.dataset;
    store.dispath(setTechnology(tech));
    // store.subscribe(render);
}

export default ButtonGroup;
