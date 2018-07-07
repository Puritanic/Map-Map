import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = props => {
	return (
		<div className="list">
			{props.places.map(place => {
				return <ListItem place={place} onClick={props.onClick} key={place.placeId} />;
			})}
		</div>
	);
};

List.propTypes = {
	onClick: PropTypes.func,
	places: PropTypes.arrayOf(PropTypes.object),
};

export default List;
