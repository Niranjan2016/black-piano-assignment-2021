import React, { Component } from "react";
// import classes from "./MovieList.module.css";
import Aux from "../../hoc/Aux/Aux";
import Button from "../../Components/UI/Button/Button";

class MovieList extends Component {
  state = {
    movieList: [],
    isFetchingData: false,
  };

  fetchMoviesListHandler = () => {
    console.log("Clicked on fetch Movies");
  };

  render() {
    return (
      <Aux>
        <p>
          Here we will be populating the list of movies reviewed in New York
          Times. To fetch the list of movies reviewed please click "Fetch
          Movies"
        </p>
        <div style={{ textAlign: "center" }}>
          <Button btnType="Success" clicked={this.fetchMoviesListHandler}>
            Fetch Movies
          </Button>
        </div>
      </Aux>
    );
  }
}
export default MovieList;
