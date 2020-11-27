import {Action, AnyAction, createSlice} from '@reduxjs/toolkit';
import {RejectedAction} from "../store";

export function isRejectedAction(action: AnyAction): action is RejectedAction {
    return action.type.endsWith('rejected')
}

export function isPendingAction(action: AnyAction): action is Action {
    return action.type.endsWith('pending')
}

export function isFulfilledAction(action: AnyAction): action is Action {
    return action.type.endsWith('fulfilled')
}

interface IRequestStatus {
    loading: boolean,
    inProgressCount: number,
    error: boolean | null
}

const initialState: IRequestStatus = {
    loading: false,
    inProgressCount: 0,
    error: null
}


const requestStatusSlice = createSlice({
    name: 'requestStatus',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(
            isFulfilledAction,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                const inProgress = state.inProgressCount - 1;
                state.inProgressCount = inProgress;
                state.error = false;
                state.loading = inProgress > 0;
            }
        ).addMatcher(
            isPendingAction,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                const inProgress = state.inProgressCount + 1;
                state.inProgressCount = inProgress;
                state.error = false;
                state.loading = inProgress > 0;
            }
        ).addMatcher(
            isRejectedAction,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                const inProgress = state.inProgressCount - 1;
                state.inProgressCount = inProgress;
                state.error = true;
                state.loading = inProgress > 0;
            }
        )
    }
})
export const requestStatusReducer = requestStatusSlice.reducer;
// const {createPost} = muscleGroupsSlice.actions