import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../Common/CloseIcon';
import PlaceReview from './PlaceReview';

const PlaceDetails = ({ place, closeCallback }) => {
	return (
		<div className="place">
			<div onClick={closeCallback}>
				<CloseIcon size={25} styles="closeIco" />
			</div>
			<h1>{place.name}</h1>
			<span>{place.formatted_address}</span>
			<span>Rating: {place.rating}</span>
			<div className="gallery">
				<img src="" alt="" />
			</div>
			{place.reviews &&
				place.reviews.map(review => <PlaceReview key={review.time} review={review} />)}
		</div>
	);
};

PlaceDetails.propTypes = {
	place: PropTypes.object,
	closeCallback: PropTypes.func,
};

export default PlaceDetails;
