import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import { parks } from '../../fixtures';
import PlaceDetails from '../Place/PlaceDetails';
import Portal from '../Portal/Portal';
import List from '../List/List';

export class MapContainer extends React.Component {
	state = {
		parks,
		google: PropTypes.shape({}),
		place: {},
		isPortalVisible: false,
		isListVisible: false,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log(nextProps);
	}

	onClickMarker = (props, marker, e) => {
		console.log({ props, marker, e });
		const { google, map, placeID } = props;

		let service = new google.maps.places.PlacesService(map);
		return service.getDetails(
			{
				placeId: placeID,
			},
			(place, status) => {
				console.log(place);
				this.setState({ place, isPortalVisible: true });
			}
		);
	};

	closePortal = () => this.setState({ isPortalVisible: false });

	render() {
		const { google } = this.props;

		console.log(this.state);

		const style = {
			width: '100%',
			height: '100%',
		};
		const somewhereInWyoming = {
			lat: 42.55005,
			lng: -110.218801,
		};

		return (
			<React.Fragment>
				{this.state.isPortalVisible && (
					<Portal>
						<PlaceDetails place={this.state.place} closeCallback={this.closePortal} />
					</Portal>
				)}
				{this.state.isPortalVisible && (
					<Portal>
						<List places={parks} closeCallback={this.closePortal} />
					</Portal>
				)}
				<Map
					google={google}
					zoom={6}
					style={style}
					className="wrapper"
					initialCenter={somewhereInWyoming}
				>
					{this.state.parks.map(park => (
						<Marker
							key={park.placeId}
							placeID={park.placeId}
							title={park.name}
							name={'SOMA'}
							position={{ lat: park.lat, lng: park.lng }}
							onClick={this.onClickMarker}
						/>
					))}
				</Map>
			</React.Fragment>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GMAP_KEY,
})(MapContainer);
