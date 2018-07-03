import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
	render() {
		return (
			<div className="topbar">
				<Link to="/">
					<span>Map-Map</span>
				</Link>
			</div>
		);
	}
}

export default Header;
