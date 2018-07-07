import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { closeList } from '../../actions/list';
import ListItem from './ListItem';
import CloseIcon from '../Common/CloseIcon';

const List = props => {
	return (
		<div className="list">
			<div onClick={props.closeList}>
				<CloseIcon size={25} styles="closeIco closeIco--left" />
			</div>
			{props.places.map(place => {
				return <ListItem place={place} onClick={props.onClick} key={place.placeId} />;
			})}
		</div>
	);
};

List.propTypes = {
	onClick: PropTypes.func,
	places: PropTypes.arrayOf(PropTypes.object),
};

const mapDispatchToProps = dispatch => ({
	closeList: () => dispatch(closeList()),
});

export default connect(
	null,
	mapDispatchToProps
)(List);
