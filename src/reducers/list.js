import types from '../actions/types';

const initialState = {
	isListOpen: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.OPEN_LIST:
			return { isListOpen: true };
		case types.CLOSE_LIST:
			return { isListOpen: false };
		default:
			return state;
	}
};
