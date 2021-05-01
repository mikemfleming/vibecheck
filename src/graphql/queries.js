/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($name: String!) {
    getUser(name: $name) {
      name
      bio
      vibes
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $name: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        bio
        vibes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVibe = /* GraphQL */ `
  query GetVibe($name: String!) {
    getVibe(name: $name) {
      id
      name
      description
      avatar
      contributors
      moments {
        items {
          id
          vibeId
          title
          type
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVibes = /* GraphQL */ `
  query ListVibes(
    $name: String
    $filter: ModelVibeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVibes(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        description
        avatar
        contributors
        moments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMoment = /* GraphQL */ `
  query GetMoment($id: ID!) {
    getMoment(id: $id) {
      id
      vibeId
      title
      type
      content
      createdAt
      updatedAt
    }
  }
`;
export const listMoments = /* GraphQL */ `
  query ListMoments(
    $filter: ModelMomentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vibeId
        title
        type
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
