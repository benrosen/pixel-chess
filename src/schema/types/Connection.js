export default /* GraphQL */ `
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
