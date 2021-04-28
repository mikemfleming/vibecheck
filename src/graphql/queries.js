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
  query GetVibe($id: ID!) {
    getVibe(id: $id) {
      id
      name
      slug
      description
      avatar
      contributorIds
      createdAt
      updatedAt
    }
  }
`;
export const listVibes = /* GraphQL */ `
  query ListVibes(
    $filter: ModelVibeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVibes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        description
        avatar
        contributorIds
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
