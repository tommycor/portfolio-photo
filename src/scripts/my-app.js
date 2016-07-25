import React from 'react';
import ReactDOM from 'react-dom';

var MyApp = React.createClass({
	render: function() {
		return (
			<h1>Tomplop</h1>
		);
	}
});



ReactDOM.render(
	<MyApp />,
	document.getElementById('my-app')
);