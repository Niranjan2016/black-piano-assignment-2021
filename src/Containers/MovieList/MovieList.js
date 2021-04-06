import React, { Component } from "react";
import classes from "./MovieList.module.css";
import Aux from "../../hoc/Aux/Aux";
import Button from "../../Components/UI/Button/Button";
import MovieListing from "../../Components/MovieList/MovieListing";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Pagination from "react-js-pagination";

require("../../Assets/css/bootstrap.module.css");

const api_key = process.env.REACT_APP_SECRET_CODE;
const base_url = process.env.REACT_APP_API_BASE_URL;
class MovieList extends Component {
  state = {
    movieList: [],
    isFetchingData: false,
    offset: 0,
    pages: [1, 2, 3, 4, 5],
    currentPage: 1,
  };

  fetchMoviesListHandler = (offset = 0) => {
    this.setState({ isFetchingData: true });
    let params = "api-key=" + api_key;
    params = params + "&order=by-opening-date";
    if (offset >= 1) {
      params = params + "&offset=" + (offset - 1) * 20;
    }
    fetch(base_url + "all.json?" + params)
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

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    this.fetchMoviesListHandler(pageNumber);
  };

  render() {
    let listingJSX = <Spinner />;
    if (!this.state.isFetchingData) {
      listingJSX = (
        <Aux>
          <MovieListing moviesData={this.state.movieList}></MovieListing>
          {this.state.movieList && this.state.movieList.length >= 1 ? (
            <div className={classes.pagination}>
              <Pagination
                activePage={this.state.currentPage}
                itemsCountPerPage={20}
                totalItemsCount={1000}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
              />
            </div>
          ) : null}
        </Aux>
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
