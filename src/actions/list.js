import types from './types';

export const openList = () => dispatch =>
	dispatch({
		type: types.OPEN_LIST,
	});

export const closeList = () => dispatch =>
	dispatch({
		type: types.CLOSE_LIST,
	});
