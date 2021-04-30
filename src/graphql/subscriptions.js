/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      vibes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      vibes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      vibes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVibe = /* GraphQL */ `
  subscription OnCreateVibe {
    onCreateVibe {
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
export const onUpdateVibe = /* GraphQL */ `
  subscription OnUpdateVibe {
    onUpdateVibe {
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
export const onDeleteVibe = /* GraphQL */ `
  subscription OnDeleteVibe {
    onDeleteVibe {
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
export const onCreateMoment = /* GraphQL */ `
  subscription OnCreateMoment {
    onCreateMoment {
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
export const onUpdateMoment = /* GraphQL */ `
  subscription OnUpdateMoment {
    onUpdateMoment {
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
export const onDeleteMoment = /* GraphQL */ `
  subscription OnDeleteMoment {
    onDeleteMoment {
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
