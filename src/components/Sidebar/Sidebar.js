import React from 'react';

import Listing from '../Listing/Listing';

export class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<div className="heading">
					<Listing places={this.props.places} />
				</div>
			</div>
		);
	}
}

export default Sidebar;
