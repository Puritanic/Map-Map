import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filerParkData } from '../../actions/parks';

class Filter extends React.Component {
	static propTypes = {
		filterData: PropTypes.func,
		placeholder: PropTypes.string,
	};

	state = {
		inputVal: '',
	};

	onChange = e => {
		const { value } = e.target;
		return this.setState({ inputVal: value }, () => this.props.filterData(value));
	};

	render() {
		return (
			<div className="filter">
				<input
					type="text"
					value={this.state.inputVal}
					placeholder={this.props.placeholder}
					onChange={this.onChange}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	filterData: val => dispatch(filerParkData(val)),
});

export default connect(
	null,
	mapDispatchToProps
)(Filter);
