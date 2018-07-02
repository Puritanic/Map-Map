import React from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
	render() {
		return <Map google={this.props.google} />;
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GMAP_KEY,
})(MapContainer);
