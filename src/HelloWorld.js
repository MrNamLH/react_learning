import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tech: props.tech,
        };
    }

    render() {
        return <div>Hello {this.state.tech}</div>;
    }
}

HelloWorld.propTypes = {
    tech: PropTypes.string,
};

HelloWorld.defaultProps = {
    tech: 'defaut Tech',
};

export default HelloWorld;
