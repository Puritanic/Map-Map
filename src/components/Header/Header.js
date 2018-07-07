import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import Filter from '../Filter/Filter';
import { openList } from '../../actions/list';

export class Header extends React.Component {
	render() {
		return (
			<nav className="nav">
				<span className="nav__brand">Map&Map</span>
				<Filter placeholder="Filter parks by name" />
				<div className="links">
					<NavLink to="/favorites" className="nav__link" onClick={this.props.openList}>
						My favorite parks
					</NavLink>
					<NavLink to="/about" className="nav__link">
						About App
					</NavLink>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	openList: () => dispatch(openList()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
