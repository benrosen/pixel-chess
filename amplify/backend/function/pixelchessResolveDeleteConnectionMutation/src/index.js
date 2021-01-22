/* Amplify Params - DO NOT EDIT
	API_PIXELCHESS_CONNECTIONTABLE_ARN
	API_PIXELCHESS_CONNECTIONTABLE_NAME
	API_PIXELCHESS_GRAPHQLAPIIDOUTPUT
	ENV
	FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { getEnvData, invokeLambda } = require("aws-lambda-utility-layer");

const [EXECUTE_GRAPHQL_OPERATION, GAME_TABLE_NAME] = getEnvData(process.env, [
  "FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME",
  "API_PIXELCHESS_CONNECTIONTABLE_NAME",
]);

const documentClient = new AWS.DynamoDB.DocumentClient();
const lambda = new AWS.Lambda();

/**
 * Delete your connection to a game.
 *
 * @param {DeleteConnectionEvent} event The Lambda event to handle.
 * @returns The newly deleted connection.
 */
exports.handler = async (event) => {
  console.log(event);
  // TODO delete record from dynamoDB table
  // TODO ensure game status = BLACK_WON or status = WHITE_WON (executeGraphQLOperation updateStatus)
};
