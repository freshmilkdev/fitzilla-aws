import {combineReducers} from '@reduxjs/toolkit'
import {muscleGroupsReducer} from "./slices/muscleGroups";

const rootReducer = combineReducers({
    muscleGroups: muscleGroupsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer