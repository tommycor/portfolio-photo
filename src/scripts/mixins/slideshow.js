var Slideshow = {
	getInitialState: function() {
		return {
			currentIndex: 0,
		};
	},
	getDefaultProps: function() {
		return {
			slides: [],
			changeSlide: function(){}
		};
	},
	componentWillMount: function() {
		this.nbrSlides = 0;
	},

	registerSlide: function(index) {
		if( index != void 0 ) {
			this.nbrSlides++;
		}
	},
	deleterSlide: function(index) {
		console.log('unmount slide')
		this.nbrSlides--;
	},

	onNext: function() {
		this.setState({
			currentIndex: (this.nbrSlides-1) - this.state.currentIndex <= 0 ? 0 : ++this.state.currentIndex
		});

		this.props.changeSlide( this.state.currentIndex );
	},
	onPrev: function() {
		this.setState({
			currentIndex: this.state.currentIndex == 0 ? (this.nbrSlides-1) : --this.state.currentIndex
		});

		this.props.changeSlide( this.state.currentIndex );
	}
};

module.exports = Slideshow;