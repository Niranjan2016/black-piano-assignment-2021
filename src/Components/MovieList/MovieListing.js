// import classes from "*.module.css";
import React from "react";
import classes from "./MovieListing.module.css";
import Aux from "../../hoc/Aux/Aux";
import TableCell from "./TableCell/TableCell";
import DataRows from "./DataRows/DataRows";

const movieListing = (props) => {
  let dataRows = [];
  let dataRowsJSX = (
    <div className={classes["no-data"]}>
      No data found! Please click Fetch Movies to get data
    </div>
  );

  if (props.moviesData && props.moviesData.length >= 1) {
    dataRows = props.moviesData;
    dataRowsJSX = <DataRows data={dataRows}></DataRows>;
  }

  return (
    <Aux>
      <div className={classes["listing-container"]}>
        <div className={classes["header-row"]}>
          <TableCell extraClass="serial-no">#</TableCell>
          <TableCell extraClass="extra-large">Movie Name</TableCell>
          <TableCell extraClass="normal">Opening Date</TableCell>
          <TableCell extraClass="small">MPAA Rating</TableCell>
          <TableCell extraClass="small">Critics Pick?</TableCell>
          <TableCell extraClass="medium">Review Link</TableCell>
        </div>
        <div className={classes["data-row"]}>{dataRowsJSX}</div>
      </div>
    </Aux>
  );
};

export default movieListing;
