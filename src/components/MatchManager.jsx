import React, { useEffect, useState } from "react";

import { MatchProvider } from "../contexts/MatchContext";
import { useRouteMatch } from "react-router-dom";

export default function MatchManager({ children }) {
  const MATCH_ID = "matchId";
  const routeMatch = useRouteMatch(`/:${MATCH_ID}`);
  const [match, setMatch] = useState();

  useEffect(() => {
    const pathParameters = routeMatch?.params;
    const matchId = pathParameters ? pathParameters[MATCH_ID] : undefined;

    if (matchId) {
      // TODO connect to the newMatch
      // TODO setMatch to newMatch
    } else {
      // TODO create newMatch and redirect to /newMatch.id
    }
  }, [routeMatch]);

  return <MatchProvider value={match}>{children}</MatchProvider>;
}

// TODO document MatchManager
// TODO add PropTypes to MatchManager
