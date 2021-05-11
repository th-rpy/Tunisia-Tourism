import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Tunisia from "@svg-maps/tunisia";
import { SVGMap } from "react-svg-map";
import { RadioSVGMap } from "react-svg-map";
import 'bulma/css/bulma.css'

import {Button, Icon} from 'react-materialize'
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";


import "react-svg-map/lib/index.css";

import { getLocationName } from './utils';
import NavBar from "./NavBar"
import CardPanel from "./CardPanel"


export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pointedLocation: null,
			focusedLocation: null,
			selectedLocation: null,
      contextMenuLocation: '',
      x:0,
      y: 0,
      tooltipStyle: {
				display: 'none'
			}
		};

		this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationFocus = this.handleLocationFocus.bind(this);
		this.handleLocationBlur = this.handleLocationBlur.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
    this._onMouseMove=this._onMouseMove.bind(this)
    this.handleLocationMouseMove = this.handleLocationMouseMove.bind(this);

	}

  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

	handleLocationMouseOver(event) {
		const pointedLocation = getLocationName(event);
		this.setState({ pointedLocation: pointedLocation });
	}

	handleLocationMouseOut() {
		this.setState({ pointedLocation: null });
	}

	handleLocationFocus(event) {
		const focusedLocation = getLocationName(event);
		this.setState({ focusedLocation: focusedLocation });
	}

	handleLocationBlur() {
		this.setState({ focusedLocation: null });
	}

	handleOnChange(selectedNode) {
		this.setState(prevState => {
			return {
				...prevState,
				selectedLocation: selectedNode.attributes.name.value
			};
		});
	}
  handleLocationMouseMove(event) {
		const tooltipStyle = {
			display: 'block',
			top: event.clientY ,
			left: event.clientX 
		};
		this.setState({ tooltipStyle });
	}
  getLocationClassName(location, index) {
		// Generate random heat map
		return `svg-map__location svg-map__location--heat${index % 4}`;
	}
	render() {
    var location = this.state.contextMenuLocation;
        var contentMenuStyle = {
            display:'block' ,
            position: 'absolute', 
            left: this.state.x  ,
            top: this.state.y 
        };
		return (
			<article className="examples__block" onMouseMove={this._onMouseMove}>
       <NavBar></NavBar>
				<h2 className="title" style={{height:'10px', textAlign: 'center'}}>
					Tunisia SVG Interactive Map 
				</h2>
				<div className="examples__block__info">
					<div className="examples__block__info__item" style = {contentMenuStyle}>
            {this.state.pointedLocation?<CardPanel name = {this.state.pointedLocation} clickHandler = {this.handleLocationFocus}></CardPanel>:null}
					</div>
					<div className="examples__block__info__item">
						Focused location: {this.state.focusedLocation}
					</div>
					<div className="examples__block__info__item">
						Selected location: {this.state.selectedLocation}
					</div>
				</div>
				<div className="examples__block__map examples__block__map--australia">
					<SVGMap
						map={Tunisia}
						onLocationMouseOver={this.handleLocationMouseOver}
						onLocationMouseOut={this.handleLocationMouseOut}
						onLocationFocus={this.handleLocationFocus}
						onLocationBlur={this.handleLocationBlur}
						onChange={this.handleOnChange} 
            onLocationMouseMove={this.handleLocationMouseMove} />
            
				</div>
			</article>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));