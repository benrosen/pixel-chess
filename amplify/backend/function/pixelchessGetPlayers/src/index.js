/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { invokeLambda, getEnvData } = require("aws-lambda-utility-layer");

const EXECUTE_GRAPHQL_OPERATION = getEnvData(
  process.env,
  "FUNCTION_PIXELCHESSEXECUTEGRAPHQLOPERATION_NAME"
);

const lambda = new AWS.Lambda();

/**
 * Get the players for a given game id.
 *
 * @param {*} event The Lambda event to handle.
 * @returns An object containing the black player's id and the white player's id.
 */
exports.handler = async ({ id }) => {
  return invokeLambda(lambda, EXECUTE_GRAPHQL_OPERATION, {
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
  })
    .then((response) => {
      console.log(response);
      return response.data.getGame;
    })
    .catch((error) => {
      console.log(error);
      // TODO handle error
    });
};
