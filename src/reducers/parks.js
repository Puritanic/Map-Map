import types from '../actions/types';

const initialState = {
	data: [],
	place: {},
	isPlaceLoading: false,
	isParkLoading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.START_FETCHING_PARK:
			return { ...state, isParkLoading: true, error: null };
		case types.START_FETCHING_PLACE:
			return { ...state, isPlaceLoading: true, error: null };
		case types.PARKS_FETCH_SUCCESS:
			return { ...state, isParkLoading: false, data: action.payload };
		case types.PARKS_FETCH_FAILURE:
			return { ...state, isParkLoading: false, error: action.payload };
		case types.FETCH_PLACE_SUCCESS:
			return { ...state, isPlaceLoading: false, place: action.payload };
		case types.FETCH_PLACE_FAILURE:
			return { ...state, isPlaceLoading: false, error: action.payload };
		case types.FILTER_PARKS:
			return { ...state, isParkLoading: false, data: action.payload };
		case types.PARKS_FILTER_FAILURE:
			return { ...state, isParkLoading: false, error: action.payload };
		default:
			return state;
	}
};
