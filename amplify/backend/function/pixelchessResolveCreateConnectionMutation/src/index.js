/* Amplify Params - DO NOT EDIT
	API_PIXELCHESS_CONNECTIONTABLE_ARN
	API_PIXELCHESS_CONNECTIONTABLE_NAME
	API_PIXELCHESS_GRAPHQLAPIIDOUTPUT
	ENV
	FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const getPlayers = require("./getPlayers");
const setPlayer = require("./setPlayer");

const { createRecord, getEnvData } = require("aws-lambda-utility-layer");

const EXECUTE_GRAPHQL_OPERATION = getEnvData(
  process.env,
  "FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME"
);

const CONNECTION_TABLE_NAME = getEnvData(
  process.env,
  "API_PIXELCHESS_CONNECTIONTABLE_NAME"
);

const documentClient = new AWS.DynamoDB.DocumentClient();
const lambda = new AWS.Lambda();

/**
 * Create a connection to a game.
 *
 * @param {*} event The Lambda event to handle.
 * @returns The newly created connection.
 */
exports.handler = async (event) => {
  console.log(event);
  const { arguments, id, identity, timestamp } = event;
  const gameId = arguments.input.gameId;
  const owner = identity.username;

  console.log(arguments, gameId, owner, timestamp);

  const { black, white } = await getPlayers(
    gameId,
    lambda,
    EXECUTE_GRAPHQL_OPERATION
  );

  if (black && white) {
    throw new Error("Both players are already connected.");
  } else {
    const connection = {
      id: id,
      gameId: gameId,
      createdAt: timestamp,
      updatedAt: timestamp,
      owner: owner,
      __typename: "Game",
    };

    console.log(connection);

    await createRecord(documentClient, CONNECTION_TABLE_NAME, connection).then(
      (response) => {
        console.log(response);
      }
    );

    let willPlayWhite;
    if (!(black || white)) {
      willPlayWhite = Math.random() > 0.5;
    } else if (black) {
      willPlayWhite = true;
    }

    const connectedGame = await setPlayer(
      gameId,
      EXECUTE_GRAPHQL_OPERATION,
      lambda,
      owner,
      willPlayWhite
    );

    return { ...connection, game: connectedGame };
  }
};
