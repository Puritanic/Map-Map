import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { closeList } from '../../actions/list';
import { fetchPlaceDetails } from '../../actions/parks';
import ListItem from './ListItem';
import CloseIcon from '../Common/CloseIcon';

const List = props => {
	const sortedPlaces = props.places.sort((a, b) => a.name.localeCompare(b.name));

	const fetchDetails = id => {
		props.fetchPlaceDetails(props.google, props.map, id);
		props.showPlace(id);
	};

	return (
		<div className="list">
			<div onClick={props.closeList}>
				<CloseIcon size={25} styles="closeIco closeIco--left" />
			</div>
			{sortedPlaces &&
				sortedPlaces.map(place => {
					return (
						<ListItem
							place={place}
							onClick={props.onClick}
							key={place.placeId}
							handleClick={fetchDetails}
						/>
					);
				})}
		</div>
	);
};

List.propTypes = {
	onClick: PropTypes.func,
	places: PropTypes.arrayOf(PropTypes.object),
	closeList: PropTypes.func,
	fetchPlaceDetails: PropTypes.func,
	showPlace: PropTypes.func,
	google: PropTypes.shape({}),
	map: PropTypes.shape({}),
};

const mapDispatchToProps = dispatch => ({
	closeList: () => dispatch(closeList()),
	fetchPlaceDetails: (google, map, placeId) => dispatch(fetchPlaceDetails(google, map, placeId)),
});

export default connect(
	null,
	mapDispatchToProps
)(List);
