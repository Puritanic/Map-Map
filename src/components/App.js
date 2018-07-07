import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';

import Header from './Header/Header';
import MapContainer from './Map/MapContainer';
import Portal from './Portal/Portal';
import List from './List/List';

class App extends Component {
	render() {
		const ParkListPortal = () => (
			<Portal>
				<List />
			</Portal>
		);

		return (
			<Router className="App">
				<React.Fragment>
					<Header />
					<Switch>
						<Route path="/" component={MapContainer} />
						<Route path="/favorites" component={ParkListPortal} />
						<Redirect from="*" to="/" />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
