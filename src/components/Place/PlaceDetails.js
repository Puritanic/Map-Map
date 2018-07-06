import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../Common/CloseIcon';
import PlaceReview from './PlaceReview';
import Photo from '../Common/Photo';

const PlaceDetails = ({ place, closeCallback }) => {
	const averageRating = Math.round(place.rating);
	let rating = '★'.repeat(averageRating);

	return (
		<div className="place">
			<div onClick={closeCallback}>
				<CloseIcon size={25} styles="closeIco" />
			</div>
			<div className="place__location">
				<h1 className="heading heading--secondary">{place.name}</h1>
				<span className="heading heading--tertiary">{place.formatted_address}</span>
				<span className="place__review">Rating: {rating}</span>
				<span className="heading">{place.website}</span>
			</div>
			<div className="gallery">
				{place.photos &&
					place.photos.map(photo => (
						<Photo photo={photo} key={photo.height * Math.random()} />
					))}
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
