import React from 'react';

import SlidePicture from './SlidePicture';
import SlideDatas from './SlideDatas';
import Slideshow from '../mixins/Slideshow';

var SlideshowHome = React.createClass({

	mixins: [Slideshow],

	render: function() {
		return (
			<div className="u-fit u-block u-relative u-vacuum">
				<div className="o-wrapper--valign u-fit-h u-w2of12 u-inline-block">
					{this.props.slides.map( (item, i) => {
						let status = i < this.state.currentIndex ? 'prev' : i > this.state.currentIndex ? 'next' : 'current';
						return(
							<SlideDatas status={ status } key={i} content={item} />
						);
					})}
				</div>
				<div className="c-SlideshowHome u-fit-h u-relative u-w8of12 u-inline-block" onClick={this.onNext}>
					{this.props.slides.map( (item, i) => {
						let status = i < this.state.currentIndex ? 'prev' : i > this.state.currentIndex ? 'next' : 'current';
						return(
							<SlidePicture status={ status } key={i} index={i} register={this.registerSlide} deleter={this.deleterSlide} content={item} />
						);
					})}
				</div>
			</div>
		);
	},
});

module.exports = SlideshowHome;