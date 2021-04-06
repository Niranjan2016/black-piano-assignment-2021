import React, { Component } from "react";
import Search from "../../Components/Search/Search";
// import classes from "./SearchContainer.module.css";
import Aux from "../../hoc/Aux/Aux";

class SearchContainer extends Component {
  render() {
    return (
      <Aux>
        <Search></Search>
      </Aux>
    );
  }
}
export default SearchContainer;
