const { invokeLambda } = require("aws-lambda-utility-layer");

/**
 * Set the value of the black or white player field on a Game record.
 *
 * @param {string} gameId The id of the game whose player fields you want to set.
 * @param {boolean} willPlayWhite Is this the white player?
 * @param {*} lambda The Lambda client.
 * @param {string} graphQLFunctionName The name of the lambda function that will execute the GraphQL operation.
 * @returns The newly updated Game record.
 */
module.exports = (gameId, willPlayWhite, lambda, graphQLFunctionName) => {
  const BLACK = "Black";
  const WHITE = "White";

  const color = willPlayWhite ? WHITE : BLACK;
  const operationName = `set${color}Player`;

  return invokeLambda(lambda, graphQLFunctionName, {
    operation: /* GraphQL */ `
      mutation Set${color}Player($input: SetPlayerInput!) {
        ${operationName}(input: $input) {
          id
          black
          moveText
          status
          white
        }
      }
    `,
    operationName: operationName,
    input: { gameId: gameId },
  });
};

// TODO create typedefs for graphql types
