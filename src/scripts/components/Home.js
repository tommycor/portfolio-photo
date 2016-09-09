import React from 'react';

import SlideshowHome from './SlideshowHome';

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
				}
			]
		};
	},

	render: function() {
		return (
			<div className="u-fit u-bg--black">
				<div className="c-net u-fit-w u-absolute u-pos-y-center u-bg--white"></div>
				<SlideshowHome changeSlide={this.changeCurrentIndex} slides={this.state.albums}/>
			</div>
		);
	},
});

module.exports = Home;