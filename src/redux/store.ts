import {Action, configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import rootReducer from "./rootReducer";
// ...
export const store = configureStore({
    reducer: rootReducer
})
export interface RejectedAction extends Action {
    error: Error
}

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types