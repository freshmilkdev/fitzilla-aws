import {createSlice, createAsyncThunk, Action, AnyAction} from '@reduxjs/toolkit';
import {CreateExerciseInput, DeleteExerciseInput, UpdateExerciseInput} from "../../API";
import * as mutations from "../../graphql/mutations";
import {IExercise, IExerciseById, IMuscleGroup} from "../../shared/interfaces";
import {API} from "aws-amplify";
import {RejectedAction} from "../store";


interface IExercisesState {
    loading: boolean,
    error: boolean | null,
    items: {
        byId: IExerciseById,
        allIds: Array<string>
    }
}

const initialState: IExercisesState = {
    loading: false,
    error: null,
    items: {
        byId: {},
        allIds: []
    }
}

export function isRejectedAction(action: AnyAction): action is RejectedAction {
    return action.type.includes('exercises/') && action.type.endsWith('rejected')
}

export function isPendingAction(action: AnyAction): action is Action {
    return action.type.includes('exercises/') && action.type.endsWith('pending')
}

export const createExercise = createAsyncThunk('exercises/createExercise', async (exercise: CreateExerciseInput) => {
    const newExercise: any = await API.graphql({
        query: mutations.createExercise,
        variables: {input: exercise}
    });
    return newExercise.data.createExercise;
});
export const updateExercise = createAsyncThunk('exercises/updateExercise', async (exercise: UpdateExerciseInput) => {
    const updatedExercise: any = await API.graphql({
        query: mutations.updateExercise,
        variables: {input: exercise}
    });
    return updatedExercise.data.updateExercise;
});
export const deleteExercise = createAsyncThunk('exercises/deleteExercise', async (exercise: DeleteExerciseInput) => {
    const updatedExercise: any = await API.graphql({
        query: mutations.deleteExercise,
        variables: {input: exercise}
    });
    return updatedExercise.data.deleteExercise;
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
            state.loading = false;
            state.error = null;
        }).addCase(updateExercise.fulfilled, (state: IExercisesState, action) => {
            state.items.byId[action.payload.id] = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(deleteExercise.fulfilled, (state: IExercisesState, action) => {
            const {id} = action.payload;
            const {[id]: remove, ...rest} = state.items.byId;
            state.items.byId = {...rest};
            state.items.allIds = state.items.allIds.filter(item => item !== id);
            state.loading = false;
            state.error = null;
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