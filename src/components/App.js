import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';

import Header from './Header/Header';
import MapContainer from './Map/MapContainer';

class App extends Component {
	render() {
		return (
			<Router className="App">
				<React.Fragment>
					<Header />
					<Switch>
						<Route path="/" component={MapContainer} />
						<Redirect from="*" to="/" />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
