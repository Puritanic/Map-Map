import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
	const { place, handleClick } = props;
	const fetchDetails = () => {
		return handleClick(place.placeId);
	};

	return (
		<div className="listItem" onClick={fetchDetails}>
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
	handleClick: PropTypes.func,
};

export default ListItem;
