/**
 * A game.
 *
 * @typedef Game
 * @property {string} id The id of the game.
 * @property {string} black The id of the black player.
 * @property {string} moveText A string containing the moves of the game in standard algebraic notation.
 * @property {GameStatus} status The current status of the game.
 * @property {string} white The id of the white player.
 */
module.exports = /* GraphQL */ `
  type Game
    @aws_iam
    @auth(
      rules: [
        { allow: private, provider: iam, operations: [update] }
        { allow: public, provider: iam, operations: [create] }
      ]
    )
    @model(mutations: null, subscriptions: null)
    @versioned {
    id: ID!
    black: String
    moveText: String
    status: GameStatus!
    white: String
  }
`;
