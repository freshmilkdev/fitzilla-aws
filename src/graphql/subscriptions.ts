/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMuscleGroup = /* GraphQL */ `
  subscription OnCreateMuscleGroup {
    onCreateMuscleGroup {
      id
      name
      description
      exercises {
        items {
          id
          name
          description
          videoUrl
          imageUrl
          muscleGroupID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMuscleGroup = /* GraphQL */ `
  subscription OnUpdateMuscleGroup {
    onUpdateMuscleGroup {
      id
      name
      description
      exercises {
        items {
          id
          name
          description
          videoUrl
          imageUrl
          muscleGroupID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMuscleGroup = /* GraphQL */ `
  subscription OnDeleteMuscleGroup {
    onDeleteMuscleGroup {
      id
      name
      description
      exercises {
        items {
          id
          name
          description
          videoUrl
          imageUrl
          muscleGroupID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($owner: String!) {
    onCreateExercise(owner: $owner) {
      id
      name
      description
      videoUrl
      imageUrl
      muscleGroupID
      muscleGroup {
        id
        name
        description
        exercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($owner: String!) {
    onUpdateExercise(owner: $owner) {
      id
      name
      description
      videoUrl
      imageUrl
      muscleGroupID
      muscleGroup {
        id
        name
        description
        exercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($owner: String!) {
    onDeleteExercise(owner: $owner) {
      id
      name
      description
      videoUrl
      imageUrl
      muscleGroupID
      muscleGroup {
        id
        name
        description
        exercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
