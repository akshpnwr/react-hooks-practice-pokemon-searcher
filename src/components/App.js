import React, { useEffect } from "react";
import PokemonPage from "./PokemonPage";

const fetchPokemons = async () => {
  const res = await fetch("http://localhost:3001/db");

  if (!res.ok) return;

  const { pokemon: pokemons } = await res.json();

  console.log(pokemons);
};

function App() {
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
