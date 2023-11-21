import React from "react";
import "./Top.css";
import Add from "../Modal/Add";
const Top = () => {
  return (
    <div className="top">
      <div className="search">
        <input placeholder="Search Product" type="text" />
      </div>
      <Add></Add>
    </div>
  );
};

export default Top;
