/* Amplify Params - DO NOT EDIT
	API_PIXELCHESS_GAMETABLE_ARN
	API_PIXELCHESS_GAMETABLE_NAME
	API_PIXELCHESS_GRAPHQLAPIIDOUTPUT
	ENV
	FUNCTION_PIXELCHESSGETPLAYERS_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const utils = require("aws-lambda-utility-layer");

console.log(utils);

const { getEnvData, invokeLambda, updateRecord } = utils;

const GET_PLAYERS_FUNCTION = getEnvData(
  process.env,
  "FUNCTION_PIXELCHESSGETPLAYERS_NAME"
);

const GAME_TABLE_NAME = getEnvData(
  process.env,
  "API_PIXELCHESS_GAMETABLE_NAME"
);

const documentClient = new AWS.DynamoDB.DocumentClient();
const lambda = new AWS.Lambda();

/**
 * Set the black player of a game.
 *
 * @param {*} event The Lambda event to handle.
 * @returns The newly updated game.
 */
exports.handler = async ({ arguments }) => {
  const { gameId, playerId } = arguments.input;
  const { black } = await invokeLambda(lambda, GET_PLAYERS_FUNCTION, {
    id: gameId,
  });
  if (black) {
    throw new Error("Someone else is already playing as black.");
  }
  return updateRecord(documentClient, {
    ExpressionAttributeValues: { ":playerId": playerId },
    Key: { id: gameId },
    ReturnValues: "ALL_NEW",
    TableName: GAME_TABLE_NAME,
    UpdateExpression: "set black = :playerId",
  })
    .then((response) => {
      console.log(response);
      // TODO return response
    })
    .catch((error) => {
      console.log(error);
      // TODO handle errors
    });
};

// TODO document with @throw tag
