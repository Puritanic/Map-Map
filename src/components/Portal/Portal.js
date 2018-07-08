import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
	};

	constructor(props) {
		super(props);
		this.el = document.createElement('aside');
		this.el.setAttribute('aria-modal', 'true');
		this.el.setAttribute('role', 'Article');
		// We do not want this to be ordered in the "sequential focus navigation" as we will be handling this ourselves using JavaScript.
		this.body = document.getElementsByTagName('body')[0];
		this.html = document.getElementsByTagName('html')[0];
	}

	componentDidMount() {
		portalRoot.appendChild(this.el);
		this.html.style.position = 'static';
	}

	componentWillUnmount() {
		portalRoot.removeChild(this.el);
	}

	getApplicationNode = () => document.getElementById('root');

	render() {
		const { children } = this.props;

		return ReactDOM.createPortal(
			<AriaModal
				titleText="Modal"
				focusDialog={true}
				getApplicationNode={this.getApplicationNode}
				underlayStyle={{ paddingTop: '2em' }}
			>
				{children}
			</AriaModal>,
			this.el
		);
	}
}
