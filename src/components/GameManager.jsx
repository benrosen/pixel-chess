import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { GameProvider } from "../contexts/GameContext";
import createGame from "../functions/createGame";
import createGameSubscription from "../functions/createGameSubscription";
import joinGame from "../functions/joinGame";

export default function GameManager({ children }) {
  const GAME_ID = "gameId";
  const history = useHistory();
  const routeMatch = useRouteMatch(`/:${GAME_ID}`);
  const [game, setGame] = useState();

  useEffect(() => {
    const pathParameters = routeMatch?.params;
    const id = pathParameters ? pathParameters[GAME_ID] : undefined;

    let gameSubscription = undefined;

    if (id) {
      joinGame(id)
        .then((newGame) => {
          gameSubscription = createGameSubscription(newGame, setGame);
        })
        .catch((error) => {
          // TODO handle the various errors that may be thrown
          console.log(error);
        });
    } else {
      createGame()
        .then((game) => {
          history.push(game.id);
        })
        .catch((error) => {
          // TODO handle the various errors that may be thrown
          console.log(error);
        });
    }

    return () => gameSubscription?.unsubscribe();
  }, [history, routeMatch]);

  return <GameProvider value={game}>{children}</GameProvider>;
}

// TODO document GameManager
// TODO add PropTypes to GameManager
