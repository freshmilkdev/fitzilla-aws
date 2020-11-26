import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {IMuscleGroup} from "../../shared/interfaces";

export const fetchMuscleGroups = createAsyncThunk('muscleGroups/fetchMuscleGroups', async () => {
    const muscleGroups: any = await API.graphql({query: queries.listMuscleGroups});
    return muscleGroups?.data.listMuscleGroups.items
        .sort((a: IMuscleGroup, b: IMuscleGroup) => a.name.localeCompare(b.name));
});

/*const initialMuscleGroups: Array<string> = ["Abs", "Arms", "Back", "Chest", "Legs", "Shoulders"];
export const createMuscleGroups = createAsyncThunk('muscleGroups/createMuscleGroups', async (): Promise<Array<object>> => {
    const createInitialMuscleGroups: any = initialMuscleGroups.map(name => API.graphql({
        query: mutations.createMuscleGroup,
        variables: {input: {name}}
    }));
    return await Promise.all(createInitialMuscleGroups);
});*/

interface IMuscleGroupsState {
    items: Array<IMuscleGroup>
    loading: boolean,
    error: boolean | null
}

const initialState: IMuscleGroupsState = {
    items: [],
    loading: false,
    error: null
}

const muscleGroupsSlice = createSlice({
    name: 'muscleGroups',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchMuscleGroups.fulfilled, (state: IMuscleGroupsState, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(fetchMuscleGroups.pending, (state: IMuscleGroupsState, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchMuscleGroups.rejected, (state: IMuscleGroupsState, action) => {
            state.loading = false;
            state.error = true;
        })
    }
})
export const muscleGroupsReducer = muscleGroupsSlice.reducer;
// const {createPost} = muscleGroupsSlice.actions