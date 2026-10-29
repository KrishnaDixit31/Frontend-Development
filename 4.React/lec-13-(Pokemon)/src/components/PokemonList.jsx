export const PokemonList = ({ pokemondata }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemondata.sprites.other.dream_world.front_default}
          alt={pokemondata.name}
          className="pokemon-img"
        />
      </figure>
      <h2 className="pokemon-name">{pokemondata.name}</h2>

      <div className="pokemon-info highlight">
        <p>
          {pokemondata.types.map((curtype) => curtype.type.name).join(", ")}
        </p>
      </div>

      <div className="pokemon-physicalinfo">
        <p className="pokemon-info">
          Height: <span>{pokemondata.height}</span>
        </p>
        <p className="pokemon-info">
          Weight: <span>{pokemondata.weight}</span>
        </p>
        <p className="pokemon-info">
          Speed: <span>{pokemondata.stats[5].base_stat}</span>
        </p>
      </div>

      <div className="pokemon-extra-details">
        <div className="pokemon-info">
          <span>Experience:</span>
          <p>{pokemondata.base_experience}</p>
        </div>
        <div className="pokemon-info">
          <span>Attack:</span>
          <p>{pokemondata.stats[1].base_stat}</p>
        </div>
        <div className="pokemon-info">
          <span>Abilities:</span>
          <p>
            {pokemondata.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
        </div>
      </div>
    </li>
  );
};
