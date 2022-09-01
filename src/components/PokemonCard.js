import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  return (
    <Card>
      <div>
        <div className="image">
          <img src={props.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
