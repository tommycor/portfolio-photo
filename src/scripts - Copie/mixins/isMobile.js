var isMobile = {
	getDefaultProps: function() {
		return {
			isMobile: (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (window.innerWidth < 768))
		};
	},
};

module.exports = isMobile;