/* Amplify Params - DO NOT EDIT
	API_PIXELCHESS_GAMETABLE_ARN
	API_PIXELCHESS_GAMETABLE_NAME
	API_PIXELCHESS_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { createRecord, getEnvData } = require("aws-lambda-utility-layer");

const GAME_TABLE_NAME = getEnvData(
  process.env,
  "API_PIXELCHESS_GAMETABLE_NAME"
);

const documentClient = new AWS.DynamoDB.DocumentClient();

/**
 * Create a game record in the DynamoDB table and return the result.
 *
 * @param {*} event The Lambda event to be handled.
 * @returns The newly created game.
 */
exports.handler = ({ id, timestamp }) => {
  const game = {
    id: id,
    moveText: "",
    status: "PENDING",
    createdAt: timestamp,
    updatedAt: timestamp,
    version: 1,
    __typename: "Game",
  };
  console.log(game);
  return createRecord(documentClient, GAME_TABLE_NAME, game);
};
