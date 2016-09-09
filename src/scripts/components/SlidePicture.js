import React from 'react';
import classNames from 'classnames';

import Slide from '../mixins/Slide';

var SlidePicture = React.createClass({

	mixins: [Slide],

	getInitialState() {
		return {
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
			winCenter: {
				x: window.innerWidth * .5,
				y: window.innerHeight * .5,
			}
		};
	},
	getDefaultProps() {
		return {
			content: {},
			mousePos: {x: 0, y: 0}
		};
	},

	componentWillMount() {
	    this.picture = null;  
	    this.rot = {x: 0, y: 0};
	    this.currentRot = {x: 0, y: 0};
	},
	componentDidMount: function() {
		window.addEventListener('resize', this.handleResize);

		this.update();
	},

	componentWillUnmount: function() {
		window.removeEventListener('resize', this.handleResize);
	},
	handleResize: function( event ) {
		console.log('resize');
		this.setState({
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
			winCenter: {
				x: window.innerWidth * .5,
				y: window.innerHeight * .5,
			}			
		});
	},

	update: function() {

		let distX = this.props.mousePos.x - this.state.winCenter.x;
		let distY = this.props.mousePos.y - this.state.winCenter.y;
		let dist = Math.sqrt(distX * distX + distY * distY);

		let maxR = .000001;

		this.rot.x = -maxR * distX * dist ;
		this.rot.y = maxR * distY * dist ;

		this.currentRot.x += ( this.rot.x - this.currentRot.x) * 0.1;
		this.currentRot.y += ( this.rot.y - this.currentRot.y) * 0.1;

		this.picture.style.transform = 'rotateX('+this.currentRot.y+'rad) rotateY('+this.currentRot.x+'rad) translateZ(0)';

		requestAnimationFrame( this.update );
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
						<img src={this.props.content.picture} ref={ (c)=>{ this.picture = c ; } } className="u-block u-fit-w"/>
					</div>
				</div>
			</div>
		);
	},
});

module.exports = SlidePicture;