import React from "react";
import Tunisia from "@svg-maps/tunisia";
import { SVGMap } from "react-svg-map";
import { Link } from "react-router-dom";
import { getLocationName } from "./utils";
import NavBar from "./NavBar";
import CardPanel from "./CardPanel";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bulma/css/bulma.css";

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

      dataState: "",

      modal: false,
    };

    this.handleClick = this.handleClick.bind(this);

    this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
    this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
    this.handleLocationFocus = this.handleLocationFocus.bind(this);
    this.handleLocationBlur = this.handleLocationBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this.handleLocationMouseMove = this.handleLocationMouseMove.bind(this);
  }

  handleClick() {
    this.setState({
      modal: !this.state.modal,
      dataState: this.state.focusedLocation,
      focusedLocation: null,
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
    this.setState({
      modal: !this.state.modal,
      focusedLocation: focusedLocation,
      dataState: focusedLocation,
    });
  }

  handleLocationBlur() {
    const { modal } = this.state;
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
            style={{ height: "20px", textAlign: "center", fontSize: "20px" }}
          >
            <strong>Tunisia SVG Interactive Map</strong>
          </h1>
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
          {this.state.modal ? (
            <Modal isOpen={this.state.modal}>
              <ModalHeader>
                {" "}
                Hello There! You are Welcome in {this.state.dataState}{" "}
              </ModalHeader>
              <ModalBody>
                <hr></hr>
                <hr></hr>
                <h4> Welcome Guys </h4>
                <p>
                  If you’re looking for amazing scenery, beautiful beaches and a
                  dose of sunshine, then you’ll love Tunisia. But if you’d also
                  like to add in a dash of fascinating history and delicious
                  food, all at a reasonable cost, then Tunisia’s coast is,
                  without doubt, the place for you. Hop in that rental car and
                  follow this guide to squeeze in some of the best things to do
                  in Tunisia in just a few days. !
                </p>
                <strong>Woohoo, you're reading to visit us</strong>
                <br></br>
                <br></br>
              </ModalBody>
              <ModalFooter>
                <Link to="/goodbye">
                  <button
                    className="button is-success"
                    style={{ position: "absolute", top: "90%", right: "40%" }}
                  >
                    Visit {this.state.dataState}
                  </button>
                </Link>

                <button
                  onClick={this.handleClick}
                  className="button"
                  style={{ position: "absolute", top: "10px", right: "0px" }}
                >
                  Close
                </button>
              </ModalFooter>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
