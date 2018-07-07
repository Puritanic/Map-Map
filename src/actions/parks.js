import axios from 'axios';
import types from './types';

const url = 'https://private-310182-parks.apiary-mock.com/parks';

export const startFetching = dispatch => ({
	type: types.START_FETCHING,
});

export const fetchParks = () => dispatch => {
	dispatch(startFetching());

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
