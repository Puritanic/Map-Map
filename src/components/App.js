import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';

import Home from './Home/Home';
import MapContainer from './Map/MapContainer';

const Favorites = () => <h1>Favorites</h1>;

class App extends Component {
	render() {
		return (
			<Router className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/map" component={MapContainer} />
					<Route path="/favorites" component={Favorites} />
					<Redirect from="*" to="/" />
				</Switch>
			</Router>
		);
	}
}

export default App;
