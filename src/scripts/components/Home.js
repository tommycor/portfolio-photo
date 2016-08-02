import React from 'react';

import Slideshow from './Slideshow';

var Home = React.createClass({

	getInitialState() {
		return {
			albums: [{
					key: 1,
					picture: 'blabla',
					title: 'By the ocean'
				},{
					key: 2,
					picture: 'blabla',
					title: 'By the ocean'
				},{
					key: 3,
					picture: 'blabla',
					title: 'By the ocean'
				}],
			test:"blabla"
		};
	},

	render: function() {
		return (
			<div className="u-fit u-bg--black">
				<Slideshow className="u-w10of12 u-marg-l-w1of12" slides={this.state.albums}/>
			</div>
		);
	},
});

module.exports = Home;