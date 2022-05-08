import { useState } from "react";
import Characters from "./components/Characters/Characters";
import "./App.scss";
import { useFetch } from "./hooks/useFetch";
import { Container } from "react-bootstrap";
import Loading from "./components/common/Loading";
import Search from "./components/Search/Search";

function App() {
  const [endpoint, setEndpoint] = useState("character");
  const { data, loading, error } = useFetch(endpoint);
  const { results: characters, info } = data;

  const findCharacters = (character) => {
    setEndpoint(`character?name=${character}`);
  };

  if (loading) return <Loading />;
  if (error) return <h3>Ocurrio un error</h3>;

  return (
    <Container className="App">
      <Search findCharacters={findCharacters} />
      <Characters characters={characters} />
    </Container>
  );
}

export default App;
