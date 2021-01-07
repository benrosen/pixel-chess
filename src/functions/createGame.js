import { API, graphqlOperation } from "aws-amplify";

/**
 * Create a game via the GraphQL API.
 *
 * @returns {import("../typedefs/PixelChessGame").PixelChessGame} The newly created game.
 */
export default async function createGame() {
  return API.graphql(
    graphqlOperation(/* GraphQL */ `
      mutation CreateGame {
        createGame {
          id
        }
      }
    `)
  ).then((response) => {
    return response.data.createGame;
  });
}
