import {createSlice, createAsyncThunk, Action, AnyAction} from '@reduxjs/toolkit';
import {CreateExerciseInput} from "../../API";
import * as mutations from "../../graphql/mutations";
import {IExercise, IExerciseById, IMuscleGroup} from "../../shared/interfaces";
import {API} from "aws-amplify";
import * as queries from "../../graphql/queries";
import {isPendingAction, isRejectedAction} from "../store";


interface IExercisesState {
    loading: boolean,
    error: boolean,
    items: {
        byId: IExerciseById,
        allIds: Array<string>
    }
}

const initialState: IExercisesState = {
    loading: false,
    error: false,
    items: {
        byId: {},
        allIds: []
    }
}
export const createExercise = createAsyncThunk('exercises/createExercise', async (exercise: CreateExerciseInput) => {
    const newExercise: any = await API.graphql({
        query: mutations.createExercise,
        variables: {input: exercise}
    });
    return newExercise.data.createExercise;
});


const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        initExercises: (state, action) => {
            let byId: { [key: string]: IExercise } = {};
            let allIds: Array<string> = [];
            action.payload.forEach((muscleGroup: IMuscleGroup) => {
                muscleGroup.exercises.items.map((exercise: IExercise) => {
                    if (exercise.id) {
                        byId[exercise.id] = exercise;
                        allIds.push(exercise.id);
                    }
                })
            });
            state.items = {byId, allIds};
        }
    },
    extraReducers: builder => {
        builder.addCase(createExercise.fulfilled, (state: IExercisesState, action) => {
             state.items.byId[action.payload.id] = action.payload;
             state.items.allIds.push(action.payload.id);
            console.log(action.payload)
            /* state.items = action.payload;
             state.loading = false;
             state.error = false;*/
        }).addMatcher(
            isPendingAction,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                state.loading = true;
                state.error = false;
            }
        ).addMatcher(
            isRejectedAction,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                state.loading = false;
                state.error = true;
            }
        )
    }
})
export const exercisesReducer = exercisesSlice.reducer;
export const {initExercises} = exercisesSlice.actions