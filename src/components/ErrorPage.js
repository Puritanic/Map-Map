import React from 'react';

const ErrorPage = () => {
	return (
		<div className="error">
			<h1>Something is wrong.</h1>
			<p>
				Google Maps API failed to load, please check your connection or try to reload page.
			</p>
		</div>
	);
};

export default ErrorPage;
