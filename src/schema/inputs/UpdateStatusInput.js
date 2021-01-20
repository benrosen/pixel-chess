/**
 * Input data for the UpdateStatus mutation.
 *
 * @typedef UpdateStatusInput
 * @property {string} gameId The id of the game whose status you want to update.
 * @property {GameStatus} status The new status for the game.
 */
export default /* GraphQL */ `
  input UpdateStatusInput {
    gameId: ID!
    status: GameStatus!
  }
`;
