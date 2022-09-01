import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import PokemonContext from "../pokemon-context";

function PokemonCollection() {
  const ctx = useContext(PokemonContext);

  return (
    <Card.Group itemsPerRow={6}>
      {ctx.pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          sprites={pokemon.sprites}
          hp={pokemon.hp}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
