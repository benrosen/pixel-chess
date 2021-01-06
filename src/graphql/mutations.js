/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame {
    createGame {
      id
      createdAt
      updatedAt
      version
      moveText
      players
      status
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame($input: UpdateGameInput) {
    updateGame(input: $input) {
      id
      createdAt
      updatedAt
      version
      moveText
      players
      status
    }
  }
`;
