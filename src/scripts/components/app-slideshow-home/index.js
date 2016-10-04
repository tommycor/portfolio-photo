import Vue from 'vue';

import slideshow from '../../mixins/slideshow';

Vue.component('app-slideshow-home', {

	template: require('./template'),

	mixins: [slideshow],

	data: function(){
	    return {
	        mousePos: {
				x: window.innerWidth * .5,
				y: window.innerHeight * .5,
			}
	    };
	},

	ready() {
	    this.update();
	},

	methods: {
		mouseMove: function( event ) {
			this.mousePos.x = event.pageX;
			this.mousePos.y = event.pageY;
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
	}

});