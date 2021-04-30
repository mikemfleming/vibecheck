/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      vibes
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
