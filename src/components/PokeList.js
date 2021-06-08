import { Pokemon } from "./Pokemon";
import data from "../data.json";

function PokeList(props) {
  const mapPokemon = data.map((pokemon) => {
    return <Pokemon key={pokemon.id} data={pokemon} />;
  });
  return <ul>{mapPokemon}</ul>;
}

export { PokeList };
