/**
 * @typedef Subscription
 * @property {OnUpdateGameSubscription} onUpdateGame
 */
module.exports = /* GraphQL */ `
  type Subscription {
    onUpdateGame(id: ID!): Game
      @aws_iam
      @aws_subscribe(mutations: ["appendMoveText", "setPlayer", "updateStatus"])
  }
`;
