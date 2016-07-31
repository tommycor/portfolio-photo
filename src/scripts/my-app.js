import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
// import page from 'page';

import Home from './components/Home';

// var MyApp = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
				
// 			</div>
// 		);
// 	}
// });



ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
	</Router>
	),document.getElementById('my-app')
);