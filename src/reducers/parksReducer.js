import types from '../actions/types';
const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_PARKS:
			return { ...state };

		default:
			return state;
	}
};
