import React from "react";
import classes from "./HeaderCell.module.css";

const headerCell = (props) => {
  console.log(props);
  const appliedClasses = [
    props.isDataColumn ? classes["data-column"] : classes["header-column"],
    classes[props.extraClass],
  ].join(" ");
  return <div className={appliedClasses}>{props.children}</div>;
};

export default headerCell;
