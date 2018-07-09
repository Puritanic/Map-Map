import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { GridLoader } from 'react-spinners';

import CloseIcon from '../Common/CloseIcon';
import PlaceReview from './PlaceReview';
import Photo from '../Common/Photo';

class PlaceDetails extends Component {
	componentDidMount = () => {
		document.addEventListener('keydown', this.closePortalOnEsc);
	};

	componentWillUnmount = () => {
		document.removeEventListener('keydown', this.closePortalOnEsc);
	};

	closePortalOnEnter = e => {
		if (e.which === 13) {
			this.props.closeCallback();
		}
	};

	closePortalOnEsc = e => {
		if (e.which === 27) {
			this.props.closeCallback();
		}
	};

	render() {
		const { place, closeCallback, isLoading } = this.props;
		let ariaLabel = `Details and reviews for campground`;

		let averageRating;
		let rating = 'N/A';

		if (place && place.rating) {
			averageRating = Math.round(place.rating);
			rating = '★'.repeat(averageRating);
		}

		if (place && place.name) {
			ariaLabel = `Details and reviews for ${place.name}`;
		}

		return (
			<section className="place" role="Article" aria-label={ariaLabel} id="place">
				{isLoading ? (
					<div className="centered">
						<GridLoader color="#f44336" margin="5px" size={50} />
					</div>
				) : (
					<div className="place__content">
						<a
							className="closeBtn"
							onClick={closeCallback}
							onKeyDown={this.closePortalOnEnter}
							aria-label="Close Modal"
							id="closeListBtn"
							tabIndex="0"
						>
							<span className="h-hide-visually">Close</span>
							<CloseIcon
								size={25}
								styles="closeIco"
								aria-label="Close Modal"
								aria-labelledby="close-modal"
							/>
						</a>
						{place ? (
							<React.Fragment>
								<div className="place__location">
									<h1 className="heading heading--secondary">{place.name}</h1>
									<span className="heading heading--tertiary">
										{place.formatted_address}
									</span>
									<span
										className="place__review"
										title={`Rating: ${place.rating}`}
									>
										Rating: {rating}
									</span>
									<a
										href={place.website}
										className="heading link"
										target="_blank"
									>
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
							</React.Fragment>
						) : (
							<p className="centered paragraph">
								Error while fetching location data.
							</p>
						)}
					</div>
				)}
			</section>
		);
	}
}

PlaceDetails.propTypes = {
	place: PropTypes.object,
	closeCallback: PropTypes.func,
	isLoading: PropTypes.bool,
};

export default PlaceDetails;
