/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      name
      bio
      vibes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      name
      bio
      vibes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      name
      bio
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
