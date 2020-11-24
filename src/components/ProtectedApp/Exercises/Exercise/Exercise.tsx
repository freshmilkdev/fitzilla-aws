import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {IExercise} from "../../../../redux/slices/exercises";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: 56 + theme.spacing(2),
        right: theme.spacing(2),
    },
}));
const initialExerciseFormState: IExercise = {
    id: '',
    name: ''
}
export const Exercise: React.FC = () => {
    const classes = useStyles();
    const [formState, updateFormState] = useState<IExercise>(initialExerciseFormState);
    return <>
        a
    </>
};