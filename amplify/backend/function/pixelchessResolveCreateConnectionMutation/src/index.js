/* Amplify Params - DO NOT EDIT
	API_PIXELCHESS_CONNECTIONTABLE_ARN
	API_PIXELCHESS_CONNECTIONTABLE_NAME
	API_PIXELCHESS_GRAPHQLAPIIDOUTPUT
	ENV
	FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME
	FUNCTION_PIXELCHESSQUERYPLAYERSBYGAMEID_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const setPlayer = require("./setPlayer");

const {
  createRecord,
  getEnvData,
  invokeLambda,
} = require("aws-lambda-utility-layer");

const [
  CONNECTION_TABLE_NAME,
  EXECUTE_GRAPHQL_OPERATION,
  QUERY_PLAYERS,
] = getEnvData(process.env, [
  "API_PIXELCHESS_CONNECTIONTABLE_NAME",
  "FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME",
  "FUNCTION_PIXELCHESSQUERYPLAYERSBYGAMEID_NAME",
]);

const documentClient = new AWS.DynamoDB.DocumentClient();
const lambda = new AWS.Lambda();

/**
 * Create a connection to a game.
 *
 * @param {CreateConnectionInput} event The Lambda event to handle.
 * @returns The newly created connection.
 */
exports.handler = async (event) => {
  console.log(event);
  const { arguments, id, identity, timestamp } = event;
  const gameId = arguments.input.gameId;
  const owner = identity.username;

  console.log(arguments, gameId, owner, timestamp);

  const { black, white } = await invokeLambda(lambda, QUERY_PLAYERS, {
    id: gameId,
  });

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

    await createRecord(documentClient, CONNECTION_TABLE_NAME, connection);

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
