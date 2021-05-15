import React from "react";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { States } from "./imagesState";

class CardPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <span className="card-header-title">
            <i className="material-icons">place</i>{" "}
            {"State : " +
              this.props.name +
              " (🙋‍♂️ " +
              States[this.props.name] +
              "K ) "}
          </span>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon"> 🚀 </span>
          </button>
        </header>
      </div>
    );
  }
}

export default CardPanel;
