/**
 * Input data for the SetPlayer mutation.
 *
 * @typedef SetPlayerInput
 * @property {string} gameId The id of the game in which to set the player.
 * @property {string} playerId The id of the player you want to set.
 * @property {PlayerColor} playerColor The color to set the player to.
 */
export default /* GraphQL */ `
  input SetPlayerInput {
    gameId: ID!
    playerId: ID!
    playerColor: PlayerColor!
  }
`;
