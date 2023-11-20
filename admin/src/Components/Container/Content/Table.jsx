import React from "react";
import "./Table.css";
const Table = () => {
  return (
    <div className="top">
      <div className="search">
        <button className="magnify"></button>
        <input placeholder="Search Product" type="text" />
      </div>
      <button>Add Product</button>
    </div>
  );
};

export default Table;
