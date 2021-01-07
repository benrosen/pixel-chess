import React, { useEffect, useState } from "react";

import { GameProvider } from "../contexts/GameContext";
import createGame from "../functions/createGame";
import redirectToGameUrl from "../functions/redirectToGameUrl";
import { useRouteMatch } from "react-router-dom";

export default function GameManager({ children }) {
  const GAME_ID = "gameId";
  const routeMatch = useRouteMatch(`/:${GAME_ID}`);
  const [game, setGame] = useState();

  useEffect(() => {
    const pathParameters = routeMatch?.params;
    const gameId = pathParameters ? pathParameters[GAME_ID] : undefined;

    if (gameId) {
      // TODO query the game
      // TODO subscribe to the game
    } else {
      createGame().then((game) => redirectToGameUrl(game));
    }
  }, [routeMatch]);

  return <GameProvider value={game}>{children}</GameProvider>;
}

// TODO document GameManager
// TODO add PropTypes to GameManager
