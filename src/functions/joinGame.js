import { API } from "aws-amplify";

/**
 * Join a game.
 *
 * @param {string} id The id of the game to join.
 * @returns {*} The joined game.
 */
export default function joinGame(id) {
  return API.graphql({
    query: /* GraphQL */ `
      mutation CreateConnection($input: CreateConnectionInput!) {
        createConnection(input: $input) {
          game {
            id
            moveText
            status
          }
        }
      }
    `,
    variables: { input: { gameId: id } },
  })
    .then((response) => {
      return response.data.createConnection.game;
    })
    .catch((error) => {
      console.log(error);
    });
}
