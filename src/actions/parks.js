import axios from 'axios';

import types from './types';

const url = 'https://private-310182-parks.apiary-mock.com/parks';

export const startFetchingPark = () => ({
	type: types.START_FETCHING_PARK,
});

export const startFetchingPlace = () => ({
	type: types.START_FETCHING_PLACE,
});

export const fetchParks = () => dispatch => {
	dispatch(startFetchingPark());

	return axios
		.get(url)
		.then(res => {
			dispatch({
				type: types.PARKS_FETCH_SUCCESS,
				payload: res.data,
			});
		})
		.catch(err =>
			dispatch({
				type: types.PARKS_FETCH_FAILURE,
				payload: err,
			})
		);
};

export const fetchPlaceDetails = (google, map, placeId) => dispatch => {
	dispatch(startFetchingPlace());

	let service = new google.maps.places.PlacesService(map);
	return service.getDetails({ placeId }, (place, status) => {
		dispatch({
			type: types.FETCH_PLACE_SUCCESS,
			payload: place,
		});
	});
};
