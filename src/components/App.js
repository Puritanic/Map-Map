import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';

import Header from './Header/Header';
import MapContainer from './Map/MapContainer';
import ErrorPage from './ErrorPage';

class App extends Component {
	render() {
		return (
			<Router className="App">
				<React.Fragment>
					<Header />
					<Switch>
						<Route
							path="/"
							component={!this.props.offline ? MapContainer : ErrorPage}
						/>
						<Redirect from="*" to="/" />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	offline: state.parks.offline,
});

export default connect(mapStateToProps)(App);
