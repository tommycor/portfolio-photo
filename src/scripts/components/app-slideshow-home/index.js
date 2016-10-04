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

	methods: {
		mouseMove: function( event ) {
			this.mousePos.x = event.pageX;
			this.mousePos.y = event.pageY;
		}
	}

});