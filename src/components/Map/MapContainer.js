import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import { parks } from '../../fixtures';

export class MapContainer extends React.Component {
	state = {
		parks,
		google: PropTypes.shape({}),
	};

	onMouseoverMarker(props, marker, e) {
		console.log({ props, marker, e });
		const { google, map } = props;
		let service = new google.maps.places.PlacesService(map);

		console.log({ service });
		console.log(
			service.getDetails(
				{
					placeId: 'ChIJxbVfgaQfTlMRa-n8WQ9rYlU',
				},
				(place, status) => {
					console.log(status);
					console.log(place);
				}
			)
		);
	}

	render() {
		const { google } = this.props;

		const style = {
			width: '100%',
			height: '100%',
		};
		const somewhereInWyoming = {
			lat: 42.55005,
			lng: -110.218801,
		};

		return (
			<Map
				google={google}
				zoom={6}
				style={style}
				className="wrapper"
				initialCenter={somewhereInWyoming}
			>
				{this.state.parks.map(park => (
					<Marker
						key={park.id}
						title={park.name}
						name={'SOMA'}
						position={{ lat: park.lat, lng: park.lng }}
						onMouseover={this.onMouseoverMarker}
					/>
				))}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GMAP_KEY,
})(MapContainer);
