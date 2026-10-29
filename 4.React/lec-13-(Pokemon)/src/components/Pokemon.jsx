import { useEffect, useState } from "react";
import "./Pokemon.css";
import { PokemonList } from "./PokemonList";

const API = "https://pokeapi.co/api/v2/pokemon?limit=30";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();

        const detailPokemonData = data.results.map(async (curpokemon) => {
          const res = await fetch(curpokemon.url);
          const data = await res.json();
          return data;
        });

        const dataResponse = await Promise.all(detailPokemonData);
        setPokemon(dataResponse);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curpokemon) =>
    curpokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  if (loading)
    return (
      <div>
        <h1 className="loading-text">Loading...</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );

  return (
    <section className="container">
      <header>
        <h1>Lets Catch Pokémon</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <ul className="cards">
          {searchData.map((curpokemon) => {
            return <PokemonList key={curpokemon.id} pokemondata={curpokemon} />;
          })}
        </ul>
      </div>
    </section>
  );
};
