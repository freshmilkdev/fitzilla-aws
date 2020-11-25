import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {IMuscleGroup} from "../../shared/interfaces";
import {isPendingAction, isRejectedAction} from "../store";

export const fetchMuscleGroups = createAsyncThunk('muscleGroups/fetchMuscleGroups', async () => {
    const muscleGroups: any = await API.graphql({query: queries.listMuscleGroups});
    return muscleGroups?.data.listMuscleGroups.items;
});

const initialMuscleGroups: Array<string> = ["Abs", "Arms", "Back", "Chest", "Legs", "Shoulders"];
export const createMuscleGroups = createAsyncThunk('muscleGroups/createMuscleGroups', async (): Promise<Array<object>> => {
    const createInitialMuscleGroups: any = initialMuscleGroups.map(name => API.graphql({
        query: mutations.createMuscleGroup,
        variables: {input: {name}}
    }));
    return await Promise.all(createInitialMuscleGroups);
});


interface IMuscleGroupsState {
    items: Array<IMuscleGroup>
    loading: boolean,
    error: boolean
}

const initialState: IMuscleGroupsState = {
    items: [],
    loading: false,
    error: false
}



const muscleGroupsSlice = createSlice({
    name: 'muscleGroups',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchMuscleGroups.fulfilled, (state: IMuscleGroupsState, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = false;
        }).addCase(createMuscleGroups.fulfilled, (state: IMuscleGroupsState, action) => {
            state.items = action.payload.map((item: any) => item?.data.createMuscleGroup);
            state.loading = false;
            state.error = false;
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
export const muscleGroupsReducer = muscleGroupsSlice.reducer;
// const {createPost} = muscleGroupsSlice.actions