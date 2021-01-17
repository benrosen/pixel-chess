/* Amplify Params - DO NOT EDIT
	API_PIXELCHESS_GAMETABLE_ARN
	API_PIXELCHESS_GAMETABLE_NAME
	API_PIXELCHESS_GRAPHQLAPIIDOUTPUT
	ENV
	FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { getEnvData, updateRecord } = require("aws-lambda-utility-layer");

const getExpectedStatus = require("./getExpectedStatus");
const getPlayers = require("./getPlayers");
const updateStatus = require("./updateStatus");

const EXECUTE_GRAPHQL_OPERATION = getEnvData(
  process.env,
  "FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME"
);

const GAME_TABLE_NAME = getEnvData(
  process.env,
  "API_PIXELCHESS_GAMETABLE_NAME"
);

const BLACK = "BLACK";
const WHITE = "WHITE";

const documentClient = new AWS.DynamoDB.DocumentClient();
const lambda = new AWS.Lambda();

/**
 * Set the black or white player of a game.
 *
 * @param {*} event The Lambda event to handle.
 * @returns The newly updated game.
 */
exports.handler = async ({ arguments, timestamp }) => {
  const { gameId, playerColor, playerId } = arguments.input;

  const { black, white } = await getPlayers(
    gameId,
    lambda,
    EXECUTE_GRAPHQL_OPERATION
  );

  if (black && white) {
    throw new Error("Both players are already defined.");
  }

  if (playerColor === BLACK) {
    if (black) {
      throw new Error("Black is already defined.");
    }
  } else if (playerColor === WHITE) {
    if (white) {
      throw new Error("White is already defined.");
    }
  } else {
    throw new Error(
      `${playerColor} is not a valid color. Must be one of ${BLACK} or ${WHITE}.`
    );
  }

  const updatedRecord = await updateRecord(documentClient, {
    ExpressionAttributeValues: {
      ":playerId": playerId,
      ":updatedAt": timestamp,
    },
    Key: { id: gameId },
    ReturnValues: "ALL_NEW",
    TableName: GAME_TABLE_NAME,
    UpdateExpression: `set ${playerColor.toLowerCase()} = :playerId, updatedAt = :updatedAt`,
  })
    .then((response) => {
      return response.Attributes;
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("updatedRecord:", updatedRecord);

  const expectedStatus = getExpectedStatus(updatedRecord);

  console.log(expectedStatus);

  if (updatedRecord.status !== expectedStatus) {
    console.log(`updating ${updatedRecord.status} to ${expectedStatus}`);
    return await updateStatus(
      updatedRecord.id,
      expectedStatus,
      lambda,
      EXECUTE_GRAPHQL_OPERATION
    )
      .then((response) => {
        console.log("updateStatus response", response);
        // TODO return response?
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log("returning:", updatedRecord);

  return updatedRecord;
};
