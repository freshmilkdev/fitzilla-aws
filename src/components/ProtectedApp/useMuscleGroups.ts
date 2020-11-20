import React, {useEffect} from 'react';
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {createMuscleGroups, fetchMuscleGroups} from "../../redux/slices/muscleGroups";

export const useMuscleGroups = () => {
    const dispatch = useAppDispatch();
    const muscleGroups = useSelector((state: RootState) => state.muscleGroups.items);
    useEffect(() => {
        dispatch(fetchMuscleGroups()).then(({payload}) => {
            if (!payload.length) {
                dispatch(createMuscleGroups());
            }
        });
    }, []);
    return muscleGroups;
}