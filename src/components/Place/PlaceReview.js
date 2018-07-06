import React from 'react';
import PropTypes from 'prop-types';

const PlaceReview = ({ review }) => {
	return (
		<div className="review">
			<span className="review__author"> {review.author_name}</span>
			<span className="review__author_photo"> {review.profile_photo_url}</span>
			<span className="review__rating"> {review.rating}</span>
			<span className="review__posted">{review.relative_time_description}</span>
			<span className="review__content">{review.text}</span>
		</div>
	);
};

PlaceReview.propTypes = {
	review: PropTypes.object,
};

export default PlaceReview;
