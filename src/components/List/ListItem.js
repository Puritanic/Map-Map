import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
	const { place } = props;

	return (
		<div className="listItem">
			<h1 className={'listItem__title'}>{place.name}</h1>
		</div>
	);
};

ListItem.propTypes = {
	place: PropTypes.shape({
		placeId: PropTypes.string,
		name: PropTypes.string,
		rating: PropTypes.number,
	}),
};

export default ListItem;
