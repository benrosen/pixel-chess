/**
 * Enum for game status values.
 *
 * @readonly
 * @enum {number}
 */
const GameStatus = {
  PENDING: 0,
  UNDERWAY: 1,
  DRAW: 2,
  BLACK_WON: 3,
  WHITE_WON: 4,
};

export default /* GraphQL */ `
  enum GameStatus {
    PENDING
    UNDERWAY
    DRAW
    BLACK_WON
    WHITE_WON
  }
`;
