function Pokemon(props) {
  return (
    <li className="Pokemon__list">
      <img
        className="Pokemon__img"
        src={props.data.url}
        alt={props.data.name}
      />
      <h2 className="Pokemon__title">{props.data.name}</h2>
      <p className="Pokemon__type">
        {props.data.types.map((type) => {
          return <li className="Pokemon__typelist">{type}</li>;
        })}
      </p>
    </li>
  );
}

export { Pokemon };
