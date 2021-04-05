import React, { Component } from "react";
// import classes from "./MovieList.module.css";
import Aux from "../../hoc/Aux/Aux";
import Button from "../../Components/UI/Button/Button";
import MovieListing from "../../Components/MovieList/MovieListing";
import Spinner from "../../Components/UI/Spinner/Spinner";

const api_key = process.env.REACT_APP_SECRET_CODE;
const base_url = process.env.REACT_APP_API_BASE_URL;
class MovieList extends Component {
  state = {
    movieList: [],
    isFetchingData: false,
  };

  fetchMoviesListHandler = () => {
    this.setState({ isFetchingData: true });
    fetch(base_url + "all.json?api-key=" + api_key)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            movieList: result.results,
            isFetchingData: false,
          });
        },
        (error) => {
          this.setState({
            isFetchingData: false,
            error,
          });
        }
      );
  };

  render() {
    let listingJSX = <Spinner />;
    if (!this.state.isFetchingData) {
      listingJSX = (
        <MovieListing moviesData={this.state.movieList}></MovieListing>
      );
    }
    return (
      <Aux>
        <p>
          Here we will be populating the list of movies reviewed in New York
          Times. To fetch the list of movies reviewed please click "Fetch
          Movies"
        </p>
        <div style={{ textAlign: "center" }}>
          <Button
            btnType="Success"
            clicked={this.fetchMoviesListHandler}
            disabled={this.state.isFetchingData}
          >
            Fetch Movies
          </Button>
        </div>
        {listingJSX}
      </Aux>
    );
  }
}
export default MovieList;
