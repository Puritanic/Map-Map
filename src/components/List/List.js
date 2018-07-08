import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { closeList } from '../../actions/list';
import { fetchPlaceDetails } from '../../actions/parks';
import ListItem from './ListItem';
import CloseIcon from '../Common/CloseIcon';

class List extends Component {
	componentDidMount = () => {
		document.addEventListener('keydown', this.closePortalOnEsc);
	};

	componentWillUnmount = () => {
		document.removeEventListener('keydown', this.closePortalOnEsc);
	};

	closePortalOnEnter = e => {
		if (e.which === 13) {
			this.props.closeList();
		}
	};

	closePortalOnEsc = e => {
		if (e.which === 27) {
			this.props.closeList();
		}
	};

	render() {
		const sortedPlaces = this.props.places.sort((a, b) => a.name.localeCompare(b.name));

		const fetchDetails = id => {
			this.props.fetchPlaceDetails(this.props.google, this.props.map, id);
			this.props.showPlace(id);
		};

		return (
			<ul className="list">
				<a
					onClick={this.props.closeList}
					onKeyDown={this.closePortalOnEnter}
					aria-label="Close Modal"
					id="closePlaceBtn"
					tabIndex="0"
				>
					<CloseIcon
						size={25}
						styles="closeIco closeIco--left"
						aria-label="Close Modal"
						aria-labelledby="close-modal"
					/>
				</a>
				{sortedPlaces &&
					sortedPlaces.map(place => {
						return (
							<ListItem
								place={place}
								onClick={this.props.closeCallback}
								key={place.placeId}
								handleClick={fetchDetails}
							/>
						);
					})}
			</ul>
		);
	}
}

List.propTypes = {
	onClick: PropTypes.func,
	places: PropTypes.arrayOf(PropTypes.object),
	closeList: PropTypes.func,
	fetchPlaceDetails: PropTypes.func,
	showPlace: PropTypes.func,
	google: PropTypes.shape({}),
	map: PropTypes.shape({}),
	closeCallback: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
	closeList: () => dispatch(closeList()),
	fetchPlaceDetails: (google, map, placeId) => dispatch(fetchPlaceDetails(google, map, placeId)),
});

export default connect(
	null,
	mapDispatchToProps
)(List);
