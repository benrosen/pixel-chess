/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConnection = /* GraphQL */ `
  query GetConnection($id: ID!) {
    getConnection(id: $id) {
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
export const listConnections = /* GraphQL */ `
  query ListConnections(
    $filter: ModelConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        matchId
        createdAt
        updatedAt
        match {
          id
          playerIds
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getMove = /* GraphQL */ `
  query GetMove($id: ID!) {
    getMove(id: $id) {
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
export const listMoves = /* GraphQL */ `
  query ListMoves(
    $filter: ModelMoveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        matchId
        notation
        createdAt
        updatedAt
        match {
          id
          playerIds
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const connectionsByMatchId = /* GraphQL */ `
  query ConnectionsByMatchId(
    $matchId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    connectionsByMatchId(
      matchId: $matchId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        matchId
        createdAt
        updatedAt
        match {
          id
          playerIds
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const movesByMatchId = /* GraphQL */ `
  query MovesByMatchId(
    $matchId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMoveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    movesByMatchId(
      matchId: $matchId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        matchId
        notation
        createdAt
        updatedAt
        match {
          id
          playerIds
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listMatchs = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
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
