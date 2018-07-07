import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import PlaceDetails from '../Place/PlaceDetails';
import Portal from '../Portal/Portal';
import List from '../List/List';

import { fetchParks } from '../../actions/parks';

export class MapContainer extends React.Component {
	static propTypes = {
		fetchParks: PropTypes.func,
		google: PropTypes.shape({}),
		map: PropTypes.shape({}),
		placeID: PropTypes.string,
		parks: PropTypes.arrayOf(PropTypes.object),
	};

	state = {
		place: {},
		isPortalVisible: false,
		isListVisible: false,
	};

	componentDidMount = () => {
		this.props.fetchParks();
	};

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log(nextProps);
	// }

	onClickMarker = (props, marker, e) => {
		const { google, map, placeID } = props;

		let service = new google.maps.places.PlacesService(map);
		return service.getDetails(
			{
				placeId: placeID,
			},
			(place, status) => {
				this.setState({ place, isPortalVisible: true });
			}
		);
	};

	closePortal = () => this.setState({ isPortalVisible: false });

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
			<React.Fragment>
				{this.state.isPortalVisible && (
					<Portal>
						<PlaceDetails place={this.state.place} closeCallback={this.closePortal} />
					</Portal>
				)}
				{this.state.isPortalVisible && (
					<Portal>
						<List places={this.props.parks} closeCallback={this.closePortal} />
					</Portal>
				)}
				<Map
					google={google}
					zoom={6}
					style={style}
					className="wrapper"
					initialCenter={somewhereInWyoming}
				>
					{this.props.parks &&
						this.props.parks.map(park => (
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

const mapStateToProps = state => ({
	parks: state.parks.data,
});

const mapDispatchToProps = dispatch => ({
	fetchParks: () => dispatch(fetchParks()),
});

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GMAP_KEY,
})(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(MapContainer)
);
