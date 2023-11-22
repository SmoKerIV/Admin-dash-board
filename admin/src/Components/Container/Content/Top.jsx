import React from "react";
import "./Top.css";
import Add from "../Modal/Add";
import { Input } from "antd";
const Top = ({ value,setValue,setSearch,getProducts }) => {
  return (
    <div className="top">
      <div className="search-box">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Products"
          style={{ outline: "none", border: "none" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getProducts();
              setSearch(value);
            }
          }}
        />
      </div>
      <Add />
    </div>
  );
};

export default Top;
