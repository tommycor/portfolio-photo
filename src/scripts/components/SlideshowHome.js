import React from 'react';

import SlidePicture from './SlidePicture';
import SlideDatas from './SlideDatas';
import Slideshow from '../mixins/Slideshow';

var SlideshowHome = React.createClass({

	mixins: [Slideshow],

	getInitialState() {
	    return {
	        mousePos: {
				x: window.innerWidth * .5,
				y: window.innerHeight * .5,
			}
	    };
	},
	componentDidMount() {
	    this.update();  
	},

	mouseMove: function( event ) {
		this.setState({
			mousePos: {
				x: event.pageX,
				y: event.pageY
			}
		});
	},

	update: function() {
		// this.setState({
		// 	mousePos: {
		// 		x: this.state.mousePos.x + (this.mousePos.x - this.state.mousePos.x) * 0.3,
		// 		y: this.state.mousePos.y + (this.mousePos.y - this.state.mousePos.y) * 0.3
		// 	}
		// });

		requestAnimationFrame( this.update );
	},

	render: function() {
		return (
			<div className="u-fit u-block u-relative u-vacuum" onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} onMouseMove={this.mouseMove} >
				<div className="o-wrapper--valign u-fit-h u-w2of12 u-inline-block">
					{this.props.slides.map( (item, i) => {
						let status = i < this.state.currentIndex ? 'prev' : i > this.state.currentIndex ? 'next' : 'current';
						return(
							<SlideDatas status={ status } key={i} content={item} />
						);
					})}
				</div>
				<div className="c-SlideshowHome u-fit-h u-relative u-w8of12 u-inline-block">
					{this.props.slides.map( (item, i) => {
						let status = i < this.state.currentIndex ? 'prev' : i > this.state.currentIndex ? 'next' : 'current';
						return(
							<SlidePicture status={ status } mousePos={this.state.mousePos} key={i} index={i} register={this.registerSlide} deleter={this.deleterSlide} content={item} mousePos={this.state.mousePos} />
						);
					})}
				</div>
			</div>
		);
	},
});

module.exports = SlideshowHome;