import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import TableCell from "../../TableCell/TableCell";

const dataRow = (props) => {
  return (
    <Aux>
      <TableCell extraClass="serial-no" isDataCell={true}>
        {props.itemIndex}
      </TableCell>
      <TableCell extraClass="extra-large" isDataCell={true}>
        <img
          alt="movie pic"
          src={props.dataItem.multimedia ? props.dataItem.multimedia.src : null}
        />
        <br />
        <span>
          {props.dataItem.display_title ? props.dataItem.display_title : "NA"}
        </span>
      </TableCell>
      <TableCell extraClass="normal" isDataCell={true}>
        {props.dataItem.opening_date
          ? new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(props.dataItem.publication_date))
          : "NA"}
      </TableCell>
      <TableCell extraClass="normal" isDataCell={true}>
        {props.dataItem.opening_date
          ? new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(props.dataItem.opening_date))
          : "NA"}
      </TableCell>
      <TableCell extraClass="small" isDataCell={true}>
        {props.dataItem.mpaa_rating ? props.dataItem.mpaa_rating : "NA"}
      </TableCell>
      <TableCell extraClass="small" isDataCell={true}>
        {props.dataItem.critics_pick === 1 ? "Yes" : "No"}
      </TableCell>
      <TableCell extraClass="normal" isDataCell={true}>
        {props.dataItem.byline ? props.dataItem.byline : "NA"}
      </TableCell>
      <TableCell extraClass="medium" isDataCell={true}>
        <a target="_blank" rel="noreferrer" href={props.dataItem.link.url}>
          Review Link
        </a>
      </TableCell>
    </Aux>
  );
};

export default dataRow;
