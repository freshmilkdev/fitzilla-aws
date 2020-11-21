import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/rootReducer";
import {IMuscleGroup} from "../../../redux/slices/muscleGroups";
import {MuscleGroup} from "./MuscleGroup/MuscleGroup";


export const Exercises: React.FC = () => {
    const muscleGroups: Array<IMuscleGroup> = useSelector((state: RootState) => state.muscleGroups.items);
    return <div>{
        (muscleGroups || []).map((group: IMuscleGroup) => {
            return <MuscleGroup {...group} key={group.id}/>
        })
    }</div>
};