import React from 'react';

import Slide from './Slide';

var SlideShow = React.createClass({

	getInitialState() {
		return {
			currentIndex: 0
		};
	},

	getDefaultProps() {
		return {
			slides: [],
		};
	},

	componentWillMount() {
		this.nbrSlides = 0;
	},


	registerSlide( index ) {
		if( index != void 0 ) {
			this.nbrSlides++;
		}
	},

	deleterSlide( index ) {
		console.log('unmount slide')
		this.nbrSlides--;
	},


	onNext() {
		this.setState({
			currentIndex: (this.nbrSlides-1) - this.state.currentIndex <= 0 ? 0 : ++this.state.currentIndex
		})

	},

	onPrev() {
		this.setState({
			currentIndex: this.state.currentIndex == 0 ? (this.nbrSlides-1) : --this.state.currentIndex
		})
	},

	render: function() {
		return (
			<div className="u-fit" onClick={this.onPrev}>
				{this.props.slides.map( (item, i) => {
					if( i == 2 )
						return(
							<Slide status={ i<this.state.currentIndex ? 'prev' : i>this.state.currentIndex ? 'next' : 'current' } key={i} index={i} register={this.registerSlide} deleter={this.deleterSlide} content={item} />
						);
					else
						return;
				})}
			</div>
			// this.props.slides.map( slide => <slide slide={slide} />)
		);
	},
});

module.exports = SlideShow;