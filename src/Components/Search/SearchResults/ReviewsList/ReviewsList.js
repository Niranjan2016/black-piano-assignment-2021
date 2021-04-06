import React from "react";
// import classes from "./ReviewsList.module.css";
import MovieListing from "../../../MovieList/MovieListing";

const ReviewsList = (props) => {
  return <MovieListing moviesData={props.movieData}></MovieListing>;
};

export default ReviewsList;
