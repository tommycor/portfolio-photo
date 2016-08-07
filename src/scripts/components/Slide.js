import React from 'react';

var Slide = React.createClass({

	getInitialState() {
		return {
			index: 0  
		};
	},

	getDefaultProps() {
		return {
			content: {},
			index: -1,
			status: -1,
			register: function(){},
			deleter: function(){},
		};
	},

	componentWillMount() {
		this.props.register(this.props.index);
	},

	componentWillUnmount() {
		this.props.deleter( this.state.index )
	},

	render: function() {
		this.currentClass = 't-h2 u-color--white u-inline-block '+ (this.props.status == 'current' ? 'u-bg--white' : '');
		return(
			<div className="u-fit u-vacuum">
				<div className="u-w1of10 u-relative u-inline-block u-valign-top u-fit-h">
					<div className="o-wrapper--valign u-fit-half-h u-absolute u-pos-bl u-block u-fit-w">
						<div className="u-valign-top">
							<h2 className="t-h2 u-color--white">{this.props.content.title}</h2>
						</div>
					</div>
				</div>
				<div className="o-wrapper--valign u-w8of10 u-align-center u-fit-h u-valign-top u-inline-block">
					<img src={this.props.content.picture} className="c-gallery-picture u-inline-block u-fit-w u-valign-middle" />
				</div>
			</div>
		);
	},
});

module.exports = Slide;