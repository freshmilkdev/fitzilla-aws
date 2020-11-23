import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/rootReducer";
import {IMuscleGroup} from "../../../redux/slices/muscleGroups";
import {MuscleGroup} from "./MuscleGroup/MuscleGroup";

import {MuscleGroupSkeleton} from "./MuscleGroup/MuscleGroupSkeleton";

let muscleGroupsSkeleton = Array(6).fill("");
const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: 56 + theme.spacing(2),
        right: theme.spacing(2),
    },
}));
export const Exercises: React.FC = () => {
    const muscleGroups: Array<IMuscleGroup> = useSelector((state: RootState) => state.muscleGroups.items);
    const loading = useSelector((state: RootState) => state.muscleGroups.loading);
    const classes = useStyles();
    return <>
        {loading ?
                muscleGroupsSkeleton.map((v, i) => <MuscleGroupSkeleton key={i}/>) :
                (muscleGroups || []).map((group: IMuscleGroup) => <MuscleGroup {...group} key={group.id}/>)
        }
        <Fab size="medium" color="secondary" aria-label="add" className={classes.fab}>
            <AddIcon/>
        </Fab>
    </>
};