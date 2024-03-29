import {useEffect} from 'react';
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {/*createMuscleGroups, */fetchMuscleGroups} from "../../redux/slices/muscleGroups";
import {initExercises} from "../../redux/slices/exercises";
import {IAuthUser} from "../Authentication/useAuthenticatedUser";
import {IMuscleGroup} from "../../shared/interfaces";


export const useMuscleGroupsExercises = (authUser: IAuthUser | null): Array<IMuscleGroup> => {
    const dispatch = useAppDispatch();
    const muscleGroups = useSelector((state: RootState) => state.muscleGroups.items);

    useEffect(() => {
        if (!muscleGroups.length && authUser) {
            dispatch(fetchMuscleGroups()).then(({payload}) => {
                // (payload && payload.length) ? dispatch(initExercises(payload)) : dispatch(createMuscleGroups());
                if(payload && payload.length){
                    dispatch(initExercises(payload))
                }
            });
        }
    }, [authUser]);

    return muscleGroups;
}