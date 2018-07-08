import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
	const { place, handleClick } = props;
	const fetchDetails = () => {
		return handleClick(place.placeId);
	};

	const fetchDetailsOnKeydown = e => {
		if (e.which === 13) {
			return handleClick(place.placeId);
		}
	};

	return (
		<li
			className="listItem"
			onClick={fetchDetails}
			onKeyDown={fetchDetailsOnKeydown}
			tabIndex="1"
		>
			<span className={'listItem__title'}>{place.name}</span>
		</li>
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
