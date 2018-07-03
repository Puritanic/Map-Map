import React from 'react';

const RatingIcon = props => <span>★</span>;

export default class Rating extends React.Component {
	render() {
		const { percentage } = this.props;
		const style = {
			width: `${(percentage || 0) * 100}%`,
		};
		return (
			<div className="rating__sprite">
				<div className="rating__top" style={style}>
					<RatingIcon />
					<RatingIcon />
					<RatingIcon />
					<RatingIcon />
					<RatingIcon />
				</div>
				<div className="rating__bottom">
					<RatingIcon />
					<RatingIcon />
					<RatingIcon />
					<RatingIcon />
					<RatingIcon />
				</div>
			</div>
		);
	}
}
