import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {IExerciseById} from "../../../../shared/interfaces";
import {ExercisesListItem} from "./ExerciseListItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/rootReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export const ExercisesList: React.FC<{ muscleGroupId: string }> = ({muscleGroupId}): React.ReactElement => {
    const classes = useStyles();
    const exercisesById: IExerciseById = useSelector((state: RootState) => state.exercises.items.byId);
    const exercisesAll: Array<string> = useSelector((state: RootState) => state.exercises.items.allIds);
    const exercises = exercisesAll
        .filter((exerciseId) => exercisesById[exerciseId].muscleGroupID === muscleGroupId)
        .map((exerciseId) => exercisesById[exerciseId]);

    return (
        <List className={classes.root}>
            {(exercises || []).map((item) => <ExercisesListItem {...item} key={item.id}/>)}
        </List>
    );
};