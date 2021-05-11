import React from "react";

import { Button, Icon } from "react-materialize";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

const States = {
  "Tunis 1": 1056,
  "Tunis 2": 1056,
  "Sfax 1": 955,
  "Sfax 2": 955,
  "Nabeul 1": 787,
  "Nabeul 2": 787,
  'Sousse': 675,
  "Ben Arous": 631,
  'Ariana': 576,
  'Kairouan': 570,
  'Bizerte': 568,
  'Monastir': 548,
  'Mednine': 479,
  'Kasserine': 439,
  "Sidi Bouzid": 429,
  'Mahdia': 410,
  'Jendouba': 401,
  'Manouba': 379,
  'Gabès': 374,
  'Gafsa': 337,
  'Beja': 303,
  'Kef': 243,
  'Siliana': 223,
  'Zaghouan': 176,
  'Kebili': 157,
  'Tataouine': 149,
  'Tozeur': 107,
};

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
          <i className="material-icons">place</i> {"State : " +
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
