import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {IExercise} from "../../../../shared/interfaces";
import {ExercisesListItem} from "./ExerciseListItem";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));
type ExercisesListProps = {
    exercises: Array<IExercise>
}
export const ExercisesList: React.FC<ExercisesListProps> = ({exercises}): React.ReactElement => {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {(exercises || []).map((item) => <ExercisesListItem {...item} key={item.id}/>)}
        </List>
    );
};