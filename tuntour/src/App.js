import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Tunisia from "@svg-maps/tunisia";
import { SVGMap } from "react-svg-map";
import { RadioSVGMap } from "react-svg-map";

import "react-svg-map/lib/index.css";

import { getLocationName } from './utils';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pointedLocation: null,
			focusedLocation: null,
			selectedLocation: null
		};

		this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationFocus = this.handleLocationFocus.bind(this);
		this.handleLocationBlur = this.handleLocationBlur.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
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

  
	render() {
		return (
			<article className="examples__block">
				<h2 className="examples__block__title">
					Tunisia SVG map as radio buttons
				</h2>
				<div className="examples__block__info">
					<div className="examples__block__info__item">
						Pointed location: {this.state.pointedLocation}
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
						onChange={this.handleOnChange} />
				</div>
			</article>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
