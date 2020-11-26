import {combineReducers} from '@reduxjs/toolkit'
import {muscleGroupsReducer} from "./slices/muscleGroups";
import {exercisesReducer} from "./slices/exercises";
import {requestStatusReducer} from "./slices/requestStatus";

const rootReducer = combineReducers({
    requestStatus: requestStatusReducer,
    muscleGroups: muscleGroupsReducer,
    exercises: exercisesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer