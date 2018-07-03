import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../Rating/Rating';

const Item = props => {
	const { place } = props;
	return (
		<div className="item">
			<h1 className={'item__title'}>{place.name}</h1>
			<Rating className={'item__rating'} percentage={place.rating / 5} />
		</div>
	);
};

Item.propTypes = {
	place: PropTypes.shape({
		placeId: PropTypes.string,
		name: PropTypes.string,
		rating: PropTypes.number,
	}),
};

export default Item;
