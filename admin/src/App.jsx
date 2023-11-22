import "./App.css";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import Top from "./Components/Container/Content/Top";
import Tbl from "./Components/Container/Table/Tbl";
import { useEffect, useState } from "react";
import { Pagination } from "antd";

function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState();
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
  }, []);
  const handleInputChange = () => {
    setSkip(0);
    setSearch(value);
  };
  return (
    <div>
      <Container>
        <Header />
        <hr />
        <Top
          setSearch={setSearch}
          handleInputChange={handleInputChange}
          setValue={setValue}
          value={value}
          search={search}
          getProducts={getProducts}
          products={products}
        />
        <Tbl products={products} skip={skip} setSkip={setSkip} />

      </Container>
    </div>
  );
}

export default App;
