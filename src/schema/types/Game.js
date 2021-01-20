export default /* GraphQL */ `
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
    status: Status!
    white: String
  }
`;
