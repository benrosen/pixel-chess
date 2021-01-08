import { API } from "aws-amplify";

/**
 * Join a game.
 *
 * @param {string} gameId The id of the game to join.
 * @returns {*} The joined game.
 */
export default function joinGame(gameId) {
  return API.graphql({
    query: /* GraphQL */ `
      mutation UpdateGame($input: UpdateGameInput) {
        updateGame(input: $input) {
          id
          moveText
          players
          status
        }
      }
    `,
    variables: { input: { id: gameId } },
  })
    .then((response) => {
      return response.data.updateGame;
    })
    .catch((error) => {
      // TODO handle the various errors that may be thrown
      console.log(error);
    });
}

// TODO implement and document errors that may be thrown
