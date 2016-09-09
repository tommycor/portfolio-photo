import React from 'react';
import classNames from 'classnames';

import Slide from '../mixins/Slide';

var SlideDatas = React.createClass({

	mixins: [Slide],

	getDefaultProps() {
		return {
			content: {},
		};
	},

	render: function() {
		let classState = classNames({
			'is-current' : this.props.status == 'current',
			'is-prev' : this.props.status == 'prev',
			'is-next' : this.props.status == 'next' 
		});

		return (
			<div className={'c-slide-titles__container u-alig-left o-wrapper--panel u-fit-w u-pad-a-sm | '+ classState}> 
				<h2 className="t-h3 u-italic u-color--white">{this.props.content.title}</h2>
			</div>
		);
	},
});

module.exports = SlideDatas;

				// <div className="u-w1of10 u-relative u-inline-block u-valign-top u-fit-h">
				// 	<div className="o-wrapper--valign u-fit-half-h u-absolute u-pos-bl u-block u-fit-w">
				// 		<div className="u-valign-top u-align-left u-marg-l-xs">
				// 			<h2 className="t-h3 u-italic u-color--white">{this.props.content.title}</h2>
				// 		</div>
				// 	</div>
				// </div>