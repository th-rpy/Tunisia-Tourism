/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Tunisia from "@svg-maps/tunisia";
import { SVGMap } from "react-svg-map";
import { Link } from "react-router-dom";
import { getLocationName } from "./utils";
import NavBar from "./NavBar";
import CardPanel from "./CardPanel";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bulma/css/bulma.css";
import { Heading } from "@chakra-ui/react";
import Footer from "./Footer";

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
    const focusedLocation = getLocationName(event);
    this.setState({
      modal: !this.state.modal,
      focusedLocation: focusedLocation,
      dataState: focusedLocation,
    });
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
    var contentMenuStyle = {
      display: "block",
      position: "absolute",
      left: this.state.x - 150,
      top: this.state.y - 0,
    };
    return (
      <div style={{ width: "100%" }}>
        <NavBar></NavBar>

        <img
          style={{
            width: "200px",
            height: "200px",
            color: "white",
            align: "center",
            padding: "1em",
            display: "inline-block",
            textDecoration: "none !important",
            position: "absolute",

            zIndex: "50",
            top: "50%",
            left: "15%",
            margin: "-100px 0 0 -150px",
          }}
          src="https://www.animatedimages.org/data/media/902/animated-tunisia-flag-image-0012.gif"
          border="0"
          alt="animated-tunisia-flag-image-0012"
        />

        <img
          style={{
            width: "200px",
            height: "200px",
            color: "white",
            align: "center",
            padding: "1em",
            display: "inline-block",
            textDecoration: "none !important",
            position: "absolute",

            zIndex: "50",
            top: "50%",
            right: "4%",
            margin: "-100px 0 0 -150px",
          }}
          src="https://www.animatedimages.org/data/media/851/animated-palestine-flag-image-0005.gif"
          border="0"
          alt="animated-tunisia-flag-image-0012"
        />

        <div
          style={{
            width: "350px",
            height: "150px",
            color: "black",
            align: "center",
            padding: "0em",
            display: "inline-block",
            textDecoration: "none !important",
            position: "absolute",

            zIndex: "50",
            top: "102%",
            right: "38%",
            margin: "-100px 0 0 -150px",
          }}
        >
          {" "}
          <Footer></Footer>{" "}
        </div>

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
          <br></br>

          <Heading
            mb={4}
            as="h4"
            style={{
              color: "black",
              height: "5px",
              textAlign: "center",
              fontSize: "21px",
            }}
          >
            <strong>Tunisia SVG Interactive Map</strong>
          </Heading>
          <br />
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
              <ModalHeader
                style={{ size: "28px", color: "green", width: "100%" }}
              >
                {" "}
                Hello There! You are Welcome in {this.state.dataState} 😍✈
              </ModalHeader>
              <ModalBody>
                <hr></hr>
                <p>
                  It actually Tunisia’s first tourist destination due to its
                  fine beaches and warm waters, which are perfect for water
                  sports.
                </p>
                <img
                  src="https://assets.wego.com/image/upload/v1611848131/country-pages/tn.jpg"
                  alt="cfrfrfr"
                  style={{ width: "700px", height: "275px" }}
                />
                <br></br>
                <strong>Woohoo, you're reading to visit us</strong>
                <br></br>
              </ModalBody>
              <ModalFooter>
                <Link to={{pathname :"/state", state:this.state}}>
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
