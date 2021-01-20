/**
 * Input data for the AppendMoveText mutation.
 *
 * @typedef AppendMoveTextInput
 * @property {string} gameId The id of the game that the move should be appended to.
 * @property {string} moveText A chess move written in standard alegebraic notation.
 */
export default /* GraphQL */ `
  input AppendMoveTextInput {
    gameId: ID!
    moveText: String!
  }
`;
