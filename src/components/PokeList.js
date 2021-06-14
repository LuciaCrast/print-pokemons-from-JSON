import { Pokemon } from "./Pokemon";

function PokeList(props) {
  const mapPokemon = props.data.map((pokemon) => {
    return <Pokemon key={pokemon.id} data={pokemon} />;
  });
  return <ul className="Pokemon">{mapPokemon}</ul>;
}

export { PokeList };
