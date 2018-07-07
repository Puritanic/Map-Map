import types from '../actions/types';
const initialState = {
	data: [],
	isLoading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.START_FETCHING:
			return { ...state, isLoading: true, error: null };
		case types.PARKS_FETCH_SUCCESS:
			return { ...state, isLoading: false, data: action.payload };
		case types.PARKS_FETCH_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};
