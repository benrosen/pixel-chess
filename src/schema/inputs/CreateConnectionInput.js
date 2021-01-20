/**
 * Input data for the CreateConnection mutation.
 *
 * @typedef CreateConnectionInput
 * @property {string} gameId The id of the game to connect to.
 */
export default /* GraphQL */ `
  input CreateConnectionInput {
    gameId: ID!
  }
`;
