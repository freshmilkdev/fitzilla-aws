import {combineReducers} from '@reduxjs/toolkit'
import {muscleGroupsReducer} from "./slices/muscleGroups";
import {exercisesReducer} from "./slices/exercises";

const rootReducer = combineReducers({
    muscleGroups: muscleGroupsReducer,
    exercises: exercisesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer