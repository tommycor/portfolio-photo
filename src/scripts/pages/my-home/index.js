import Vue from 'vue';

Vue.component('my-home', {

	template: require('./template'),

	props: {
		datas: {type: Array, default: [] }
	},

});