import React from "react";
import "./Top.css";
import Add from "../Modal/Add";
import { Input } from "antd";

import { useEffect, useState } from "react";
const Top = ({ value,setValue,search,setSearch,skip,setSkip }) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let resp = await fetch(
        `https://dummyjson.com/products/search?q=${search}&limit=10&skip=${skip}`
      );
      let data = await resp.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, [search, skip]);
  return (
    <div className="top">
      <div className="search-box">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
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
