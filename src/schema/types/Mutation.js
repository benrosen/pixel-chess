/**
 * @typedef Mutation
 * @property {AppendMoveTextMutation} appendMoveText
 * @property {CreateConnectionMutation} createConnection
 * @property {CreateGameMutation} createGame
 * @property {CreateMoveMutation} createMove
 * @property {DeleteConnectionMutation} deleteConnection
 * @property {SetPlayerMutation} setPlayer
 * @property {UpdateStatusMutation} updateStatus
 */
export default /* GraphQL */ `
  type Mutation {
    appendMoveText(input: AppendMoveTextInput!): Game @aws_iam
    createConnection(input: CreateConnectionInput!): Connection @aws_iam
    createGame: Game @aws_iam
    createMove(input: CreateMoveInput!): Move @aws_iam
    deleteConnection(input: DeleteConnectionInput!): Connection @aws_iam
    setPlayer(input: SetPlayerInput!): Game @aws_iam
    updateStatus(input: UpdateStatusInput!): Game @aws_iam
  }
`;
