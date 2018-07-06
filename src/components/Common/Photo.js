import React from 'react';

const Photo = ({ photo }) => {
	return (
		<img
			src={photo.getUrl({ maxWidth: 250, maxHeight: 150 })}
			alt="Park photo"
			className="photo"
		/>
	);
};

export default Photo;
