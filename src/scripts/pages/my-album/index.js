import Vue from 'vue';

Vue.component('my-album', {

	template: require('./template'),

	props: {
		datas: {type: Array, default: [] }
	},

});