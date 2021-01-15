import { API } from "aws-amplify";

/**
 * Create a game via the GraphQL API.
 *
 * @returns {*} The newly created game.
 */
export default async function createGame() {
  return API.graphql({
    query: /* GraphQL */ `
      mutation CreateGame {
        createGame {
          id
        }
      }
    `,
  })
    .then((response) => {
      return response.data.createGame;
    })
    .catch((error) => {
      console.log(error);
    });
}
