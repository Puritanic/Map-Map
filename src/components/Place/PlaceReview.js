import React from 'react';
import PropTypes from 'prop-types';

const PlaceReview = ({ review }) => {
	const averageRating = Math.round(review.rating);
	let rating = '★'.repeat(averageRating);

	return (
		<div className="review" tabIndex="1" role="Article">
			<div className="author__info">
				<img
					src={review.profile_photo_url}
					className="review__author_photo"
					alt="Review author avatars"
				/>
				<span className="review__author"> {review.author_name}</span>
				<span className="review__rating" title={`Rating: ${review.rating}`}>
					{rating}
				</span>
			</div>
			<span className="review__posted">{review.relative_time_description}</span>
			<span className="paragraph review__content">{review.text}</span>
		</div>
	);
};

PlaceReview.propTypes = {
	review: PropTypes.object,
};

export default PlaceReview;
