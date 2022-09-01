import React, { useCallback, useEffect, useState } from "react";
import PokemonContext from "../pokemon-context";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = useCallback(async () => {
    const res = await fetch("http://localhost:3001/db");

    if (!res.ok) return;

    const { pokemon: pokemons } = await res.json();

    setPokemons(pokemons);
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="App">
      <PokemonContext.Provider value={{ pokemons }}>
        <PokemonPage />
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
