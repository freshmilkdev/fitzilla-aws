import {CreateExerciseInput, CreateMuscleGroupInput} from "../API";

export interface IExercise extends CreateExerciseInput {
    id: string,
    name: string,
    description: string,
    videoUrl: string,
    imageUrl: string,
    muscleGroup: IMuscleGroup | null,
    muscleGroupID: string
}

export interface IExerciseById {
    [key: string]: IExercise
}

export interface IExercisesList {
    items: Array<IExercise>
}

export interface IMuscleGroup /*extends CreateMuscleGroupInput*/{
    id: string,
    name: string,
    description?: string,
    exercises: IExercisesList,
    createdAt: string
}