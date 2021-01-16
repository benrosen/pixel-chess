/* Amplify Params - DO NOT EDIT
	API_PIXELCHESS_GAMETABLE_ARN
	API_PIXELCHESS_GAMETABLE_NAME
	API_PIXELCHESS_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { getEnvData, updateRecord } = require("aws-lambda-utility-layer");

const GAME_TABLE_NAME = getEnvData(
  process.env,
  "API_PIXELCHESS_GAMETABLE_NAME"
);

const documentClient = new AWS.DynamoDB.DocumentClient();

/**
 * Update the status of a game.
 *
 * @param {*} event The Lambda event to be handled.
 * @returns The newly updated game.
 */
exports.handler = async ({ arguments }) => {
  const { gameId, status } = arguments.input;
  return await updateRecord(documentClient, {
    ExpressionAttributeNames: {
      "#status": "status",
    },
    ExpressionAttributeValues: {
      ":status": status,
    },
    Key: { id: gameId },
    ReturnValues: "ALL_NEW",
    TableName: GAME_TABLE_NAME,
    UpdateExpression: "set #status = :status",
  })
    .then((error) => {
      return error.Attributes;
    })
    .catch((error) => {
      console.log(error);
      //   TODO handle error
    });
};
