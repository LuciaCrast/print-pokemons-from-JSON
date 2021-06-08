import "../styles/App.scss";
import data from "../data.json";
import { PokeList } from "./PokeList";
import React, { useState } from "react";

function App() {
  const [Pokemons] = useState(data);
  return (
    <div className="App">
      <h1>Mi lista Pokemon</h1>
      <PokeList />
    </div>
  );
}

export default App;
