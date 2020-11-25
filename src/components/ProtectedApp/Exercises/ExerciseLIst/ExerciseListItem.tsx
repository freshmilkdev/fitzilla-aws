import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {IExercise} from "../../../../shared/interfaces";
import {ExerciseListMenu} from "./ExerciseListMenu";


export const ExercisesListItem: React.FC<IExercise> = (exercise): React.ReactElement => {
    const {id, name} = exercise;
    const labelId = `checkbox-list-label-${id}`;
    return (
        <ListItem key={id} button>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    disableRipple
                    inputProps={{'aria-labelledby': labelId}}
                />
            </ListItemIcon>
            <ListItemText id={labelId} primary={name}/>
            <ListItemSecondaryAction>
                <ExerciseListMenu {...exercise} />
            </ListItemSecondaryAction>
        </ListItem>
    );
};