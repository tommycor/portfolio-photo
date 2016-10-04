var Slide = {
	getDefaultProps: function() {
		return {
			index: -1,
			status: -1,
			register: function(){},
			deleter: function(){}
		};
	},
	componentWillMount: function() {
		this.props.register(this.props.index);
	},
	componentWillUnmount: function() {
		this.props.deleter( this.props.index );
	},
};

module.exports = Slide;