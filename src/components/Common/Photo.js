import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo, name }) => {
	return (
		<img src={photo.getUrl({ maxWidth: 250, maxHeight: 150 })} alt={name} className="photo" />
	);
};

Photo.propTypes = {
	photo: PropTypes.shape({
		getUrl: PropTypes.func,
	}),
	name: PropTypes.string,
};

export default Photo;
