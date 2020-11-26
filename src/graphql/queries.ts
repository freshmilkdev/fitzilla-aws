/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMuscleGroup = /* GraphQL */ `
  query GetMuscleGroup($id: ID!) {
    getMuscleGroup(id: $id) {
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
export const listMuscleGroups = /* GraphQL */ `
  query ListMuscleGroups(
    $filter: ModelMuscleGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMuscleGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
