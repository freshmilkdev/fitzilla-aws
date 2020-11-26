/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMuscleGroup = /* GraphQL */ `
  mutation CreateMuscleGroup(
    $input: CreateMuscleGroupInput!
    $condition: ModelMuscleGroupConditionInput
  ) {
    createMuscleGroup(input: $input, condition: $condition) {
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
export const updateMuscleGroup = /* GraphQL */ `
  mutation UpdateMuscleGroup(
    $input: UpdateMuscleGroupInput!
    $condition: ModelMuscleGroupConditionInput
  ) {
    updateMuscleGroup(input: $input, condition: $condition) {
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
export const deleteMuscleGroup = /* GraphQL */ `
  mutation DeleteMuscleGroup(
    $input: DeleteMuscleGroupInput!
    $condition: ModelMuscleGroupConditionInput
  ) {
    deleteMuscleGroup(input: $input, condition: $condition) {
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
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
