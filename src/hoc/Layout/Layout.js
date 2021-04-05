import React, { Component } from "react";

import Aux from "../Aux/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
// import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const env_type = process.env.REACT_APP_HOST_ENV;
const api_key = process.env.REACT_APP_SECRET_CODE;
class Layout extends Component {
  render() {
    console.log(env_type, api_key);
    return (
      <Aux>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
