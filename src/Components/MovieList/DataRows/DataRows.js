import React from "react";
import DataRow from "./DataRow/DataRow";

const dataRows = (props) => {
  let dataRowsItems = null;
  dataRowsItems = props.data.map((item, index) => (
    <DataRow key={index + 1} itemIndex={index + 1} dataItem={item} />
  ));
  return dataRowsItems;
};

export default dataRows;
