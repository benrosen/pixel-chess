/**
 * A connection to a game.
 *
 * @typedef Connection
 * @property {string} id The id of the connection.
 * @property {string} gameId The id of the game associated with this connection.
 * @property {Game} game The game associated with this connection.
 */
module.exports = /* GraphQL */ `
  type Connection
    @aws_iam
    @auth(
      rules: [
        { allow: public, provider: iam, operations: [create] }
        { allow: owner, operations: [delete] }
      ]
    )
    @model(mutations: null, subscriptions: null) {
    id: ID!
    gameId: ID!
    game: Game @connection(fields: ["gameId"]) @aws_iam
  }
`;
