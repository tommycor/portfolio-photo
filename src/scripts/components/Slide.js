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
	        register: function(){},
	        deleter: function(){},
	        index: -1
	    };
	},

	componentWillMount() {
		if( this.props.index >= 0 ) {
			this.setState({ index: this.props.register(this.props.index) });
		}
	},

	componentWillUnmount() {
		this.props.deleter( this.state.index )
	},



	render: function() {
		return(
			<h2 className="t-h2 u-color--white">MWELLOW | {this.props.index}</h2>
		);
	},
});

module.exports = Slide;