import {createSlice, createAsyncThunk, Action, AnyAction} from '@reduxjs/toolkit';
import {API} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

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

/*interface ICreateMuscleGroup {
    id: string,
    name: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    description: string | null,
    exercises: Array<object>
}

interface ICreateMuscleGroupData {
    data: ICreateMuscleGroup
}*/
export interface IExercise {
    id: string,
    name: string
}
export interface IExercisesList {
    items: Array<IExercise>
}
export interface IMuscleGroup {
    id: string,
    name: string,
    description?: string,
    exercises: IExercisesList,
    createdAt: string
}
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

interface RejectedAction extends Action {
    error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
    return action.type.endsWith('rejected')
}

function isPendingAction(action: AnyAction): action is Action {
    return action.type.endsWith('pending')
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