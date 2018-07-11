import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/store';

export const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
