import {createSlice, createAsyncThunk, Action, AnyAction} from '@reduxjs/toolkit';

import {IExercise, IExerciseById, IMuscleGroup} from "../../shared/interfaces";


interface IExercisesState {
    items: {
        byId: IExerciseById,
        allIds: Array<string>
    }
}

const initialState: IExercisesState = {
    items: {
        byId: {},
        allIds: []
    }
}

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        initExercises: (state, action) => {
            let byId: { [key: string]: IExercise } = {};
            let allIds: Array<string> = [];
            action.payload.forEach((muscleGroup: IMuscleGroup) => {
                muscleGroup.exercises.items.map((exercise: IExercise) => {
                    byId[exercise.id] = exercise;
                    allIds.push(exercise.id);
                })
            });
            state.items = {byId, allIds};
        }
    },
})
export const exercisesReducer = exercisesSlice.reducer;
export const {initExercises} = exercisesSlice.actions