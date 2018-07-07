import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import PlaceDetails from '../Place/PlaceDetails';
import Portal from '../Portal/Portal';
import List from '../List/List';

import { fetchParks, fetchPlaceDetails } from '../../actions/parks';

export class MapContainer extends React.Component {
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
	};

	componentDidMount = () => {
		this.props.fetchParks();
	};

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log(nextProps);
	// }

	onClickMarker = (props, marker, e) => {
		const { google, map, placeID } = props;
		this.props.fetchPlaceDetails(google, map, placeID);
		this.setState({ isPortalVisible: true });
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
						<PlaceDetails
							place={this.props.parks.place}
							closeCallback={this.closePortal}
							isLoading={this.props.parks.isPlaceLoading}
						/>
					</Portal>
				)}
				{this.props.list.isListOpen && (
					<Portal>
						<List places={this.props.parks.data} closeCallback={this.closePortal} />
					</Portal>
				)}
				<Map
					google={google}
					zoom={6}
					style={style}
					className="wrapper"
					initialCenter={somewhereInWyoming}
				>
					{this.props.parks.data &&
						this.props.parks.data.map(park => (
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
	parks: state.parks,
	list: state.list,
});

const mapDispatchToProps = dispatch => ({
	fetchParks: () => dispatch(fetchParks()),
	fetchPlaceDetails: (google, map, placeID) => dispatch(fetchPlaceDetails(google, map, placeID)),
});

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GMAP_KEY,
})(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(MapContainer)
);
