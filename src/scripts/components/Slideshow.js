import React from 'react';

import Slide from './Slide';

var SlideShow = React.createClass({

	getInitialState() {
	    return {  
	        registeredSlides: []
	    };
	},

	getDefaultProps() {
	    return {
	        slides: [],
	    };
	},

	componentWillMount() {
		this.registeredSlides = [];
	},

	registerSlide( key ) {
		if( key != void 0 ) {
			let index = this.registeredSlides.push( key ) - 1;

			return index;
		}
	},

	deleterSlide( index ) {
		if( index != void 0 ) {
			this.registeredSlides.splice(index, 1);
		}
	},

	render: function() {
		return (
			<div>
				{this.props.slides.map( (item, i) => {
					return(
						<Slide key={i} index={i} register={this.registerSlide} deleter={this.deleterSlide} content={item} />
					);
				})}
			</div>
			// this.props.slides.map( slide => <slide slide={slide} />)
		);
	},
});

module.exports = SlideShow;