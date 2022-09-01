import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection(props) {
  return (
    <Card.Group itemsPerRow={6}>
      {props.pokemons.map((pokemon) => (
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
