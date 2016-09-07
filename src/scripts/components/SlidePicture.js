import React from 'react';
import classNames from 'classnames';

import Slide from '../mixins/Slide';

var SlidePicture = React.createClass({

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

		return(
			<div className={'c-slide o-wrapper--panel o-wrapper--valign u-fit u-vacuum | '+ classState} >
				<div className="c-slide__img__container u-fit-w u-valign-middle u-inline-block">
					<div className="c-slide__img u-block u-fit-w">
						<img src={this.props.content.picture} className="u-block u-fit-w"/>
					</div>
				</div>
			</div>
		);
	},
});

module.exports = SlidePicture;