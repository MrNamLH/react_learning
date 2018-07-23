import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Hello {this.props.tech}</h1>
			</header>
		);
	}
}

Header.propTypes = {
	tech: PropTypes.string,
};

Header.defaultProps = {
	tech: '...',
};

export default Header;
