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
				y: window.innerHeight * .5
			}
		};
	},
	getDefaultProps() {
		return {
			content: {},
			mousePos: {
				x: window.innerWidth * .5,
				y: window.innerHeight * .5
			}
		};
	},

	componentWillMount() {
	    this.picture = null;
	    this.rot = {x: 0, y: 0};
	    this.currentRot = {x: 0, y: 0};
	    this.pos = {x: 0, y: 0};
	    this.currentPos = {x: 0, y: 0};
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

		let maxR = .0000005;

		this.rot.x = -maxR * distX * dist ;
		this.rot.y = maxR * distY * dist ;

		this.currentRot.x += ( this.rot.x - this.currentRot.x) * .05;
		this.currentRot.y += ( this.rot.y - this.currentRot.y) * .05;

		this.pos.x = -distX * .03;
		this.pos.y = -distY * .03;

		this.currentPos.x += ( this.pos.x - this.currentPos.x) * 0.05;
		this.currentPos.y += ( this.pos.y - this.currentPos.y) * 0.05;

		this.picture.style.transform = 'rotateX('+this.currentRot.y+'rad) rotateY('+this.currentRot.x+'rad) translateX('+this.currentPos.x+'px) translateY('+this.currentPos.y+'px) translateZ(0)';

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
				<div className="c-slide__wrapper u-force-3d u-fit-w u-inline-block u-valign-middle" ref={ (c)=>{ this.picture = c ; } }>
					<div className="c-slide__img__container u-overflow-h u-fit">
						<div className="c-slide__img u-fit u-overflow-h u-valign-middle u-relative u-inline-block" >
							<img src={this.props.content.picture} className="u-block u-absolute u-pos-y-center u-fit-w"/>
						</div>
					</div>
				</div>
			</div>
		);
	},
});

module.exports = SlidePicture;