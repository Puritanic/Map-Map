import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import parksReducer from '../reducers/parksReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
	createStore(
		combineReducers({
			parks: parksReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
