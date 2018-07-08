import React from 'react';
import PropTypes from 'prop-types';
import { GridLoader } from 'react-spinners';

import CloseIcon from '../Common/CloseIcon';
import PlaceReview from './PlaceReview';
import Photo from '../Common/Photo';

const PlaceDetails = ({ place, closeCallback, isLoading }) => {
	const averageRating = Math.round(place.rating);
	let rating = '★'.repeat(averageRating);

	return (
		<div className="place">
			{isLoading ? (
				<div className="centered">
					<GridLoader color="#f44336" margin="5px" size={50} />
				</div>
			) : (
				<div className="place__content">
					<div onClick={closeCallback}>
						<CloseIcon size={25} styles="closeIco" />
					</div>
					<div className="place__location">
						<h1 className="heading heading--secondary">{place.name}</h1>
						<span className="heading heading--tertiary">{place.formatted_address}</span>
						<span className="place__review" title={`Rating: ${place.rating}`}>
							Rating: {rating}
						</span>
						<a href={place.website} className="heading link" target="_blank">
							{place.website}
						</a>
					</div>
					<div className="gallery">
						{place.photos &&
							place.photos.map(photo => (
								<Photo
									photo={photo}
									name={place.name}
									key={photo.height * Math.random()}
								/>
							))}
					</div>
					{place.reviews && place.reviews.length > 0 ? (
						place.reviews.map(review => (
							<PlaceReview key={review.time} review={review} />
						))
					) : (
						<p className="paragraph text-center">
							Camp doesn&apos;t have any reviews yet.
						</p>
					)}
				</div>
			)}
		</div>
	);
};

PlaceDetails.propTypes = {
	place: PropTypes.object,
	closeCallback: PropTypes.func,
	isLoading: PropTypes.bool,
};

export default PlaceDetails;
