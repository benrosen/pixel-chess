/* Amplify Params - DO NOT EDIT
	API_PIXELCHESS_CONNECTIONTABLE_ARN
	API_PIXELCHESS_CONNECTIONTABLE_NAME
	API_PIXELCHESS_GRAPHQLAPIIDOUTPUT
	ENV
	FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

const getPlayers = require("./getPlayers");
const setPlayer = require("./setPlayer");

const { getEnvData } = require("aws-lambda-utility-layer");

const EXECUTE_GRAPHQL_OPERATION = getEnvData(
  process.env,
  "FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME"
);

const lambda = new AWS.Lambda();

/**
 * Create a connection to a game.
 *
 * @param {*} event The Lambda event to handle.
 * @returns The newly created connection.
 */
exports.handler = async (event) => {
  console.log(event);

  const { black, white } = await getPlayers(gameId);

  if (black && white) {
    // TODO throw game already full error
  } else {
    const connection = {
      id: event.id,
      gameId: event.gameId,
      createdAt: event.timestamp,
      updatedAt: event.timestamp,
      owner: event.identity,
      __typename: "Game",
    };

    // TODO create connection record in the database

    let willPlayWhite;
    if (!(black || white)) {
      willPlayWhite = Math.random() > 0.5;
    } else if (black) {
      willPlayWhite = true;
    }

    const connectedGame = await setPlayer(
      gameId,
      willPlayWhite,
      lambda,
      EXECUTE_GRAPHQL_OPERATION
    );

    console.log(connectedGame);

    // TODO return newly created connection object
  }
};

// TODO document with @throw tag
