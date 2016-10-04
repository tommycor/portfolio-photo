
import isMobile from './isMobile';

var Slideshow = {

	mixins: [isMobile],

	getInitialState: function() {
		return {
			currentIndex: 0,
			isAnimating: false,
		};
	},
	getDefaultProps: function() {
		return {
			slides: [],
			isScrollEnable: true,
			duration: 1700,
			mobileSwipe: 100,
			isFirefox: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
		};
	},
	componentWillMount: function() {
		this.nbrSlides = 0;
		this.mobileDown = false;
		this.mobileDelta = 0;
	},
	componentDidMount: function() {
		if( !this.props.isScrollEnable ) return;

		if( !this.props.isFirefox ) {
			document.addEventListener('mousewheel', this.onMouseWheel);
		}
		else if( this.props.isFirefox ) {
			document.addEventListener('DOMMouseScroll', this.onMouseWheel);
		}
	},
	componentWillUnmount: function() {
		if( !this.props.isScrollEnable ) return;

		if( !this.props.isFirefox ) {
			document.removeEventListener('mousewheel');
		}
		else if( this.props.isFirefox ) {
			document.removeEventListener('DOMMouseScroll');
		}
	},

	onMouseWheel: function(event) {
		event.preventDefault();

		if (this.state.isAnimating) {
			return;
		}
		else {

			let delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

			if (delta > 0) {
				this.onPrev();
			}
			else if (delta < 0) {
				this.onNext();
			}
		}
	},
	onTouchStart: function(event) {
		this.mobileDown = true;
		this.mobileDelta = event.pageY;
	},
	onTouchEnd: function(event) {
		if( !this.mobileDown ) return;

		alert('NEED DEBUG MOBILE')

		this.mobileDelta = event.pageY - this.mobileDelta;

		if( this.mobileDelta > this.props.mobileSwipe ) {
			this.onNext();
		}
		else if( this.mobileDelta < this.props.mobileSwipe ) {
			this.onPrev();
		}
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
			currentIndex: (this.nbrSlides-1) - this.state.currentIndex <= 0 ? 0 : ++this.state.currentIndex,
			isAnimating: true
		});
		setTimeout( ()=>{
			this.setState({
				isAnimating: false
			});
		}, this.props.duration);
	},
	onPrev: function() {
		this.setState({
			currentIndex: this.state.currentIndex == 0 ? (this.nbrSlides-1) : --this.state.currentIndex,
			isAnimating: true
		});
		setTimeout( ()=>{
			this.setState({
				isAnimating: false
			});
		}, this.props.duration);
	},
};

module.exports = Slideshow;