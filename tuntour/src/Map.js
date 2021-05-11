import React from "react";
import Tunisia from "@svg-maps/tunisia";
import { SVGMap } from "react-svg-map";
import { Link } from "react-router-dom";
import { getLocationName } from "./utils";
import NavBar from "./NavBar";
import CardPanel from "./CardPanel";
import ModalComponent from "./Modal";

import Button from "react-bulma-components";

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pointedLocation: null,
      focusedLocation: null,
      selectedLocation: null,
      contextMenuLocation: "",
      x: 0,
      y: 0,
      tooltipStyle: {
        display: "none",
        
      },
  
      modal: false
    };
    this.toggle = this.toggle.bind(this);

    this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
    this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
    this.handleLocationFocus = this.handleLocationFocus.bind(this);
    this.handleLocationBlur = this.handleLocationBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this.handleLocationMouseMove = this.handleLocationMouseMove.bind(this);
  }
  toggle() {
    this.setState({
      modal: true
    });
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
    const { modal } = this.state;
    const focusedLocation = getLocationName(event);
    this.setState({ focusedLocation: focusedLocation, modal: !modal });

  }

  handleLocationBlur() {
    this.setState({ focusedLocation: null });
  }

  handleOnChange(selectedNode) {
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedLocation: selectedNode.attributes.name.value,
      };
    });
  }
  handleLocationMouseMove(event) {
    const tooltipStyle = {
      display: "block",
      top: event.clientY,
      left: event.clientX - 150,
    };
    this.setState({ tooltipStyle });
  }
  getLocationClassName(location, index) {
    // Generate random heat map
    return `svg-map__location svg-map__location--heat${index % 4}`;
  }
  render() {
    const { modal } = this.state;
    var location = this.state.contextMenuLocation;
    var contentMenuStyle = {
      display: "block",
      position: "absolute",
      left: this.state.x - 150,
      top: this.state.y - 0,
    };
    return (
      <div style={{ width: "100%" }}>
        <NavBar></NavBar>

        <article
          className="examples__block"
          onMouseMove={this._onMouseMove}
          style={{
            width: "300px",
            height: "300px",
            color: "white",
            align: "center",
            padding: "1em",
            display: "inline-block",
            textDecoration: "none !important",
            position: "absolute",

            zIndex: "50",
            top: "15%",
            left: "50%",
            margin: "-100px 0 0 -150px",
          }}
        >
          <h1
            className="subtitle"
            style={{ height: "10px", textAlign: "center" }}
          >
            <strong>Tunisia SVG Interactive Map</strong>
          </h1>
          <Link to="/goodbye">
            <button>Click here</button>
          </Link>
          <div className="examples__block__info">
            <div
              className="examples__block__info__item"
              style={contentMenuStyle}
            >
              {this.state.pointedLocation ? (
                <CardPanel
                  name={this.state.pointedLocation}
                  clickHandler={this.handleLocationFocus}
                ></CardPanel>
              ) : null}
            </div>
            <div
              className="examples__block__info__item"
              style={{ color: "black" }}
            >
              Focused location: {this.state.focusedLocation}
            </div>
            <div
              className="examples__block__info__item"
              style={{ color: "black" }}
            >
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
              onLocationMouseMove={this.handleLocationMouseMove}
            />
           
          </div>
        </article>
        <div>
           
          <ModalComponent modal={modal} toggle={this.toggle}/>
        </div>
      </div>
    );
  }
}
