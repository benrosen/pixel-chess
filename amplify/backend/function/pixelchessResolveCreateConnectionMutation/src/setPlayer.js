const { invokeLambda } = require("aws-lambda-utility-layer");

/**
 * Set the value of the black or white player field on a Game record.
 *
 * @param {string} gameId The id of the game whose player fields you want to set.
 * @param {string} graphQLFunctionName The name of the lambda function that will execute the GraphQL operation.
 * @param {*} lambda The Lambda client.
 * @param {string} playerId The id of the player.
 * @param {boolean} willPlayWhite Is this the white player?
 * @returns The newly updated Game record.
 */
module.exports = (
  gameId,
  graphQLFunctionName,
  lambda,
  playerId,
  willPlayWhite
) => {
  const BLACK = "Black";
  const WHITE = "White";

  const color = willPlayWhite ? WHITE : BLACK;
  const operationName = `Set${color}Player`;

  return invokeLambda(lambda, graphQLFunctionName, {
    operation: /* GraphQL */ `
      mutation ${operationName}($input: SetPlayerInput!) {
        set${color}Player(input: $input) {
          id
          black
          moveText
          status
          white
        }
      }
    `,
    operationName: operationName,
    item: { input: { gameId: gameId, playerId: playerId } },
  })
    .then((response) => {
      console.log(response);
      // TODO return data from response
    })
    .catch((error) => {
      console.log(error);
      // TODO handle errors
    });
};

// TODO create typedefs for graphql types
