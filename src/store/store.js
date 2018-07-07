import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import parksReducer from '../reducers/parks';
import listReducer from '../reducers/list';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
	createStore(
		combineReducers({
			parks: parksReducer,
			list: listReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
