import React from 'react';

const Filter = props => {
	return (
		<div className="filter">
			<input type="text" placeholder={props.placeholder} />
		</div>
	);
};

export default Filter;
