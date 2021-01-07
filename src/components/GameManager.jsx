import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { GameProvider } from "../contexts/GameContext";
import createGame from "../functions/createGame";

export default function GameManager({ children }) {
  const GAME_ID = "gameId";
  const history = useHistory();
  const routeMatch = useRouteMatch(`/:${GAME_ID}`);
  const [game, setGame] = useState();

  useEffect(() => {
    const pathParameters = routeMatch?.params;
    const gameId = pathParameters ? pathParameters[GAME_ID] : undefined;

    if (gameId) {
      // TODO query the game
      // TODO subscribe to the game
    } else {
      createGame().then((game) => {
        history.push(game.id);
      });
    }
  }, [routeMatch]);

  return <GameProvider value={game}>{children}</GameProvider>;
}

// TODO document GameManager
// TODO add PropTypes to GameManager
