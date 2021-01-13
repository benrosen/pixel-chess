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
  const BLACK = "BLACK";
  const WHITE = "WHITE";

  return invokeLambda(lambda, graphQLFunctionName, {
    operation: /* GraphQL */ `
      mutation SetPlayer($input: SetPlayerInput!) {
        setPlayer(input: $input) {
          id
          black
          moveText
          status
          white
        }
      }
    `,
    operationName: "SetPlayer",
    item: {
      input: {
        gameId: gameId,
        playerId: playerId,
        playerColor: willPlayWhite ? WHITE : BLACK,
      },
    },
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
