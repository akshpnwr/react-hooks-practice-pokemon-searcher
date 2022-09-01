import React, { useCallback, useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = useCallback(async () => {
    const res = await fetch("http://localhost:3001/db");

    if (!res.ok) return;

    const { pokemon: pokemons } = await res.json();

    console.log(pokemons);
    setPokemons(pokemons);
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="App">
      <PokemonPage pokemons={pokemons} />
    </div>
  );
}

export default App;
