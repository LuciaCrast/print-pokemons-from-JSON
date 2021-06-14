import PropTypes from "prop-types";

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
        {props.data.types.map((type, index) => {
          return (
            <ul className="Pokemon__ulList">
              <li className="Pokemon__typelist" key={index}>
                {type}
              </li>
            </ul>
          );
        })}
      </p>
    </li>
  );
}

export { Pokemon };

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  pokemon: PropTypes.object,
};
