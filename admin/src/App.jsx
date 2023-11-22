import "./App.css";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import Top from "./Components/Container/Content/Top";
import Tbl from "./Components/Container/Table/Tbl";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let resp = await fetch(`https://dummyjson.com/products?limit=10&`);
      let data = await resp.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Header />
        <hr />
        <Top />
        <Tbl products={products}/>
      </Container>
    </div>
  );
}

export default App;
