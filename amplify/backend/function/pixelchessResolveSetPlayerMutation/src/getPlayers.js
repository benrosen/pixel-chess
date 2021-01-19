const { invokeLambda } = require("aws-lambda-utility-layer");

/**
 * Get the players for a given game id.
 *
 * @param {string} id The id of the game whose players you want to get.
 * @param {*} lambda The Lambda client.
 * @param {string} graphQLFunctionName The name of the Lambda GraphQL function to invoke.
 * @returns An object containing the black player's id and the white player's id.
 */
module.exports = (id, lambda, graphQLFunctionName) => {
  return invokeLambda(lambda, graphQLFunctionName, {
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
      console.log("getGame response:", response);
      return response.data.getGame;
    })
    .catch((error) => {
      console.log(error);
    });
};