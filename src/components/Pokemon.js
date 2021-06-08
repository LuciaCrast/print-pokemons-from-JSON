function Pokemon(props) {
  return (
    <li className="pokemon__li">
      <img
        className="pokemon__img"
        src={props.data.url}
        alt={props.data.name}
      />
      <h2 className="pokemon__title">{props.data.name}</h2>
      <p className="pokemon__type">{props.data.types}</p>
    </li>
  );
}

export { Pokemon };
