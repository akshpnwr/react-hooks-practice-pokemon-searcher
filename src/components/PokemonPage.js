import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  return (
    <Container>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection />
    </Container>
  );
}

export default PokemonPage;
