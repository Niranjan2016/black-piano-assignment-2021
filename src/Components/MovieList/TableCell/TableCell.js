import React from "react";
import classes from "./TableCell.module.css";

const TableCell = (props) => {
  const appliedClasses = [
    props.isDataCell ? classes["data-column"] : classes["header-column"],
    classes[props.extraClass],
  ].join(" ");
  return <div className={appliedClasses}>{props.children}</div>;
};

export default TableCell;
