/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createMoment = /* GraphQL */ `
  mutation CreateMoment(
    $input: CreateMomentInput!
    $condition: ModelMomentConditionInput
  ) {
    createMoment(input: $input, condition: $condition) {
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
export const updateMoment = /* GraphQL */ `
  mutation UpdateMoment(
    $input: UpdateMomentInput!
    $condition: ModelMomentConditionInput
  ) {
    updateMoment(input: $input, condition: $condition) {
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
export const deleteMoment = /* GraphQL */ `
  mutation DeleteMoment(
    $input: DeleteMomentInput!
    $condition: ModelMomentConditionInput
  ) {
    deleteMoment(input: $input, condition: $condition) {
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
