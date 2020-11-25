import {Action, AnyAction, configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import rootReducer from "./rootReducer";
// ...
export const store = configureStore({
    reducer: rootReducer
})

export interface RejectedAction extends Action {
    error: Error
}
export function isRejectedAction(action: AnyAction): action is RejectedAction {
    return action.type.endsWith('rejected')
}

export function isPendingAction(action: AnyAction): action is Action {
    return action.type.endsWith('pending')
}

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types