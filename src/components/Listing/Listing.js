import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Listing = props => {
	return (
		<div className="listing-container">
			{props.places.map(place => {
				return <Item place={place} onClick={props.onClick} key={place.placeId} />;
			})}
		</div>
	);
};

Listing.propTypes = {
	onClick: PropTypes.func,
	places: PropTypes.arrayOf(PropTypes.object),
};

export default Listing;
