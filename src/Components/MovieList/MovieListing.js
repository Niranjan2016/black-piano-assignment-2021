// import classes from "*.module.css";
import React from "react";
import classes from "./MovieListing.module.css";
import Aux from "../../hoc/Aux/Aux";
import TableCell from "./TableCell/TableCell";

const movieListing = (props) => {
  return (
    <Aux>
      <div className={classes["listing-container"]}>
        <div className={classes["header-row"]}>
          <TableCell extraClass="serial-no">#</TableCell>
          <TableCell extraClass="extra-large">Movie Name</TableCell>
          <TableCell extraClass="small">Opening Date</TableCell>
          <TableCell extraClass="small">MPAA Rating</TableCell>
          <TableCell extraClass="small">Critics Pick?</TableCell>
          <TableCell extraClass="movie-name">Review Link</TableCell>
        </div>
        <div className={classes["data-row"]}>
          <TableCell extraClass="serial-no" isDataCell={true}>
            1
          </TableCell>
          <TableCell extraClass="extra-large" isDataCell={true}>
            <img
              alt="movie pic"
              src="https://static01.nyt.com/images/2021/04/02/arts/01humanvoice-art/01humanvoice-art-mediumThreeByTwo440.jpg"
            />
            <br />
            <span>The Human Voice</span>
          </TableCell>
          <TableCell extraClass="small" isDataCell={true}>
            12th March 2021
          </TableCell>
          <TableCell extraClass="small" isDataCell={true}>
            R
          </TableCell>
          <TableCell extraClass="small" isDataCell={true}>
            Y
          </TableCell>
          <TableCell extraClass="movie-name" isDataCell={true}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.nytimes.com/2021/04/01/movies/the-human-voice-review.html"
            >
              Review Link
            </a>
          </TableCell>
        </div>
      </div>
    </Aux>
  );
};

export default movieListing;
