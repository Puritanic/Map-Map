import React from 'react';
import { NavLink } from 'react-router-dom';

import Filter from '../Filter/Filter';

export class Header extends React.Component {
	render() {
		return (
			<nav className="nav">
				<span className="nav__brand">Map&Map</span>
				<Filter placeholder="Filter parks by name" />
				<div className="links">
					<NavLink to="/favorites" className="nav__link">
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

export default Header;
