import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GridLoader } from 'react-spinners';

import { store } from '../../index';
import PlaceDetails from '../Place/PlaceDetails';
import Portal from '../Portal/Portal';
import List from '../List/List';

import { fetchParks, fetchPlaceDetails } from '../../actions/parks';

const Spinner = () => {
	const timeout = () =>
		setTimeout(() => {
			if (window.google && window.google.maps) {
				console.info('Google Maps API Loaded.');
			} else {
				console.warn('Google Maps API fetch failed.');
				// Setting timeout here so that I can resolve state of the navigator
				// temp solution, google-react-maps lib can't handle failing google maps xhr
				store.dispatch({ type: 'PARKS_OFFLINE' });
			}
		}, 8000);

	return (
		<div className="spinner">
			{timeout()}
			<GridLoader color="#f44336" margin="5px" size={50} />
		</div>
	);
};

export class MapContainer extends Component {
	static propTypes = {
		fetchParks: PropTypes.func,
		fetchPlaceDetails: PropTypes.func,
		google: PropTypes.shape({}),
		map: PropTypes.shape({}),
		list: PropTypes.shape({
			isListOpen: PropTypes.bool,
		}),
		placeID: PropTypes.string,
		parks: PropTypes.shape({
			place: PropTypes.shape({}),
			isPlaceLoading: PropTypes.bool,
			data: PropTypes.arrayOf(PropTypes.object),
		}),
		place: PropTypes.shape({}),
	};

	state = {
		isPortalVisible: false,
		mapInstance: {},
		selectedPlace: null,
	};

	componentDidMount = () => {
		this.props.fetchParks();
	};

	static getDerivedPropsFromState(nextProps, prevState) {
		console.log(nextProps);
	}

	onClickMarker = (props, marker, e) => {
		const { google, map, placeID } = props;
		this.props.fetchPlaceDetails(google, map, placeID);
		this.setState({ isPortalVisible: true, selectedPlace: placeID });
	};

	closePortal = () => this.setState({ isPortalVisible: false, selectedPlace: null });

	openPortal = placeID => this.setState({ isPortalVisible: true, selectedPlace: placeID });

	onReady = (mapProps, map) => this.setState({ mapInstance: map });

	render() {
		const { google } = this.props;
		const style = {
			width: '100%',
			height: '100%',
			background: '#aadaff',
		};
		const somewhereInWyoming = {
			lat: 42.55005,
			lng: -110.218801,
		};

		return (
			<main className="map">
				{this.state.isPortalVisible && (
					<Portal>
						<PlaceDetails
							place={this.props.parks.place}
							closeCallback={this.closePortal}
							isLoading={this.props.parks.isPlaceLoading}
							aria-modal="true"
							tabIndex="-1"
						/>
					</Portal>
				)}
				{this.props.list.isListOpen && (
					<Portal>
						<List
							places={this.props.parks.data}
							showPlace={this.openPortal}
							closeCallback={this.closePortal}
							google={google}
							map={this.state.mapInstance}
							aria-modal="true"
							aria-label="Map with camps"
							tabIndex="-1"
							isList={true}
						/>
					</Portal>
				)}

				<Map
					google={google}
					zoom={6}
					style={style}
					className="wrapper"
					initialCenter={somewhereInWyoming}
					onReady={this.onReady}
					role="application"
					ref={node => (this.mapRef = node)}
				>
					{this.props.parks.data &&
						this.props.parks.data.map(park => (
							<Marker
								key={park.placeId}
								placeID={park.placeId}
								title={park.name}
								position={{ lat: park.lat, lng: park.lng }}
								onClick={this.onClickMarker}
								aria-label="Open Place Details Modal"
								animation={
									this.state.selectedPlace === park.placeId
										? google.maps.Animation.BOUNCE
										: null
								}
							/>
						))}
				</Map>
			</main>
		);
	}
}

const mapStateToProps = state => ({
	parks: state.parks,
	list: state.list,
});

const mapDispatchToProps = dispatch => ({
	fetchParks: () => dispatch(fetchParks()),
	fetchPlaceDetails: (google, map, placeID) => dispatch(fetchPlaceDetails(google, map, placeID)),
});

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GMAP_KEY,
	LoadingContainer: Spinner,
})(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(MapContainer)
);
