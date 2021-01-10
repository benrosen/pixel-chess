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
            black
            moveText
            status
            white
            createdAt
            updatedAt
            version
          }
        }
      }
    `,
    variables: { input: { gameId: id } },
  })
    .then((response) => {
      console.log(response);
      // TODO return the connected game
    })
    .catch((error) => {
      console.log(error);
      // TODO raise error
    });
}

// TODO implement and document errors that may be thrown
