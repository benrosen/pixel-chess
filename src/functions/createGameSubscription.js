import { API } from "aws-amplify";

/**
 * Subscribe to updates from a game.
 *
 * @param {*} game The game to subscribe to.
 * @param {SetGameCallback} setGame The callback to update the game state.
 * @returns {*} The newly created subscription.
 */
export default function createGameSubscription(game, setGame) {
  return API.graphql({
    query: /* GraphQL */ `
      subscription OnUpdateGame($id: ID!) {
        onUpdateGame(id: $id) {
          id
          moveText
          status
        }
      }
    `,
    variables: { id: game.id },
  }).subscribe({
    next: (update) => {
      setGame(update.value.data.onUpdateGame);
    },
    error: (error) => {
      console.log(error);
    },
  });
}
