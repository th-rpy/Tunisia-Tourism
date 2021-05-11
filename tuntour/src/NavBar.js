import React from "react";

import {Button, Icon} from 'react-materialize'
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Tunisia</a>
              <ul className="right hide-on-med-and-down">
              <li><a className="waves-effect waves-light btn">Login</a></li>
        
                <li><a href="#"><i className="material-icons">search</i></a></li>
                <li><a href="#"><i className="material-icons">view_module</i></a></li>
                <li><a href="#"><i className="material-icons">refresh</i></a></li>
                <li><a href="#"><i className="material-icons">more_vert</i></a></li>
              </ul>
            </div>
          </nav>
         );
    }
}
 
export default NavBar;