import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Filter from '../Filter/Filter';
import { openList } from '../../actions/list';

export class Header extends Component {
	static propTypes = {
		openList: PropTypes.func,
	};

	render() {
		return (
			<nav className="nav">
				<span className="nav__brand">Map&Map</span>
				<Filter placeholder="Filter parks by name" />
				<div className="links">
					<NavLink
						to="/favorites"
						role="link"
						className="nav__link"
						onClick={this.props.openList}
					>
						My favorite parks
					</NavLink>
					<NavLink to="/about" role="link" className="nav__link">
						About App
					</NavLink>
				</div>
			</nav>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	openList: () => dispatch(openList()),
});

export default connect(
	null,
	mapDispatchToProps
)(Header);
