/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      vibes
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      vibes
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      vibes
      createdAt
      updatedAt
    }
  }
`;
export const createVibe = /* GraphQL */ `
  mutation CreateVibe(
    $input: CreateVibeInput!
    $condition: ModelVibeConditionInput
  ) {
    createVibe(input: $input, condition: $condition) {
      id
      name
      description
      avatar
      contributorIds
      createdAt
      updatedAt
    }
  }
`;
export const updateVibe = /* GraphQL */ `
  mutation UpdateVibe(
    $input: UpdateVibeInput!
    $condition: ModelVibeConditionInput
  ) {
    updateVibe(input: $input, condition: $condition) {
      id
      name
      description
      avatar
      contributorIds
      createdAt
      updatedAt
    }
  }
`;
export const deleteVibe = /* GraphQL */ `
  mutation DeleteVibe(
    $input: DeleteVibeInput!
    $condition: ModelVibeConditionInput
  ) {
    deleteVibe(input: $input, condition: $condition) {
      id
      name
      description
      avatar
      contributorIds
      createdAt
      updatedAt
    }
  }
`;
