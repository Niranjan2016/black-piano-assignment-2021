// import classes from "*.module.css";
import React from "react";
import classes from "./MovieListing.module.css";
import Aux from "../../hoc/Aux/Aux";
import HeaderCell from "./HeaderCell/HeaderCell";

const movieListing = (props) => {
  return (
    <Aux>
      <div className={classes["listing-container"]}>
        <div className={classes["header-row"]}>
          <HeaderCell extraClass="serial-no">#</HeaderCell>
          <HeaderCell extraClass="extra-large">Movie Name</HeaderCell>
          <HeaderCell extraClass="small">Opening Date</HeaderCell>
          <HeaderCell extraClass="small">MPAA Rating</HeaderCell>
          <HeaderCell extraClass="small">Critics Pick?</HeaderCell>
          <HeaderCell extraClass="movie-name">Review Link</HeaderCell>
        </div>
        <div className={classes["data-row"]}>
          <HeaderCell extraClass="serial-no" isDataColumn={true}>
            1
          </HeaderCell>
          <HeaderCell extraClass="extra-large" isDataColumn={true}>
            <img
              alt="movie pic"
              src="https://static01.nyt.com/images/2021/04/02/arts/01humanvoice-art/01humanvoice-art-mediumThreeByTwo440.jpg"
            />
            <br />
            <span>The Human Voice</span>
          </HeaderCell>
          <HeaderCell extraClass="small" isDataColumn={true}>
            12th March 2021
          </HeaderCell>
          <HeaderCell extraClass="small" isDataColumn={true}>
            R
          </HeaderCell>
          <HeaderCell extraClass="small" isDataColumn={true}>
            Y
          </HeaderCell>
          <HeaderCell extraClass="movie-name" isDataColumn={true}>
            <a href="https://www.nytimes.com/2021/04/01/movies/the-human-voice-review.html">
              Review Link
            </a>
          </HeaderCell>
        </div>
      </div>
    </Aux>
  );
};

export default movieListing;
