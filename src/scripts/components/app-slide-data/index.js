import Vue from 'vue';

import slide from '../../mixins/slide';

Vue.component('app-slide-data', {

	template: require('./template'),

	mixins: [slide],

	props: {
		content: 	{ type: Object, default: {} },
	},

	// render: function() {
	// 	let classState = classNames({
	// 		'is-current' : this.props.status == 'current',
	// 		'is-prev' : this.props.status == 'prev',
	// 		'is-next' : this.props.status == 'next' 
	// 	});

	// 	return (
	// 		<div className={'c-slide-titles__container u-alig-left o-wrapper--panel u-fit-w u-pad-a-sm | '+ classState}> 
	// 			<h2 className="t-h3 u-italic u-color--white">{this.props.content.title}</h2>
	// 		</div>
	// 	);
	// },
});