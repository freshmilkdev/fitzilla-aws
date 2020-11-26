import {Action, AnyAction, createSlice} from '@reduxjs/toolkit';
export interface RejectedAction extends Action {
    error: Error
}
export function isRejectedAction(action: AnyAction): action is RejectedAction {
    return action.type.endsWith('rejected')
}

export function isPendingAction(action: AnyAction): action is Action {
    return action.type.endsWith('pending')
}
interface IRequestStatus {
    loading: boolean,
    error: boolean | null
}

const initialState: IRequestStatus = {
    loading: false,
    error: null
}


const requestStatusSlice = createSlice({
    name: 'requestStatus',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(
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
export const requestStatusReducer = requestStatusSlice.reducer;
// const {createPost} = muscleGroupsSlice.actions