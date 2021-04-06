import React from "react";
import classes from "./SearchResults.module.css";
import Aux from "../../../hoc/Aux/Aux";
import SingleReview from "./SingleReview/SingleReview";
import ReviewsList from "./ReviewsList/ReviewsList";
import Spinner from "../../UI/Spinner/Spinner";

const SearchResults = (props) => {
  let searchResultJSX = null;
  if (props.moviesList && props.moviesList.length >= 2) {
    searchResultJSX = <ReviewsList movieData={props.moviesList}></ReviewsList>;
  } else if (props.moviesList && props.moviesList.length === 1) {
    searchResultJSX = (
      <SingleReview movieData={props.moviesList[0]}></SingleReview>
    );
  } else if (props.isDataLoading) {
    searchResultJSX = <Spinner />;
  } else {
    searchResultJSX = <p>No results!</p>;
  }
  return (
    <Aux>
      <div className={classes["search-results"]}>{searchResultJSX}</div>
    </Aux>
  );
};

export default SearchResults;
