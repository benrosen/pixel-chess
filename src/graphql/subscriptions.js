/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConnection = /* GraphQL */ `
  subscription OnCreateConnection {
    onCreateConnection {
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
export const onUpdateConnection = /* GraphQL */ `
  subscription OnUpdateConnection {
    onUpdateConnection {
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
export const onDeleteConnection = /* GraphQL */ `
  subscription OnDeleteConnection {
    onDeleteConnection {
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
export const onCreateMove = /* GraphQL */ `
  subscription OnCreateMove {
    onCreateMove {
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
export const onUpdateMove = /* GraphQL */ `
  subscription OnUpdateMove {
    onUpdateMove {
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
export const onDeleteMove = /* GraphQL */ `
  subscription OnDeleteMove {
    onDeleteMove {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch($playerIds: String) {
    onCreateMatch(playerIds: $playerIds) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch($playerIds: String) {
    onUpdateMatch(playerIds: $playerIds) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch($playerIds: String) {
    onDeleteMatch(playerIds: $playerIds) {
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
