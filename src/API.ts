/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMuscleGroupInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelMuscleGroupConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMuscleGroupConditionInput | null > | null,
  or?: Array< ModelMuscleGroupConditionInput | null > | null,
  not?: ModelMuscleGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateMuscleGroupInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteMuscleGroupInput = {
  id?: string | null,
};

export type CreateExerciseInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  videoUrl?: string | null,
  imageUrl?: string | null,
  muscleGroupID: string,
};

export type ModelExerciseConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  muscleGroupID?: ModelIDInput | null,
  and?: Array< ModelExerciseConditionInput | null > | null,
  or?: Array< ModelExerciseConditionInput | null > | null,
  not?: ModelExerciseConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateExerciseInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  videoUrl?: string | null,
  imageUrl?: string | null,
  muscleGroupID?: string | null,
};

export type DeleteExerciseInput = {
  id?: string | null,
};

export type ModelMuscleGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMuscleGroupFilterInput | null > | null,
  or?: Array< ModelMuscleGroupFilterInput | null > | null,
  not?: ModelMuscleGroupFilterInput | null,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  muscleGroupID?: ModelIDInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
};

export type CreateMuscleGroupMutationVariables = {
  input: CreateMuscleGroupInput,
  condition?: ModelMuscleGroupConditionInput | null,
};

export type CreateMuscleGroupMutation = {
  createMuscleGroup:  {
    __typename: "MuscleGroup",
    id: string,
    name: string,
    description: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string,
        description: string | null,
        videoUrl: string | null,
        imageUrl: string | null,
        muscleGroupID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateMuscleGroupMutationVariables = {
  input: UpdateMuscleGroupInput,
  condition?: ModelMuscleGroupConditionInput | null,
};

export type UpdateMuscleGroupMutation = {
  updateMuscleGroup:  {
    __typename: "MuscleGroup",
    id: string,
    name: string,
    description: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string,
        description: string | null,
        videoUrl: string | null,
        imageUrl: string | null,
        muscleGroupID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteMuscleGroupMutationVariables = {
  input: DeleteMuscleGroupInput,
  condition?: ModelMuscleGroupConditionInput | null,
};

export type DeleteMuscleGroupMutation = {
  deleteMuscleGroup:  {
    __typename: "MuscleGroup",
    id: string,
    name: string,
    description: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string,
        description: string | null,
        videoUrl: string | null,
        imageUrl: string | null,
        muscleGroupID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type CreateExerciseMutation = {
  createExercise:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description: string | null,
    videoUrl: string | null,
    imageUrl: string | null,
    muscleGroupID: string,
    muscleGroup:  {
      __typename: "MuscleGroup",
      id: string,
      name: string,
      description: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseMutation = {
  updateExercise:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description: string | null,
    videoUrl: string | null,
    imageUrl: string | null,
    muscleGroupID: string,
    muscleGroup:  {
      __typename: "MuscleGroup",
      id: string,
      name: string,
      description: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type DeleteExerciseMutation = {
  deleteExercise:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description: string | null,
    videoUrl: string | null,
    imageUrl: string | null,
    muscleGroupID: string,
    muscleGroup:  {
      __typename: "MuscleGroup",
      id: string,
      name: string,
      description: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetMuscleGroupQueryVariables = {
  id: string,
};

export type GetMuscleGroupQuery = {
  getMuscleGroup:  {
    __typename: "MuscleGroup",
    id: string,
    name: string,
    description: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string,
        description: string | null,
        videoUrl: string | null,
        imageUrl: string | null,
        muscleGroupID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListMuscleGroupsQueryVariables = {
  filter?: ModelMuscleGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMuscleGroupsQuery = {
  listMuscleGroups:  {
    __typename: "ModelMuscleGroupConnection",
    items:  Array< {
      __typename: "MuscleGroup",
      id: string,
      name: string,
      description: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetExerciseQueryVariables = {
  id: string,
};

export type GetExerciseQuery = {
  getExercise:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description: string | null,
    videoUrl: string | null,
    imageUrl: string | null,
    muscleGroupID: string,
    muscleGroup:  {
      __typename: "MuscleGroup",
      id: string,
      name: string,
      description: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      name: string,
      description: string | null,
      videoUrl: string | null,
      imageUrl: string | null,
      muscleGroupID: string,
      muscleGroup:  {
        __typename: "MuscleGroup",
        id: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateMuscleGroupSubscriptionVariables = {
  owner: string,
};

export type OnCreateMuscleGroupSubscription = {
  onCreateMuscleGroup:  {
    __typename: "MuscleGroup",
    id: string,
    name: string,
    description: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string,
        description: string | null,
        videoUrl: string | null,
        imageUrl: string | null,
        muscleGroupID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateMuscleGroupSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMuscleGroupSubscription = {
  onUpdateMuscleGroup:  {
    __typename: "MuscleGroup",
    id: string,
    name: string,
    description: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string,
        description: string | null,
        videoUrl: string | null,
        imageUrl: string | null,
        muscleGroupID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteMuscleGroupSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMuscleGroupSubscription = {
  onDeleteMuscleGroup:  {
    __typename: "MuscleGroup",
    id: string,
    name: string,
    description: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string,
        description: string | null,
        videoUrl: string | null,
        imageUrl: string | null,
        muscleGroupID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateExerciseSubscriptionVariables = {
  owner: string,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description: string | null,
    videoUrl: string | null,
    imageUrl: string | null,
    muscleGroupID: string,
    muscleGroup:  {
      __typename: "MuscleGroup",
      id: string,
      name: string,
      description: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateExerciseSubscriptionVariables = {
  owner: string,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description: string | null,
    videoUrl: string | null,
    imageUrl: string | null,
    muscleGroupID: string,
    muscleGroup:  {
      __typename: "MuscleGroup",
      id: string,
      name: string,
      description: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteExerciseSubscriptionVariables = {
  owner: string,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description: string | null,
    videoUrl: string | null,
    imageUrl: string | null,
    muscleGroupID: string,
    muscleGroup:  {
      __typename: "MuscleGroup",
      id: string,
      name: string,
      description: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
