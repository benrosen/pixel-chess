/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { getEnvData, invokeLambda } = require("aws-lambda-utility-layer");

const [EXECUTE_GRAPHQL_OPERATION] = getEnvData(process.env, [
  "FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME",
]);

const lambda = new AWS.Lambda();

/**
 * Get the ids of the players of a given game.
 *
 * @param {*} event The Lambda event to be handled.
 * @returns {*} An object containing player ids.
 */
exports.handler = async ({ id }) => {
  console.log(id, EXECUTE_GRAPHQL_OPERATION);
  invokeLambda(lambda, EXECUTE_GRAPHQL_OPERATION, {
    operation: /* GraphQL */ `
      query GetGame($id: ID!) {
        getGame(id: $id) {
          black
          white
        }
      }
    `,
    operationName: "GetGame",
    item: { id: id },
  }).then((response) => {
    return response.data.getGame;
  });
};
