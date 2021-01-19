const { invokeLambda } = require("aws-lambda-utility-layer");

/**
 * Get the players for a given game id.
 *
 * @param {*} id The id of the game whose players you want to get.
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
  }).then((response) => {
    return response.data.getGame;
  });
};