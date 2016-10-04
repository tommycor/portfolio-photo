import Vue from 'vue';

new Vue({
	el: '#my-app',
	data: function() {
		return {
			routes: {
				"/": {
					"componentId": "page-home",
					"dataUrl": "./wp-json/api/pages/api-home",
					"pageColor":"#74c8ea",
					"pageIndex": 0
				},
				"/home": {
					"componentId": "page-home",
					"dataUrl": "./wp-json/api/pages/api-home",
					"pageColor":"#74c8ea",
					"pageIndex": 0
				 
				},
				"/:slug": {
					"componentId": "page-careers",
					"dataUrl": "./wp-json/api/jobs/",
					"pageColor":"#74c8ea",
					"pageIndex": 7
				},
				"/404": {
					"componentId": "page-404",
					"dataUrl": "./wp-content/themes/tenAdams-theme/assets/data/404.json",
					"pageColor": "linear-gradient(to bottom, #f78714, #f3751b)"
				}
			},
			albums: [{
					key: 1,
					picture: './assets/medias/TEMP/01.jpg',
					title: 'By the ocean'
				},{
					key: 2,
					picture: './assets/medias/TEMP/02.jpg',
					title: 'Dolorem ipsum sit amet'
				},{
					key: 3,
					picture: './assets/medias/TEMP/03.jpg',
					title: "Malo's days"
				},{
					key: 3,
					picture: './assets/medias/TEMP/04.jpg',
					title: 'Day dreaming'
				}
			]
		};
	},
	ready() {
		window.addEventListener('resize', ()=> {
			this.$emit('resize');
		});
	},
	beforeDestroy() {
		window.removeEventListener('resize');
	}
});