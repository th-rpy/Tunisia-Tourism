import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { RadioSVGMap } from "react-svg-map";
import "bulma/css/bulma.css";

import { Icon } from "react-materialize";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import "react-svg-map/lib/index.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Map from "./Map";
import Test from "./Test";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Route exact path="/" component={Map} />
        <Route path="/goodbye" component={Test} />
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
