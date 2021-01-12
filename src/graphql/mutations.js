/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const appendMoveText = /* GraphQL */ `
  mutation AppendMoveText($input: AppendMoveTextInput!) {
    appendMoveText(input: $input) {
      id
      black
      moveText
      status
      white
      createdAt
      updatedAt
      version
    }
  }
`;
export const createConnection = /* GraphQL */ `
  mutation CreateConnection($input: CreateConnectionInput!) {
    createConnection(input: $input) {
      id
      gameId
      game {
        id
        black
        moveText
        status
        white
        createdAt
        updatedAt
        version
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame {
    createGame {
      id
      black
      moveText
      status
      white
      createdAt
      updatedAt
      version
    }
  }
`;
export const createMove = /* GraphQL */ `
  mutation CreateMove($input: CreateMoveInput!) {
    createMove(input: $input) {
      id
      gameId
      moveText
      createdAt
      updatedAt
    }
  }
`;
export const deleteConnection = /* GraphQL */ `
  mutation DeleteConnection($input: DeleteConnectionInput!) {
    deleteConnection(input: $input) {
      id
      gameId
      game {
        id
        black
        moveText
        status
        white
        createdAt
        updatedAt
        version
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const setBlackPlayer = /* GraphQL */ `
  mutation SetBlackPlayer($input: SetPlayerInput!) {
    setBlackPlayer(input: $input) {
      id
      black
      moveText
      status
      white
      createdAt
      updatedAt
      version
    }
  }
`;
export const setWhitePlayer = /* GraphQL */ `
  mutation SetWhitePlayer($input: SetPlayerInput!) {
    setWhitePlayer(input: $input) {
      id
      black
      moveText
      status
      white
      createdAt
      updatedAt
      version
    }
  }
`;
export const updateStatus = /* GraphQL */ `
  mutation UpdateStatus($input: UpdateStatusInput!) {
    updateStatus(input: $input) {
      id
      black
      moveText
      status
      white
      createdAt
      updatedAt
      version
    }
  }
`;
