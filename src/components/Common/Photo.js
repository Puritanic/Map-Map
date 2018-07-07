import React from 'react';

const Photo = ({ photo, name }) => {
	console.log(photo);
	return (
		<img src={photo.getUrl({ maxWidth: 250, maxHeight: 150 })} alt={name} className="photo" />
	);
};

export default Photo;
