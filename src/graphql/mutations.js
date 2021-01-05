/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateConnection = /* GraphQL */ `
  mutation UpdateConnection(
    $input: UpdateConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    updateConnection(input: $input, condition: $condition) {
      id
      matchId
      createdAt
      updatedAt
      match {
        id
        connections {
          nextToken
        }
        moves {
          nextToken
        }
        playerIds
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteConnection = /* GraphQL */ `
  mutation DeleteConnection(
    $input: DeleteConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    deleteConnection(input: $input, condition: $condition) {
      id
      matchId
      createdAt
      updatedAt
      match {
        id
        connections {
          nextToken
        }
        moves {
          nextToken
        }
        playerIds
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
      id
      connections {
        items {
          id
          matchId
          createdAt
          updatedAt
        }
        nextToken
      }
      moves {
        items {
          id
          matchId
          notation
          createdAt
          updatedAt
        }
        nextToken
      }
      playerIds
      createdAt
      updatedAt
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
      id
      connections {
        items {
          id
          matchId
          createdAt
          updatedAt
        }
        nextToken
      }
      moves {
        items {
          id
          matchId
          notation
          createdAt
          updatedAt
        }
        nextToken
      }
      playerIds
      createdAt
      updatedAt
    }
  }
`;
export const updateMove = /* GraphQL */ `
  mutation UpdateMove(
    $input: UpdateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    updateMove(input: $input, condition: $condition) {
      id
      matchId
      notation
      createdAt
      updatedAt
      match {
        id
        connections {
          nextToken
        }
        moves {
          nextToken
        }
        playerIds
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteMove = /* GraphQL */ `
  mutation DeleteMove(
    $input: DeleteMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    deleteMove(input: $input, condition: $condition) {
      id
      matchId
      notation
      createdAt
      updatedAt
      match {
        id
        connections {
          nextToken
        }
        moves {
          nextToken
        }
        playerIds
        createdAt
        updatedAt
      }
    }
  }
`;
export const createConnection = /* GraphQL */ `
  mutation CreateConnection(
    $input: CreateConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    createConnection(input: $input, condition: $condition) {
      id
      matchId
      createdAt
      updatedAt
      match {
        id
        connections {
          nextToken
        }
        moves {
          nextToken
        }
        playerIds
        createdAt
        updatedAt
      }
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
      id
      connections {
        items {
          id
          matchId
          createdAt
          updatedAt
        }
        nextToken
      }
      moves {
        items {
          id
          matchId
          notation
          createdAt
          updatedAt
        }
        nextToken
      }
      playerIds
      createdAt
      updatedAt
    }
  }
`;
export const createMove = /* GraphQL */ `
  mutation CreateMove(
    $input: CreateMoveInput!
    $condition: ModelMoveConditionInput
  ) {
    createMove(input: $input, condition: $condition) {
      id
      matchId
      notation
      createdAt
      updatedAt
      match {
        id
        connections {
          nextToken
        }
        moves {
          nextToken
        }
        playerIds
        createdAt
        updatedAt
      }
    }
  }
`;
