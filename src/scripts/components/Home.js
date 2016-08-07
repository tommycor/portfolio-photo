import React from 'react';

import Slideshow from './Slideshow';

var Home = React.createClass({

	getInitialState() {
		return {
			albums: [{
					key: 1,
					picture: './assets/medias/TEMP/01.jpg',
					title: 'By the ocean'
				},{
					key: 2,
					picture: './assets/medias/TEMP/02.jpg',
					title: 'Dolorem ipsum sit amet'
				},{
					key: 3,
					picture: './assets/medias/TEMP/03.jpg',
					title: "Malo's days"
				},{
					key: 3,
					picture: './assets/medias/TEMP/04.jpg',
					title: 'Day dreaming'
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