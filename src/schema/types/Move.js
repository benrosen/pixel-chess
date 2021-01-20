export default /* GraphQL */ `
  type Move
    @aws_iam
    @auth(rules: [{ allow: public, provider: iam, operations: [create] }])
    @model(mutations: null, subscriptions: null) {
    id: ID!
    gameId: ID!
    moveText: String!
  }
`;
