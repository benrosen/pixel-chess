/**
 * A chess move represented in standard algebraic notation.
 *
 * @typedef Move
 * @property {string} id The id of the move.
 * @property {string} gameId The id of the game associated with this move.
 * @property {string} moveText The move represented in standard algebraic notation.
 */
module.exports = /* GraphQL */ `
  type Move
    @aws_iam
    @auth(rules: [{ allow: public, provider: iam, operations: [create] }])
    @model(mutations: null, subscriptions: null) {
    id: ID!
    gameId: ID!
    moveText: String!
  }
`;
