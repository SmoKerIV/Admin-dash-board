import "./App.css";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import Table from "./Components/Container/Content/Table";

function App() {
  return (
    <div>
      <Container>
        <Header></Header>
        <hr />
        <Table></Table>
      </Container>
    </div>
  );
}

export default App;
